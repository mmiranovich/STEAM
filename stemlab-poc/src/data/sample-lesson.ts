import type { LessonQuestion } from '../types/lesson'

export const sampleQuestion: LessonQuestion = {
  id: 'visual-algebra-01',
  questionText: "What's the weight of 3 triangles?",
  visual: {
    type: 'scale',
    weightValue: 10,
    unknownSymbol: 't',
    unknownCount: 3,
    totalWeight: 16,
  },
  equation: {
    display: '3t = ',
    blankCount: 1,
  },
  choices: [3, 4, 6, 8],
  correctAnswer: 6,
  xpReward: 15,
  explanation: 'The scale shows 10 + 3t = 16, so 3t = 6 and t = 2.',
}

export const sampleQuestion2: LessonQuestion = {
  id: 'visual-algebra-02',
  questionText: "What's the weight of 2 circles?",
  visual: {
    type: 'scale',
    weightValue: 4,
    unknownSymbol: 'c',
    unknownCount: 2,
    totalWeight: 12,
  },
  equation: {
    display: '2c = ',
    blankCount: 1,
  },
  choices: [2, 4, 6, 8],
  correctAnswer: 8,
  xpReward: 15,
  explanation: 'The scale shows 4 + 2c = 12, so 2c = 8 and c = 4.',
}

export const lessonQuestions: LessonQuestion[] = [sampleQuestion, sampleQuestion2]
