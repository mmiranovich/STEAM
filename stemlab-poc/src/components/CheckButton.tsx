interface CheckButtonProps {
  disabled: boolean
  onClick: () => void
}

export function CheckButton({ disabled, onClick }: CheckButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full h-[56px] rounded-full text-[18px] font-semibold transition-colors duration-200 ${
        disabled
          ? 'bg-[#EEF0F3] text-[#9AA0A6] cursor-not-allowed'
          : 'bg-[#00A651] text-white hover:bg-[#009347] active:scale-[0.99] cursor-pointer'
      }`}
    >
      Check
    </button>
  )
}
