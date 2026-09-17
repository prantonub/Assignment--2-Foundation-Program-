function SkeletonCard() {
  return (
    <div
      className="animate-pulse overflow-hidden rounded-2xl border border-hairline bg-panel"
      aria-hidden="true"
    >
      <div className="aspect-[2/3] w-full bg-panel-raised" />
      <div className="space-y-2 p-4">
        <div className="h-4 w-4/5 rounded bg-panel-raised" />
        <div className="h-3 w-2/5 rounded bg-panel-raised" />
        <div className="mt-3 h-8 w-full rounded-full bg-panel-raised" />
      </div>
    </div>
  );
}

export default function LoadingSkeleton({ count = 8 }) {
  return (
    <div
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      role="status"
      aria-label="Loading shows"
    >
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
      <span className="sr-only">Loading shows…</span>
    </div>
  );
}
