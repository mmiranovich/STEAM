interface AnswerChoicesProps {
  choices: number[]
  selectedChoice: number | null
  onSelect: (n: number) => void
  disabled: boolean
}

export function AnswerChoices({ choices, selectedChoice, onSelect, disabled }: AnswerChoicesProps) {
  return (
    <div className="mx-auto flex w-full max-w-[380px] justify-center gap-4">
      {choices.map((choice) => {
        const isSelected = selectedChoice === choice
        return (
          <button
            key={choice}
            onClick={() => !disabled && onSelect(choice)}
            disabled={disabled}
            className={`h-[64px] w-[64px] rounded-[12px] border-2 text-[22px] font-semibold transition-all duration-150 ${
              disabled
                ? 'cursor-not-allowed bg-white text-[#111827]/50 border-[#E5E7EB] opacity-60'
                : isSelected
                  ? 'bg-[#F9FAFB] text-[#111827] border-[#C9CCD3] shadow-[0_1px_0_rgba(0,0,0,0.04)] translate-y-[1px]'
                  : 'bg-white text-[#111827] border-[#E5E7EB] shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:shadow-[0_2px_0_rgba(0,0,0,0.06)] hover:-translate-y-[1px] active:translate-y-[1px] active:shadow-[0_1px_0_rgba(0,0,0,0.04)] cursor-pointer'
            }`}
          >
            {choice}
          </button>
        )
      })}
    </div>
  )
}
