import { useState, useCallback } from 'react'
import { LessonScreen } from './components/LessonScreen'
import { QuestionHeader } from './components/QuestionHeader'
import { ScaleVisual } from './components/ScaleVisual'
import { EquationArea } from './components/EquationArea'
import { AnswerChoices } from './components/AnswerChoices'
import { CheckButton } from './components/CheckButton'
import { FeedbackToast } from './components/FeedbackToast'
import { useLessonState } from './hooks/useLessonState'
import { lessonQuestions } from './data/sample-lesson'

function App() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const question = lessonQuestions[questionIndex]
  const { state, selectAnswer, check, reset } = useLessonState(question)
  const [showExplanation, setShowExplanation] = useState(false)

  const selectedAnswer =
    state.phase === 'answering' ? state.selectedAnswer : null
  const filledValue =
    state.phase === 'answering'
      ? state.selectedAnswer
      : state.phase === 'correct'
        ? state.answer
        : state.phase === 'incorrect'
          ? state.answer
          : null

  const isCorrect =
    state.phase === 'correct'
      ? true
      : state.phase === 'incorrect'
        ? false
        : null

  const isInteractive = state.phase === 'answering'
  const isToastVisible = state.phase === 'correct' || state.phase === 'incorrect'

  const handleContinue = useCallback(() => {
    setShowExplanation(false)
    const nextIndex = (questionIndex + 1) % lessonQuestions.length
    setQuestionIndex(nextIndex)
    reset()
  }, [questionIndex, reset])

  const handleWhy = useCallback(() => {
    setShowExplanation((prev) => !prev)
  }, [])

  const progressPercent = ((questionIndex) / lessonQuestions.length) * 100

  return (
    <LessonScreen>
      {/* Progress bar */}
      <div className="pt-4 pb-2">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-correct-button rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1 text-right">
          {questionIndex + 1}/{lessonQuestions.length}
        </p>
      </div>

      <QuestionHeader
        question={question.questionText}
        highlightNumber={question.visual.unknownCount}
      />

      <div className="mt-6">
        <ScaleVisual
          weightValue={question.visual.weightValue}
          unknownSymbol={question.visual.unknownSymbol}
          unknownCount={question.visual.unknownCount}
          totalWeight={question.visual.totalWeight}
        />
      </div>

      <div className="mt-6">
        <EquationArea
          equation={question.equation.display}
          blankValue={filledValue}
          isCorrect={isCorrect}
        />
      </div>

      {/* Explanation area */}
      {showExplanation && question.explanation && (
        <div className="mt-3 p-4 bg-gray-50 rounded-xl text-sm text-gray-600 leading-relaxed">
          {question.explanation}
        </div>
      )}

      <div className="mt-4">
        <AnswerChoices
          choices={question.choices}
          selectedChoice={state.phase === 'answering' ? selectedAnswer : filledValue}
          onSelect={selectAnswer}
          disabled={!isInteractive}
        />
      </div>

      <div className="mt-auto pt-5">
        {isInteractive && (
          <CheckButton
            disabled={selectedAnswer === null}
            onClick={check}
          />
        )}
      </div>

      <FeedbackToast
        isVisible={isToastVisible}
        isCorrect={isCorrect === true}
        xpAmount={state.phase === 'correct' ? state.xp : 0}
        onContinue={handleContinue}
        onWhy={handleWhy}
      />
    </LessonScreen>
  )
}

export default App
