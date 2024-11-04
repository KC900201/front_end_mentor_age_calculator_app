"use client"
import styled from "styled-components"

import IconArrowLogo from "../assets/images//icon-arrow.svg"
import { useSetDate } from "../hooks"
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

function CalculateAgeButton() {
  // TO-DO: correctly set birthday calculation
  const { date, setAgeDay, setAgeMonth, setAgeYear } = useSetDate()

  const onSubmitAge = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { day, month, year } = date
    console.log(`user age: ${day} ${month} ${year}`)

    const currentDate = new Date()
    let ageYears = currentDate.getFullYear() - Number(year)
    let ageMonths = currentDate.getMonth() - Number(month)
    let ageDays = currentDate.getDay() - Number(day)
    console.log(`age: ${ageDays} ${ageMonths} ${ageYears}`)

    // Adjust the age if current month is earlier than the birth month
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--
      ageMonths += 12
    }

    // Adjust the age if current day is earlier than the birth day
    if (ageDays < 0) {
      const lastMonth = new Date(
        currentDate.getFullYear() - currentDate.getMonth() - 1,
        0
      )
      ageDays += lastMonth.getDate()
      ageMonths--
    }

    setAgeDay(ageDays.toString())
    setAgeMonth(ageMonths.toString())
    setAgeYear(ageYears.toString())
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
