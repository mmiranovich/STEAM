export interface LessonQuestion {
  id: string
  questionText: string
  visual: {
    type: 'scale'
    weightValue: number
    unknownSymbol: string
    unknownCount: number
    totalWeight: number
  }
  equation: {
    display: string
    blankCount: number
  }
  choices: number[]
  correctAnswer: number
  xpReward: number
  explanation?: string
}

export type LessonPhase =
  | { phase: 'answering'; selectedAnswer: number | null }
  | { phase: 'checking' }
  | { phase: 'correct'; answer: number; xp: number }
  | { phase: 'incorrect'; answer: number; correctAnswer: number }
