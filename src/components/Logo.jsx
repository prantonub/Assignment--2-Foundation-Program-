/**
 * Custom brand mark for Movie World: a globe (the "World") with a play
 * triangle at its center (the "Movie"), rendered as a single gradient-filled
 * glyph rather than a generic stock icon.
 */
export default function Logo({ size = 34, className = "" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mw-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" />
          <stop offset="100%" stopColor="var(--color-secondary)" />
        </linearGradient>
      </defs>

      <circle cx="20" cy="20" r="18.5" fill="url(#mw-logo-grad)" />

      {/* latitude lines, subtly suggesting a globe */}
      <path
        d="M2 20h36M20 1.8c6 5 6 31.4 0 36.4M20 1.8c-6 5-6 31.4 0 36.4"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.1"
      />
      <path
        d="M4.3 12.2c9.6 4 21.8 4 31.4 0M4.3 27.8c9.6-4 21.8-4 31.4 0"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.1"
      />

      {/* play mark */}
      <path d="M16.5 13.2 27 20l-10.5 6.8Z" fill="#ffffff" />
    </svg>
  );
}
