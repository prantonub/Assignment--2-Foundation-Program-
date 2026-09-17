import { useEffect, useRef } from "react";
import {
  X,
  Star,
  Calendar,
  Clock,
  Globe,
  Radio,
  Activity,
  Clapperboard,
} from "lucide-react";
import { formatRating, formatRuntime, getYear, summaryParagraphs } from "../utils/format";

export default function MovieModal({ show, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Escape key closes the modal.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock background scroll while the modal is open.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Send initial focus to the close button for keyboard/screen-reader users.
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  if (!show) return null;

  const posterUrl = show.image?.original || show.image?.medium;
  const paragraphs = summaryParagraphs(show.summary);
  const genres = show.genres?.length ? show.genres : [];

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={handleOverlayClick}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-hairline bg-panel shadow-2xl"
      >
        {/* Header / backdrop */}
        <div className="relative h-40 shrink-0 overflow-hidden bg-panel-raised sm:h-56">
          {posterUrl ? (
            <img
              src={posterUrl}
              alt=""
              className="h-full w-full object-cover object-top opacity-60"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/40 to-transparent" />

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-white transition-colors hover:bg-ink"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="mx-auto -mt-16 w-32 shrink-0 overflow-hidden rounded-xl border-4 border-panel bg-panel-raised shadow-xl sm:mx-0 sm:w-40">
              {posterUrl ? (
                <img
                  src={show.image?.medium || posterUrl}
                  alt={`Poster for ${show.name}`}
                  className="aspect-[2/3] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[2/3] w-full items-center justify-center text-fog">
                  <Clapperboard size={32} strokeWidth={1.5} />
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h2
                id="modal-title"
                className="font-display text-3xl tracking-wide text-white sm:text-4xl"
              >
                {show.name}
              </h2>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-fog">
                <span className="inline-flex items-center gap-1.5">
                  <Star size={15} className="text-bulb" fill="currentColor" />
                  {formatRating(show.rating)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={15} />
                  {getYear(show.premiered)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={15} />
                  {formatRuntime(show.runtime ?? show.averageRuntime)}
                </span>
                {show.status && (
                  <span className="inline-flex items-center gap-1.5">
                    <Activity size={15} />
                    {show.status}
                  </span>
                )}
              </div>

              {genres.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-white"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="prose-summary mt-6 text-sm leading-relaxed text-fog sm:text-[15px]">
            {paragraphs.length > 0 ? (
              paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>No overview available for this show yet.</p>
            )}
          </div>

          <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-hairline pt-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <Globe size={18} className="mt-0.5 text-fog" />
              <div>
                <dt className="text-xs uppercase text-fog">Language</dt>
                <dd className="text-sm font-medium text-white">
                  {show.language || "Unknown"}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Radio size={18} className="mt-0.5 text-fog" />
              <div>
                <dt className="text-xs uppercase text-fog">Network</dt>
                <dd className="text-sm font-medium text-white">
                  {show.network?.name || show.webChannel?.name || "N/A"}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        {/* Footer */}
        <div className="flex shrink-0 justify-end border-t border-hairline px-5 py-4 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
