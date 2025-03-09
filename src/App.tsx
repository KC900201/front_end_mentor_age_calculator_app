import "./App.css"
import { useState } from "react"
import { Layout, DateInput, CalculateAgeButton, AgeDisplay } from "./components"
import { ERROR_MESSAGES } from "./constants/error-message.constant"
import { AgeType, DateType } from "./types/date.type"

/* To-do:
    1. migrate hooks and validation logic to this component
    2. Add in props for each child component interface (new)
    3. Add in error message for each validation failure in UI layout
    4. Deploy to netlify once 1~3 are completed
    5. (Optional) add in mobile design layout

   References:
    1. https://github.com/BrandTrump/Age-Calculator
    2. https://github.com/OthmaneNissoukin/fem-react-age-calculator
*/

function App() {
  const [date, setDate] = useState<DateType>({ year: "", month: "", day: "" })
  const [error, setError] = useState<string>("")
  const [age, setAge] = useState<AgeType>({ years: 0, months: 0, days: 0 })

  const validateDate = (date: DateType): boolean => {
    if (!date || !date.year || !date.month || !date.day) {
      setError(ERROR_MESSAGES.INVALID_INPUT)
      return false
    }

    setError("")
    return true
  }

  const handleCalculateAge = () => {
    if (validateDate(date)) {
      const { year, month, day } = date
      const today = new Date()

      let ageYears = today.getFullYear() - parseInt(year)
      let ageMonths = today.getMonth() - parseInt(month)
      let ageDays = today.getDate() - parseInt(day)

      // Adjust the age if current month is earlier than the birth month
      if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--
        ageMonths += 12
      }

      // Adjust the age if current day is earlier than the birth day
      if (ageDays < 0) {
        const lastMonth = new Date(
          today.getFullYear() - today.getMonth() - 1,
          0
        )
        ageDays += lastMonth.getDate()
        ageMonths--
      }

      const birthDate = new Date(ageYears, ageMonths, ageDays)
      const ageInMilliseconds = today.getTime() - birthDate.getTime()
      const ageDate = new Date(ageInMilliseconds)

      setAge({
        years: Math.abs(ageDate.getUTCFullYear() - 1970),
        months: ageDate.getUTCMonth(),
        days: ageDate.getUTCDate() - 1,
      })
    }
  }

  return (
    <Layout>
      <DateInput date={date} setDate={setDate} error={error} />
      <CalculateAgeButton handleCalculateAge={handleCalculateAge} />
      <AgeDisplay age={age} />
    </Layout>
  )
}

export default App
