"use client"
import { useState } from "react"

// TO-DO: implement birthday calculation logic
function useCalculateBirthday() {
  const [isBirthday, setBirthday] = useState('')

  // TO-DO: set birthday as proper date value using date-fns

  return {isBirthday, setBirthday}
}

export default useCalculateBirthday