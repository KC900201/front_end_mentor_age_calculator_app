"use client"
import { useState } from "react"

export type DateInputType = {
  day: string
  month: string
  year: string
}

function useSetDate() {
  const defaultDate: DateInputType = {
    day: '',
    month: '',
    year: ''
  }

  const [date, setDate] = useState<DateInputType>(defaultDate)
  const [day, setDay] = useState<string>("")
  const [month, setMonth] = useState<string>("")
  const [year, setYear] = useState<string>("")

  return {date, setDate, day, setDay, month, setMonth, year, setYear}
}

export default useSetDate