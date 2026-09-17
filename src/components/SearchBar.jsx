import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      <label htmlFor="show-search" className="sr-only">
        Search for a movie or show
      </label>
      <Search
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-fog"
        aria-hidden="true"
      />
      <input
        id="show-search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for a movie or show..."
        aria-label="Search for a movie or show"
        className="w-full rounded-full border border-hairline bg-panel py-3.5 pl-11 pr-11 text-white placeholder:text-fog/70 outline-none transition-colors focus:border-primary"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-fog transition-colors hover:bg-panel-raised hover:text-white"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
