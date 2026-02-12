import { useState, useCallback, useEffect } from 'react'
import type { LessonQuestion, LessonPhase } from '../types/lesson'

export function useLessonState(question: LessonQuestion) {
  const [state, setState] = useState<LessonPhase>({
    phase: 'answering',
    selectedAnswer: null,
  })

  useEffect(() => {
    setState({ phase: 'answering', selectedAnswer: null })
  }, [question.id])

  const selectAnswer = useCallback((n: number) => {
    setState((prev) => {
      if (prev.phase !== 'answering') return prev
      const next = prev.selectedAnswer === n ? null : n
      return { phase: 'answering', selectedAnswer: next }
    })
  }, [])

  const check = useCallback(() => {
    setState((prev) => {
      if (prev.phase !== 'answering' || prev.selectedAnswer === null) return prev
      const answer = prev.selectedAnswer
      if (answer === question.correctAnswer) {
        return { phase: 'correct', answer, xp: question.xpReward }
      }
      return { phase: 'incorrect', answer, correctAnswer: question.correctAnswer }
    })
  }, [question.correctAnswer, question.xpReward])

  const reset = useCallback(() => {
    setState({ phase: 'answering', selectedAnswer: null })
  }, [])

  return { state, selectAnswer, check, reset }
}
