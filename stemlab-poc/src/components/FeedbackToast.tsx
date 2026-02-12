import { XPBadge } from './XPBadge'

interface FeedbackToastProps {
  isVisible: boolean
  isCorrect: boolean
  xpAmount: number
  onContinue: () => void
  onWhy: () => void
}

export function FeedbackToast({
  isVisible,
  isCorrect,
  xpAmount,
  onContinue,
  onWhy,
}: FeedbackToastProps) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 animate-slide-up">
      <div
        className={`rounded-t-[20px] px-6 pt-5 pb-8 safe-area-bottom ${
          isCorrect ? 'bg-correct-bg border-t border-[#d1fae5]' : 'bg-incorrect-bg border-t border-red-200'
        }`}
      >
        <div className="max-w-[430px] mx-auto">
          {/* Top row */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="text-[28px]">{isCorrect ? '🎉' : '😔'}</span>
              <div className="flex flex-col">
                <span
                  className={`text-[20px] font-bold ${
                    isCorrect ? 'text-correct-text' : 'text-incorrect-text'
                  }`}
                >
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </span>
                {isCorrect && <XPBadge amount={xpAmount} />}
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-500 p-1" aria-label="Report">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 15V3l12 4-12 4" />
                <path d="M4 15v3" />
              </svg>
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onWhy}
              className={`flex-shrink-0 px-6 h-[52px] rounded-full font-bold text-[18px] transition-colors cursor-pointer ${
                isCorrect
                  ? 'bg-white text-correct-text hover:bg-green-100'
                  : 'bg-white text-incorrect-text hover:bg-red-100'
              }`}
            >
              {isCorrect ? 'Why?' : 'Show answer'}
            </button>
            <button
              onClick={onContinue}
              className={`flex-1 h-[52px] rounded-[26px] font-bold text-[18px] text-white transition-colors cursor-pointer ${
                isCorrect
                  ? 'bg-correct-button hover:bg-green-700'
                  : 'bg-red-500 hover:bg-red-600'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
