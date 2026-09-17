import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Film, Search, Sparkles, Star } from "lucide-react";
import { getShowsSample } from "../services/tvmazeApi";
import { formatRating } from "../utils/format";

const FEATURES = [
  {
    icon: Search,
    title: "Search anything",
    description:
      "Look up a title and get live results from a constantly updated catalog.",
  },
  {
    icon: Film,
    title: "Thousands of shows",
    description:
      "Browse an ever-growing library spanning every genre and network.",
  },
  {
    icon: Sparkles,
    title: "Full details, one click",
    description:
      "Ratings, genres, runtime, and a synopsis for every show you open.",
  },
];

export default function Home() {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    let active = true;
    getShowsSample(6)
      .then((shows) => {
        if (active) setPosters(shows);
      })
      .catch(() => {
        if (active) setPosters([]);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-hairline">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 12% 18%, rgba(37,99,235,0.35), transparent 45%), radial-gradient(circle at 88% 8%, rgba(79,70,229,0.30), transparent 40%), #0b0e1a",
          }}
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-panel px-4 py-1.5 text-xs font-medium text-fog">
              <Star size={13} className="text-bulb" fill="currentColor" />
              Fresh titles, added every day
            </span>

            <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-wide text-white sm:text-6xl lg:text-7xl">
              Discover Your Next
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-bulb bg-clip-text text-transparent">
                Favorite Show
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base text-fog sm:text-lg">
              Browse thousands of movies and TV shows, search by title, and
              pull up every detail, from ratings and genres to runtime and
              more,
              before you press play.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/movies"
                className="rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03] active:scale-95"
              >
                Explore Movies
              </Link>
              <span className="text-sm text-fog">
                No sign-up required, just start browsing.
              </span>
            </div>
          </div>

          {/* Poster collage, built from real TVMaze artwork when available */}
          <div
            className="relative mx-auto grid h-72 w-full max-w-sm grid-cols-3 gap-3 sm:h-80 lg:h-96"
            aria-hidden="true"
          >
            {Array.from({ length: 6 }).map((_, index) => {
              const show = posters[index];
              const rotations = [
                "-rotate-6",
                "rotate-3",
                "-rotate-2",
                "rotate-6",
                "-rotate-3",
                "rotate-2",
              ];
              const translations = [
                "translate-y-2",
                "-translate-y-3",
                "translate-y-4",
                "-translate-y-1",
                "translate-y-1",
                "-translate-y-4",
              ];
              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-xl border border-hairline bg-panel shadow-2xl shadow-black/40 transition-transform duration-500 hover:z-10 hover:scale-105 hover:rotate-0 ${rotations[index]} ${translations[index]}`}
                >
                  {show?.image?.medium ? (
                    <img
                      src={show.image.medium}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-panel-raised">
                      <Film size={22} className="text-fog" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-hairline bg-panel p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-white">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-1.5 text-sm text-fog">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending strip, populated from live data when it loads */}
      {posters.length > 0 && (
        <section className="border-t border-hairline bg-ink py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-3xl tracking-wide text-white">
                On the catalog right now
              </h2>
              <Link
                to="/movies"
                className="shrink-0 text-sm font-medium text-primary hover:text-white"
              >
                See all &rsaquo;
              </Link>
            </div>

            <div className="mt-6 flex gap-4 overflow-x-auto pb-2 no-scrollbar">
              {posters.map((show) => (
                <Link
                  to="/movies"
                  key={show.id}
                  className="w-32 shrink-0 sm:w-36"
                >
                  <div className="overflow-hidden rounded-xl border border-hairline bg-panel">
                    <img
                      src={show.image?.medium}
                      alt={`Poster for ${show.name}`}
                      className="aspect-[2/3] w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <p className="mt-2 line-clamp-1 text-sm font-medium text-white">
                    {show.name}
                  </p>
                  <p className="text-xs text-fog">
                    ⭐ {formatRating(show.rating)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
