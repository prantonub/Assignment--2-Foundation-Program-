import { Database, Search, Smartphone } from "lucide-react";
import Logo from "../components/Logo";

const POINTS = [
  {
    icon: Database,
    title: "Always up to date",
    description:
      "Every title, poster, and synopsis reflects real, current show data, not a static mockup.",
  },
  {
    icon: Search,
    title: "Fast, focused search",
    description:
      "Search updates as you type, with a short delay so results feel instant without lagging behind.",
  },
  {
    icon: Smartphone,
    title: "Built for every screen",
    description:
      "From a 320px phone to a widescreen desktop, the layout adapts without ever scrolling sideways.",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-panel px-4 py-1.5 text-xs font-medium text-fog">
        <Logo size={16} />
        About the project
      </span>

      <h1 className="mt-5 font-display text-4xl tracking-wide text-white sm:text-5xl">
        Built for people who can never decide what to watch
      </h1>

      <p className="mt-5 max-w-2xl text-fog">
        Movie World is a discovery app for browsing and searching TV shows
        and movies, with a full catalog you can search by title and open for
        details in one click.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {POINTS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-hairline bg-panel p-6"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-white">
              <Icon size={20} />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-1.5 text-sm text-fog">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
