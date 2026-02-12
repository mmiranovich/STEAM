interface AnswerChoicesProps {
  choices: number[]
  selectedChoice: number | null
  onSelect: (n: number) => void
  disabled: boolean
}

export function AnswerChoices({ choices, selectedChoice, onSelect, disabled }: AnswerChoicesProps) {
  return (
    <div className="flex gap-3">
      {choices.map((choice) => {
        const isSelected = selectedChoice === choice
        return (
          <button
            key={choice}
            onClick={() => !disabled && onSelect(choice)}
            disabled={disabled}
            className={`flex-1 h-14 rounded-2xl text-[20px] font-bold transition-all duration-150 ${
              isSelected
                ? 'bg-gray-100 text-gray-300 border-2 border-gray-200 scale-95'
                : disabled
                  ? 'bg-white text-gray-800 border-2 border-gray-200 cursor-not-allowed opacity-60'
                  : 'bg-white text-gray-800 border-2 border-gray-200 hover:shadow-md hover:-translate-y-0.5 active:scale-95 cursor-pointer'
            }`}
          >
            {isSelected ? '' : choice}
          </button>
        )
      })}
    </div>
  )
}
