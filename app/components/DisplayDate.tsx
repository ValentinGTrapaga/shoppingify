import { CalendarSVG } from './icons'

export const DisplayDate = ({ date }: { date: string }) => (
  <span className='text-xs text-slate-500 flex gap-2 items-center'><CalendarSVG cls='w-4 h-4' stroke='#666666' /> {date}</span>
)
