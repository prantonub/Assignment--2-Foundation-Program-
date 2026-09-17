import { SearchX } from "lucide-react";

export default function EmptyState({ query }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-hairline px-6 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-panel-raised text-fog">
        <SearchX size={28} />
      </span>
      <div>
        <p className="text-lg font-semibold text-white">No shows found</p>
        <p className="mt-1 text-sm text-fog">
          {query
            ? `We couldn't find anything for "${query}". Try a different title.`
            : "Try searching for a different title."}
        </p>
      </div>
    </div>
  );
}
