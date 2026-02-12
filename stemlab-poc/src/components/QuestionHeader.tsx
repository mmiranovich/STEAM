interface QuestionHeaderProps {
  question: string
  highlightNumber?: number
}

export function QuestionHeader({ question, highlightNumber }: QuestionHeaderProps) {
  if (highlightNumber === undefined) {
    return <h1 className="text-[24px] font-extrabold text-[#1a202c] text-center mb-10 leading-tight">{question}</h1>
  }

  const numStr = String(highlightNumber)
  const idx = question.indexOf(numStr)
  if (idx === -1) {
    return <h1 className="text-[24px] font-extrabold text-[#1a202c] text-center mb-10 leading-tight">{question}</h1>
  }

  const before = question.slice(0, idx)
  const after = question.slice(idx + numStr.length)

  return (
    <h1 className="text-[24px] font-extrabold text-[#1a202c] text-center mb-10 leading-tight">
      {before}
      <span className="font-black">{numStr}</span>
      {after}
    </h1>
  )
}
