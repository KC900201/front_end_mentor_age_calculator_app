"use client"
import styled from "styled-components"
import { AgeType } from "../types/date.type"

const AgeDisplaySection = styled.section``

const AgeText = styled.p<{ color?: string }>`
  font-size: 40px;
  color: ${(props) => props.color ?? "black"};
`

interface AgeTextDisplayInterface {
  value?: string
  unit: "years" | "months" | "days"
}

interface AgeDisplayInterface {
  age: AgeType
}

const AgeTextDisplay = ({ value, unit }: AgeTextDisplayInterface) => (
  <div className="flex gap-x-1 gap-y-0">
    <AgeText className="italic font-extrabold" color="#854dff">
      {value && value.length ? value : "--"}
    </AgeText>
    <AgeText className="italic font-extrabold">{unit}</AgeText>
  </div>
)

function AgeDisplay({ age }: AgeDisplayInterface) {
  const { years, months, days } = age

  const ageToString = (age: number) => {
    return age > 0 ? age.toString() : ""
  }

  return (
    <AgeDisplaySection className="grid gap-x-0 gap-y-0 justify-start pl-5 pb-2 caret-transparent cursor-default">
      <AgeTextDisplay value={ageToString(years)} unit="years" />
      <AgeTextDisplay value={ageToString(months)} unit="months" />
      <AgeTextDisplay value={ageToString(days)} unit="days" />
    </AgeDisplaySection>
  )
}

export default AgeDisplay
