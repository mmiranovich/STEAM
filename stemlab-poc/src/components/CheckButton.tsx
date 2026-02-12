interface CheckButtonProps {
  disabled: boolean
  onClick: () => void
}

export function CheckButton({ disabled, onClick }: CheckButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full h-[52px] rounded-full text-[17px] font-semibold transition-colors duration-200 ${
        disabled
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-[#00A651] text-white hover:bg-[#009347] active:scale-[0.98] cursor-pointer'
      }`}
    >
      Check
    </button>
  )
}
