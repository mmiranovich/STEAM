interface AnswerChoicesProps {
  choices: number[]
  selectedChoice: number | null
  onSelect: (n: number) => void
  disabled: boolean
}

export function AnswerChoices({ choices, selectedChoice, onSelect, disabled }: AnswerChoicesProps) {
  return (
    <div className="flex gap-4 justify-center max-w-[380px] mx-auto w-full">
      {choices.map((choice) => {
        const isSelected = selectedChoice === choice
        return (
          <button
            key={choice}
            onClick={() => !disabled && onSelect(choice)}
            disabled={disabled}
            className={`flex-1 max-w-[80px] h-[68px] rounded-[14px] text-[20px] font-bold transition-all duration-150 ${
              isSelected
                ? 'bg-gray-100 text-gray-300 border-2 border-gray-200 shadow-none scale-95'
                : disabled
                  ? 'bg-white text-[#4b5563] border-2 border-[#eef0f2] shadow-[0_2px_0_#e5e7eb] cursor-not-allowed opacity-60'
                  : 'bg-white text-[#4b5563] border-2 border-[#eef0f2] shadow-[0_2px_0_#e5e7eb] hover:shadow-md hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-none cursor-pointer'
            }`}
          >
            {isSelected ? '' : choice}
          </button>
        )
      })}
    </div>
  )
}
