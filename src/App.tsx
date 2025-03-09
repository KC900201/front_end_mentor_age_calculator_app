import "./App.css"
import { useState } from "react"
import { Layout, DateInput, CalculateAgeButton, AgeDisplay } from "./components"
import { ERROR_MESSAGES } from "./constants/error-message.constant"
import { AgeType, DateType } from "./types/date.type"

/* To-do:
    [x] migrate hooks and validation logic to this component
    [x] Add in props for each child component interface (new)
    [ ] Add in error message for each validation failure in UI layout
    [ ] Improve the UI layout of date input and submit button
    [ ] Deploy to netlify once 1~3 are completed
    [ ] (Optional) add in mobile design layout

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
      console.log("date: ", date)
      const { year, month, day } = date
      const today = new Date()
      const birthDate = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day)
      )

      let ageYears = today.getFullYear() - birthDate.getFullYear()
      let ageMonths = today.getMonth() - birthDate.getMonth()
      let ageDays = today.getDate() - birthDate.getDate()

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

      setAge({
        years: ageYears,
        months: ageMonths,
        days: ageDays,
      })
    }
  }

  return (
    <main>
      <Layout>
        <DateInput setDate={setDate} />
        <CalculateAgeButton handleCalculateAge={handleCalculateAge} />
        <AgeDisplay age={age} />
      </Layout>
    </main>
  )
}

export default App
