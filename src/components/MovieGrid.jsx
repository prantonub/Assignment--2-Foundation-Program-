import MovieCard from "./MovieCard";

export default function MovieGrid({ shows, onSeeDetails }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {shows.map((show) => (
        <MovieCard key={show.id} show={show} onSeeDetails={onSeeDetails} />
      ))}
    </div>
  );
}
