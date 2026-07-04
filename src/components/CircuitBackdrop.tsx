/**
 * Decorative circuit-board traces with a light pulse travelling along the
 * wires. Purely presentational — hidden from assistive tech, and the pulse
 * animation is disabled by the global prefers-reduced-motion rule.
 */
export default function CircuitBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 400"
      fill="none"
      preserveAspectRatio="xMaxYMid slice"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* static traces */}
      <g stroke="currentColor" strokeWidth="2" opacity="0.18">
        <path d="M600 40 H420 a12 12 0 0 0-12 12 V150 a12 12 0 0 1-12 12 H240" />
        <path d="M600 120 H480 a12 12 0 0 0-12 12 V300 a12 12 0 0 1-12 12 H300" />
        <path d="M600 220 H520 a12 12 0 0 1-12-12 V90 a12 12 0 0 0-12-12 H360" />
        <path d="M600 340 H440 a12 12 0 0 1-12-12 V240 a12 12 0 0 0-12-12 H330" />
        <path d="M360 78 V30" />
        <path d="M300 312 V380" />
      </g>
      {/* nodes */}
      <g fill="currentColor" opacity="0.35">
        <circle cx="240" cy="162" r="5" />
        <circle cx="300" cy="312" r="5" />
        <circle cx="360" cy="78" r="5" />
        <circle cx="330" cy="228" r="5" />
        <circle cx="360" cy="30" r="4" />
        <circle cx="300" cy="380" r="4" />
      </g>
      {/* travelling pulses */}
      <path
        d="M600 40 H420 a12 12 0 0 0-12 12 V150 a12 12 0 0 1-12 12 H240"
        stroke="var(--color-lime-400)"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="circuit-pulse"
      />
      <path
        d="M600 340 H440 a12 12 0 0 1-12-12 V240 a12 12 0 0 0-12-12 H330"
        stroke="var(--color-lime-400)"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="circuit-pulse circuit-pulse-delayed"
      />
    </svg>
  );
}
