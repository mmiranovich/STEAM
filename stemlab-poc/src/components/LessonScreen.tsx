import type { ReactNode } from 'react'

interface LessonScreenProps {
  children: ReactNode
}

export function LessonScreen({ children }: LessonScreenProps) {
  return (
    <div className="min-h-dvh flex justify-center bg-gray-100">
      <div className="w-full max-w-[430px] bg-white min-h-dvh flex flex-col px-6 pb-6 relative overflow-hidden safe-area-top">
        {children}
      </div>
    </div>
  )
}
