import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";
import LoadingSkeleton from "../components/LoadingSkeleton";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import { getAllShows, searchShows } from "../services/tvmazeApi";
import { useDebouncedValue } from "../hooks/useDebouncedValue";

export default function Movies() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, 450);

  const [shows, setShows] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | error
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    let active = true;
    setStatus("loading");

    const request = debouncedQuery.trim()
      ? searchShows(debouncedQuery)
      : getAllShows();

    request
      .then((results) => {
        if (!active) return;
        setShows(results);
        setStatus("success");
      })
      .catch(() => {
        if (!active) return;
        setStatus("error");
      });

    return () => {
      active = false;
    };
  }, [debouncedQuery]);

  function retryLoad() {
    // Re-trigger the effect by toggling status; the debounced query hasn't changed
    // so we re-run the same request that just failed.
    setStatus("loading");
    const request = debouncedQuery.trim()
      ? searchShows(debouncedQuery)
      : getAllShows();

    request
      .then((results) => {
        setShows(results);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
          Explore Movies &amp; Shows
        </h1>
        <p className="mt-3 text-fog">
          Search for your favorite movies and TV shows.
        </p>
      </header>

      <div className="mx-auto mt-8 max-w-xl">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="mt-10">
        {status === "loading" && <LoadingSkeleton count={8} />}

        {status === "error" && (
          <ErrorState
            message="Something went wrong while loading shows."
            onRetry={retryLoad}
          />
        )}

        {status === "success" && shows.length === 0 && (
          <EmptyState query={debouncedQuery} />
        )}

        {status === "success" && shows.length > 0 && (
          <>
            <p className="mb-5 text-sm text-fog">
              {debouncedQuery.trim() ? (
                <>
                  {shows.length} result{shows.length === 1 ? "" : "s"} for
                  &nbsp;&ldquo;{debouncedQuery.trim()}&rdquo;
                </>
              ) : (
                <>{shows.length} shows</>
              )}
            </p>
            <MovieGrid shows={shows} onSeeDetails={setSelectedShow} />
          </>
        )}
      </div>

      {selectedShow && (
        <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </div>
  );
}
