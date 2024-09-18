import { useState } from "react"


// TO-DO: implement birthday calculation logic
function useCalculateBirthday() {
  const [isBirthday, setBirthday] = useState('')

  return {isBirthday, setBirthday}
}

export default useCalculateBirthday