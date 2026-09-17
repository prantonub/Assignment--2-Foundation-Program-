import { RefreshCcw, TriangleAlert } from "lucide-react";

export default function ErrorState({
  message = "Something went wrong while loading shows.",
  onRetry,
}) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-4 rounded-2xl border border-hairline bg-panel px-6 py-16 text-center"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-red-400">
        <TriangleAlert size={28} />
      </span>
      <div>
        <p className="text-lg font-semibold text-white">{message}</p>
        <p className="mt-1 text-sm text-fog">
          Check your connection and try again.
        </p>
      </div>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
        >
          <RefreshCcw size={16} />
          Try Again
        </button>
      )}
    </div>
  );
}
