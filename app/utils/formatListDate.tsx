export const formatListDate = (date: string): string => {
  const dateToFormat = new Date(date)
  const newDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(dateToFormat)
  return newDate
}
