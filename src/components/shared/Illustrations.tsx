/**
 * Hand-drawn style SVG illustrations for section decorations.
 * Designed to complement the dark aesthetic with the primary teal accent.
 */

interface IllustrationProps {
  className?: string;
}

/** Flowing circuit/pipeline lines — for CRM / pipeline sections */
export function PipelineIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 60 C10 60 40 60 60 40 S100 20 120 40 S160 80 180 60 S200 40 200 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />
      <circle cx="60" cy="40" r="5" fill="currentColor" opacity="0.6" />
      <circle cx="120" cy="40" r="5" fill="currentColor" opacity="0.6" />
      <circle cx="160" cy="80" r="5" fill="currentColor" opacity="0.6" />
      <rect x="8" y="52" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <rect x="178" y="52" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M70 40 L90 40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <path d="M130 40 L150 60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  );
}

/** Sparkle / AI nodes — for AI integration sections */
export function AISparkleIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Central node */}
      <circle cx="80" cy="80" r="12" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      <circle cx="80" cy="80" r="6" fill="currentColor" opacity="0.5" />
      {/* Orbiting nodes */}
      <circle cx="40" cy="50" r="7" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="120" cy="50" r="7" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="30" cy="100" r="5" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="130" cy="100" r="5" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="80" cy="130" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Connecting lines */}
      <line x1="80" y1="68" x2="43" y2="54" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="80" y1="68" x2="117" y2="54" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="74" y1="87" x2="33" y2="98" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="86" y1="87" x2="127" y2="98" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="80" y1="92" x2="80" y2="124" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Sparkle star */}
      <path d="M80 25 L83 35 L93 35 L85 41 L88 51 L80 45 L72 51 L75 41 L67 35 L77 35 Z" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

/** Database stack — for Notion / knowledge management sections */
export function DatabaseIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 160 130"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Top ellipse */}
      <ellipse cx="80" cy="30" rx="55" ry="16" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      {/* Cylinder body 1 */}
      <line x1="25" y1="30" x2="25" y2="60" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="135" y1="30" x2="135" y2="60" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <ellipse cx="80" cy="60" rx="55" ry="16" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      {/* Cylinder body 2 */}
      <line x1="25" y1="60" x2="25" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="135" y1="60" x2="135" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="80" cy="90" rx="55" ry="16" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Inner data lines */}
      <line x1="50" y1="30" x2="50" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="70" y1="32" x2="70" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="90" y1="32" x2="90" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

/** Checkboard / delivery grid — for ClickUp / PM sections */
export function DeliveryGridIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Grid */}
      {[20, 60, 100, 140].map((x) =>
        [20, 60, 100, 140].map((y) => (
          <rect key={`${x}-${y}`} x={x - 15} y={y - 15} width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        ))
      )}
      {/* Highlighted cells */}
      <rect x="5" y="5" width="28" height="28" rx="4" fill="currentColor" opacity="0.3" />
      <rect x="45" y="5" width="28" height="28" rx="4" fill="currentColor" opacity="0.3" />
      <rect x="45" y="45" width="28" height="28" rx="4" fill="currentColor" opacity="0.2" />
      <rect x="85" y="45" width="28" height="28" rx="4" fill="currentColor" opacity="0.2" />
      <rect x="85" y="85" width="28" height="28" rx="4" fill="currentColor" opacity="0.15" />
      {/* Check marks on highlighted cells */}
      <path d="M13 20 L18 25 L28 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <path d="M53 20 L58 25 L68 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      {/* Arrow indicating progress */}
      <path d="M130 130 L145 115 M145 115 L145 130 M145 115 L130 115" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/** Wavy underline decoration for headings */
export function WavyUnderline({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 12"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 6 C25 0, 50 12, 75 6 S125 0, 150 6 S175 12, 200 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small decorative dot cluster */
export function DotCluster({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 60 60" fill="currentColor" className={className} aria-hidden="true">
      {[
        [10, 10], [25, 10], [40, 10],
        [10, 25], [25, 25], [40, 25],
        [10, 40], [25, 40], [40, 40],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" opacity="0.2" />
      ))}
      <circle cx="25" cy="25" r="4" opacity="0.5" />
    </svg>
  );
}

/** Gear / integration icon — for workflow/integration sections */
export function IntegrationIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 180 180" fill="none" className={className} aria-hidden="true">
      {/* Left gear */}
      <circle cx="60" cy="90" r="30" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <circle cx="60" cy="90" r="18" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 60 + 22 * Math.cos(rad);
        const y1 = 90 + 22 * Math.sin(rad);
        const x2 = 60 + 32 * Math.cos(rad);
        const y2 = 90 + 32 * Math.sin(rad);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.3" />;
      })}
      {/* Right gear */}
      <circle cx="120" cy="90" r="24" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <circle cx="120" cy="90" r="14" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 120 + 17 * Math.cos(rad);
        const y1 = 90 + 17 * Math.sin(rad);
        const x2 = 120 + 26 * Math.cos(rad);
        const y2 = 90 + 26 * Math.sin(rad);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.25" />;
      })}
      {/* Connection dot */}
      <circle cx="90" cy="90" r="4" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
