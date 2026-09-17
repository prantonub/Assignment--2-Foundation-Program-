import { Clapperboard, Star, Calendar } from "lucide-react";
import { formatRating, getYear } from "../utils/format";

export default function MovieCard({ show, onSeeDetails }) {
  const posterUrl = show.image?.medium || show.image?.original;
  const year = getYear(show.premiered);
  const rating = formatRating(show.rating);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-panel shadow-lg shadow-black/20 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-panel-raised">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={`Poster for ${show.name}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-fog">
            <Clapperboard size={36} strokeWidth={1.5} />
            <span className="text-xs font-medium">No poster available</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="line-clamp-2 font-semibold leading-snug text-white">
          {show.name}
        </h3>

        <div className="flex items-center gap-3 text-sm text-fog">
          <span className="inline-flex items-center gap-1">
            <Star size={14} className="text-bulb" fill="currentColor" />
            {rating}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            {year}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSeeDetails(show)}
          className="mt-auto inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary hover:border-primary focus-visible:bg-primary"
          aria-haspopup="dialog"
        >
          See Details
        </button>
      </div>
    </article>
  );
}
