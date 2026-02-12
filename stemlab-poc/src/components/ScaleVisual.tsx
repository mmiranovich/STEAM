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
  // ── Layout constants (single source of truth) ──
  const cx = 160                         // horizontal center of scale
  const baseline = 126                   // shared bottom edge — objects sit ON the platform
  const platformH = 12
  const platformW = 224
  const platformX = cx - platformW / 2   // 48
  const bodyY = baseline + platformH     // flush under platform
  const bodyW = 200
  const bodyH = 76
  const bodyX = cx - bodyW / 2           // 60
  const body3D = 4

  // Object positions – symmetric around cx, sharing baseline
  const weightCx = cx - 38              // weight center X
  const triCx = cx + 38                 // triangle center X
  const triSize = 20                    // triangle height
  const triStep = triSize + 4           // 4px gap between stacked triangles
  const triHW = Math.round(triSize * 0.72)

  return (
    <div className="flex justify-center">
      <svg
        viewBox="0 0 320 230"
        className="w-full max-w-[320px]"
        aria-label="Digital scale illustration"
      >
        {/* ── Objects on platform (shared baseline) ── */}

        {/* Weight (left) – inverted trapezoid */}
        <path
          d={`M${weightCx - 10},${baseline} L${weightCx - 22},${baseline - 59} Q${weightCx - 22},${baseline - 65} ${weightCx - 16},${baseline - 65} L${weightCx + 16},${baseline - 65} Q${weightCx + 22},${baseline - 65} ${weightCx + 22},${baseline - 59} L${weightCx + 10},${baseline} Z`}
          fill="#9CA3AF"
          stroke="#6B7280"
          strokeWidth="1"
        />
        {/* Weight highlight */}
        <path
          d={`M${weightCx - 8},${baseline} L${weightCx - 20},${baseline - 53} Q${weightCx - 20},${baseline - 59} ${weightCx - 15},${baseline - 59} L${weightCx - 5},${baseline - 59} L${weightCx - 3},${baseline} Z`}
          fill="#B0B8C4"
          opacity="0.4"
        />
        <text
          x={weightCx}
          y={baseline - 23}
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="18"
          fontWeight="bold"
          fontFamily="'Inter', system-ui, sans-serif"
        >
          {weightValue}
        </text>

        {/* Triangles (right, stacked column) */}
        {Array.from({ length: unknownCount }).map((_, i) => {
          const baseY = baseline - i * triStep
          return (
            <g key={i}>
              <polygon
                points={`${triCx},${baseY - triSize} ${triCx - triHW},${baseY} ${triCx + triHW},${baseY}`}
                fill="#F9B618"
                stroke="#D4940E"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* Highlight on left face */}
              <polygon
                points={`${triCx},${baseY - triSize} ${triCx - triHW},${baseY} ${triCx - Math.round(triSize * 0.2)},${baseY}`}
                fill="#FCD34D"
                opacity="0.4"
              />
              <text
                x={triCx}
                y={baseY - triSize * 0.25}
                textAnchor="middle"
                fill="#92400E"
                fontSize="12"
                fontWeight="bold"
                fontStyle="italic"
                fontFamily="'Inter', system-ui, sans-serif"
              >
                {unknownSymbol}
              </text>
            </g>
          )
        })}

        {/* ── Platform (flush under objects) ── */}
        <rect x={platformX} y={baseline} width={platformW} height={platformH} rx="4" fill="#D1D5DB" />
        <rect x={platformX} y={baseline} width={platformW} height="4" rx="2" fill="#E5E7EB" />

        {/* ── Scale body (flush under platform) ── */}
        <rect x={bodyX} y={bodyY + body3D} width={bodyW} height={bodyH} rx="16" fill="#242a38" />
        <rect x={bodyX} y={bodyY} width={bodyW} height={bodyH} rx="16" fill="#343a4b" />
        <rect x={bodyX} y={bodyY} width={bodyW} height="6" rx="3" fill="#4B5563" opacity="0.5" />

        {/* Display inset */}
        <rect x={cx - 50} y={bodyY + 14} width="100" height="48" rx="8" fill="#E5E7EB" />
        <rect x={cx - 48} y={bodyY + 16} width="96" height="44" rx="6" fill="#F3F4F6" />
        <text
          x={cx}
          y={bodyY + 46}
          textAnchor="middle"
          fill="#1F2937"
          fontSize="28"
          fontWeight="bold"
          fontFamily="'Inter', system-ui, sans-serif"
        >
          {totalWeight}
        </text>

        {/* ── Scale feet ── */}
        <rect x={cx - 70} y={bodyY + bodyH + body3D} width="30" height="6" rx="3" fill="#4B5563" />
        <rect x={cx + 40} y={bodyY + bodyH + body3D} width="30" height="6" rx="3" fill="#4B5563" />
      </svg>
    </div>
  )
}
