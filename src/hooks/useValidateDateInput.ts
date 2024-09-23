import { useState } from "react"


type DateInputType = {
  day: string
  month: string
  year: string
}

// TO-DO: implement user validation logic
function useValidateInput() {
  const defaultDate: DateInputType = {
    day: '',
    month: '',
    year: ''
  }

  const [date, setDate] = useState<DateInputType>(defaultDate)
  const [isDateValid, setDateValid] = useState<boolean>(false)

  // validate user input date


  return {isDateValid, setDateValid, date, setDate}
}

export default useValidateInput