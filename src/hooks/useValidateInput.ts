import { useState } from "react"


// TO-DO: implement user validation logic
function useValidateInput() {
  const [isValidate, setValidate] = useState<boolean>(false)

  return {isValidate, setValidate}
}

export default useValidateInput