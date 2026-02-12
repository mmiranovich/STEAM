interface XPBadgeProps {
  amount: number
}

export function XPBadge({ amount }: XPBadgeProps) {
  return (
    <span className="animate-xp-pop inline-block text-[15px] font-bold text-correct-text">
      +{amount} XP
    </span>
  )
}
