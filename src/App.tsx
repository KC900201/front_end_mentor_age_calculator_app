import "./App.css"
import { useEffect, useState } from "react"
import { Layout, DateInput, CalculateAgeButton, AgeDisplay } from "./components"
import { ERROR_MESSAGES } from "./constants/error-message.constant"
import { AgeType, DateType } from "./types/date.type"

/* To-do:
    [x] 1. migrate hooks and validation logic to this component
    [x] 2. Add in props for each child component interface (new)
    [ ] 3. Add in error message for each validation failure in UI layout **
    [ ] 4. Improve the UI layout of date input and submit button **
    [x] 5. Deploy to netlify once 1~4 are completed
    [ ] 6. (Optional) add in mobile design layout
    [x] 7. (Optional) Amend website based on feedback

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

  // Temporary fix to utilize error (3/17/2025)
  useEffect(() => {
    console.log("Error: ", error)
  }, [error])

  return (
    <main>
      {/* Hide title from screen readers to match design */}
      <h1 className="sr-only">Age Calculator</h1>
      <Layout>
        <DateInput setDate={setDate} />
        <CalculateAgeButton handleCalculateAge={handleCalculateAge} />
        <AgeDisplay age={age} />
      </Layout>
    </main>
  )
}

export default App
