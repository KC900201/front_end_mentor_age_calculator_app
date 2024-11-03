import React from "react"
import { useSetDate } from "../hooks"

type Props = {
  children?: React.ReactNode
}

interface InputInterface {
  label: string
  placeHolder: string
  onHandleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputColumn = ({ children }: Props) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-12">{children}</div>
    </div>
  )
}

const DefaultInput = ({
  label,
  placeHolder,
  onHandleInput,
}: InputInterface) => {
  return (
    <>
      <label className="mb-[10px] block text-base font-bold text-gray-500 text-left">
        {label}
      </label>
      <input
        type="number"
        pattern="[0-9\s]*"
        inputMode="numeric"
        onChange={onHandleInput}
        placeholder={placeHolder}
        style={{
          fontSize: "32px",
        }}
        className="w-full
        font-bold
        bg-transparent
        rounded-md border
        border-stroke
        py-[10px] px-5
        text-dark-6
        leading-9
        outline-none
        transition
        focus:border-primary
        active:border-primary
        disabled:cursor-default
        disabled:bg-gray-2
        disabled:border-gray-2"
      />
    </>
  )
}

function DateInput() {
  const { setDate } = useSetDate()

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    // Allow only numeric values in user input
    // https://www.geeksforgeeks.org/how-to-get-only-numeric-values-in-textinput-field-in-react-native/
    const dateString = event.target.value.replace(/[^0-9]/g, "")

    setDate((prevState) => ({
      ...prevState,
      [field]: dateString,
    }))
  }

  return (
    <div className="container">
      <form>
        <div className="mx-1 mt-10 flex flex-wrap">
          <InputColumn>
            <DefaultInput
              label="DAY"
              placeHolder="DD"
              onHandleInput={(e) => handleInputChange(e, "day")}
            />
          </InputColumn>
          <InputColumn>
            <DefaultInput
              label="MONTH"
              placeHolder="MM"
              onHandleInput={(e) => handleInputChange(e, "month")}
            />
          </InputColumn>
          <InputColumn>
            <DefaultInput
              label="YEAR"
              placeHolder="YYYY"
              onHandleInput={(e) => handleInputChange(e, "year")}
            />
          </InputColumn>
        </div>
      </form>
    </div>
  )
}

export default DateInput
