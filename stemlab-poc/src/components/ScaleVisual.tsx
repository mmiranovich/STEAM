interface ScaleVisualProps {
  weightValue: number
  unknownSymbol: string
  unknownCount: number
  totalWeight: number
}

export function ScaleVisual({
  weightValue,
  unknownSymbol,
  unknownCount,
  totalWeight,
}: ScaleVisualProps) {
  return (
    <div className="flex justify-center">
      <svg viewBox="0 0 320 240" className="w-full" aria-label="Digital scale illustration">
        <defs>
          <filter id="shadow" x="-4%" y="-4%" width="108%" height="108%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Scale body */}
        <rect x="60" y="140" width="200" height="80" rx="16" fill="#374151" filter="url(#shadow)" />

        {/* Body highlight */}
        <rect x="60" y="140" width="200" height="6" rx="3" fill="#4B5563" opacity="0.5" />

        {/* Display inset */}
        <rect x="110" y="156" width="100" height="48" rx="8" fill="#E5E7EB" />
        <rect x="112" y="158" width="96" height="44" rx="6" fill="#F3F4F6" />
        <text
          x="160"
          y="188"
          textAnchor="middle"
          fill="#1F2937"
          fontSize="28"
          fontWeight="bold"
          fontFamily="'DM Sans', system-ui, sans-serif"
        >
          {totalWeight}
        </text>

        {/* Platform */}
        <rect x="48" y="127" width="224" height="14" rx="4" fill="#D1D5DB" />
        <rect x="48" y="127" width="224" height="4" rx="2" fill="#E5E7EB" />

        {/* Weight (left side) - trapezoid/bell shape */}
        <path
          d="M100,141 L88,82 Q88,76 94,76 L126,76 Q132,76 132,82 L120,141 Z"
          fill="#9CA3AF"
          stroke="#6B7280"
          strokeWidth="1"
        />
        {/* Weight highlight */}
        <path
          d="M98,141 L90,88 Q90,82 95,82 L105,82 L97,141 Z"
          fill="#B0B8C4"
          opacity="0.4"
        />
        <text
          x="110"
          y="118"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="18"
          fontWeight="bold"
          fontFamily="'DM Sans', system-ui, sans-serif"
        >
          {weightValue}
        </text>

        {/* Triangles (right side) - stacked with labels */}
        {Array.from({ length: unknownCount }).map((_, i) => {
          const baseY = 141 - i * 20
          const cx = 210
          const size = 22
          return (
            <g key={i}>
              <polygon
                points={`${cx},${baseY - size} ${cx - size * 0.72},${baseY} ${cx + size * 0.72},${baseY}`}
                fill="#F59E0B"
                stroke="#D97706"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* Highlight on left edge */}
              <polygon
                points={`${cx},${baseY - size} ${cx - size * 0.72},${baseY} ${cx - size * 0.2},${baseY}`}
                fill="#FBBF24"
                opacity="0.4"
              />
              <text
                x={cx}
                y={baseY - size * 0.25}
                textAnchor="middle"
                fill="#92400E"
                fontSize="12"
                fontWeight="bold"
                fontStyle="italic"
                fontFamily="'DM Sans', system-ui, sans-serif"
              >
                {unknownSymbol}
              </text>
            </g>
          )
        })}

        {/* Scale feet */}
        <rect x="90" y="220" width="30" height="6" rx="3" fill="#4B5563" />
        <rect x="200" y="220" width="30" height="6" rx="3" fill="#4B5563" />
      </svg>
    </div>
  )
}
