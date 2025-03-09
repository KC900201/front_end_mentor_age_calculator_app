"use client"
import React, { useMemo } from "react"
import { DateType } from "../types/date.type"

type Props = {
  children?: React.ReactNode
}

interface InputInterface {
  label: string
  placeHolder: string
  onHandleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface DateInputInterface {
  date: DateType
  setDate: React.Dispatch<React.SetStateAction<DateType>>
  error: string
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
  const setMaxInput = useMemo(() => {
    switch (label) {
      case "DAY":
        return 31
      case "MONTH":
        return 12
      case "YEAR":
        return 1970
      default:
        return 9999
    }
  }, [label])

  return (
    <>
      <label className="mb-[10px] block text-base font-bold text-gray-500 text-left">
        {label}
      </label>
      <input
        type="number"
        onChange={onHandleInput}
        placeholder={placeHolder}
        max={setMaxInput}
        min={1}
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

function DateInput({ date, setDate, error }: DateInputInterface) {
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

    console.log("error: ", error)
    console.log("date: ", date)
  }

  return (
    <div className="container">
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
    </div>
  )
}

export default DateInput
