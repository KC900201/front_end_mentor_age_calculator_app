import { getYear } from "date-fns"
import { useState } from "react"
import { ERROR_MESSAGES } from "../constants/error-message.contant"

function useValidateInput() {
  const [isDateValid, setDateValid] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")

  // validate date by field (day, month, year)
  const validateDateField = (value: string, label: string) => {

    if(!value || value.trim().length < 0) {
      setDateValid(false)
      setErrorMessage(ERROR_MESSAGES.INVALID_INPUT)

      return
    }

    const dateValue = parseInt(value.trim(), 10)
    const currentYear = getYear(new Date())

    if(isNaN(dateValue)) {
      setDateValid(false)
      setErrorMessage(ERROR_MESSAGES.INVALID_INPUT)

      return
    }

    switch(label) {
      case "DAY":
        // validate day value is between 1 and 31
        setDateValid(dateValue >= 1 && dateValue <= 31)
        break
      case "MONTH":
        // validate month value is between 1 and 12
        setDateValid(dateValue >= 1 && dateValue <= 12)
        break
      case "YEAR":
        // validate year value is not later than current year
        setDateValid(dateValue <= currentYear)
        break
      default:
        break
    }

    setDateValid(true)
  }


  return {isDateValid, errorMessage, validateDateField}
}

export default useValidateInput