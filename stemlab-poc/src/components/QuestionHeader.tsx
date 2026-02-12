interface QuestionHeaderProps {
  question: string
  highlightNumber?: number
}

export function QuestionHeader({ question, highlightNumber }: QuestionHeaderProps) {
  if (highlightNumber === undefined) {
    return <h1 className="text-[22px] font-bold text-gray-800 pt-6 leading-tight">{question}</h1>
  }

  const numStr = String(highlightNumber)
  const idx = question.indexOf(numStr)
  if (idx === -1) {
    return <h1 className="text-[22px] font-bold text-gray-800 pt-6 leading-tight">{question}</h1>
  }

  const before = question.slice(0, idx)
  const after = question.slice(idx + numStr.length)

  return (
    <h1 className="text-[22px] font-bold text-gray-800 pt-6 leading-tight">
      {before}
      <span className="font-extrabold">{numStr}</span>
      {after}
    </h1>
  )
}
