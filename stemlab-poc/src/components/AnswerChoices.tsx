interface AnswerChoicesProps {
  choices: number[]
  selectedChoice: number | null
  onSelect: (n: number) => void
  disabled: boolean
}

export function AnswerChoices({ choices, selectedChoice, onSelect, disabled }: AnswerChoicesProps) {
  return (
    <div className="flex gap-2.5 justify-center">
      {choices.map((choice) => {
        const isSelected = selectedChoice === choice
        return (
          <button
            key={choice}
            onClick={() => !disabled && onSelect(choice)}
            disabled={disabled}
            className={`w-16 h-14 rounded-xl text-[18px] font-bold transition-all duration-150 ${
              isSelected
                ? 'bg-gray-100 text-gray-300 border-2 border-gray-200 shadow-none scale-95'
                : disabled
                  ? 'bg-white text-gray-800 border-2 border-gray-200 shadow-[0_2px_0_#e5e7eb] cursor-not-allowed opacity-60'
                  : 'bg-white text-gray-800 border-2 border-gray-200 shadow-[0_2px_0_#e5e7eb] hover:shadow-md hover:-translate-y-0.5 active:scale-95 active:shadow-none cursor-pointer'
            }`}
          >
            {isSelected ? '' : choice}
          </button>
        )
      })}
    </div>
  )
}
