import React, { useState } from 'react'

type Props = {
  children?: React.ReactNode
}

interface InputInterface {
  label: string
  placeHolder: string
}

const InputColumn = ({ children }: Props) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-12">{children}</div>
    </div>
  )
}

const DefaultInput = ({ label, placeHolder }: InputInterface) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numeric values in user input
    // https://www.geeksforgeeks.org/how-to-get-only-numeric-values-in-textinput-field-in-react-native/
    const numericValue = event.target.value.replace(/[^0-9]/g, '')
    setInputValue(numericValue)
  }

  return (
    <>
      <label className="mb-[10px] block text-base font-bold text-gray-500 text-left">
        {label}
      </label>
      <input
        type="text"
        pattern="[0-9]*"
        onChange={handleInputChange}
        value={inputValue}
        placeholder={placeHolder}
        style={{
          fontSize: '32px',
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
  return (
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <InputColumn>
          <DefaultInput label="DAY" placeHolder="DD" />
        </InputColumn>
        <InputColumn>
          <DefaultInput label="MONTH" placeHolder="MM" />
        </InputColumn>
        <InputColumn>
          <DefaultInput label="YEAR" placeHolder="YYYY" />
        </InputColumn>
      </div>
    </div>
  )
}

export default DateInput
