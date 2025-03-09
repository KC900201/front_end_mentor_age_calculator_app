"use client"
import styled from "styled-components"

import IconArrowLogo from "../assets/images/icon-arrow.svg"
import React from "react"

const CalculateAgeSection = styled.section`
  display: flex;
  gap: 0px;
  align-items: center;
`

const CustomButton = styled.button`
  border-radius: 55%;
  padding: 1rem;
  background-color: hsl(259, 100%, 65%);
`

const UnderLine = styled.div`
  border-top: 1px solid hsl(0, 0%, 86%);
  margin-top: 5px;
  margin-left: 1.25rem;
  width: 70%;npm
`

interface CalcualteAgeButtonInterface {
  handleCalculateAge: () => void
}

function CalculateAgeButton({
  handleCalculateAge,
}: CalcualteAgeButtonInterface) {
  const onSubmitAge = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleCalculateAge()
  }

  return (
    <CalculateAgeSection className="caret-transparent">
      <UnderLine />
      <form onSubmit={onSubmitAge}>
        <CustomButton type="submit">
          <img src={IconArrowLogo} alt="icon-arrow" />
        </CustomButton>
      </form>
    </CalculateAgeSection>
  )
}

export default CalculateAgeButton
