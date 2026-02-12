import { useEffect, useRef } from 'react'
import katex from 'katex'

interface EquationAreaProps {
  equation: string
  blankValue: number | null
  isCorrect: boolean | null
}

export function EquationArea({ equation, blankValue, isCorrect }: EquationAreaProps) {
  const mathRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (mathRef.current) {
      katex.render(equation, mathRef.current, {
        throwOnError: false,
        displayMode: false,
      })
    }
  }, [equation])

  const blankBorderColor =
    isCorrect === true
      ? 'border-green-500 bg-green-50'
      : isCorrect === false
        ? 'border-red-500 bg-red-50'
        : blankValue !== null
          ? 'border-gray-300 bg-white'
          : 'border-gray-200 bg-gray-100'

  const shakeClass = isCorrect === false ? 'animate-shake' : ''

  return (
    <div className="flex items-center justify-center gap-3 border-2 border-dashed border-gray-300 rounded-2xl py-4 px-6 mx-auto w-fit">
      <span ref={mathRef} className="text-[24px]" />
      <div
        className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center text-[22px] font-bold transition-colors duration-200 ${blankBorderColor} ${shakeClass}`}
      >
        {blankValue !== null && (
          <span
            key={`${blankValue}-${isCorrect}`}
            className={isCorrect === null ? 'animate-pop-in' : ''}
          >
            {blankValue}
          </span>
        )}
      </div>
    </div>
  )
}
