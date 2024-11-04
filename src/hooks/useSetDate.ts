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
  const [ageDay, setAgeDay] = useState<string>("")
  const [ageMonth, setAgeMonth] = useState<string>("")
  const [ageYear, setAgeYear] = useState<string>("")

  return {date, setDate, ageDay, setAgeDay, ageMonth, setAgeMonth, ageYear, setAgeYear}
}

export default useSetDate