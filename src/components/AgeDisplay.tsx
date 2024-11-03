import styled from "styled-components"

const AgeDisplaySection = styled.section``

const AgeText = styled.p<{ color?: string }>`
  font-size: 40px;
  color: ${(props) => props.color ?? "black"};
`

interface AgeTextDisplayInterface {
  value?: string
  unit: "years" | "months" | "days"
}

const AgeTextDisplay = ({ value, unit }: AgeTextDisplayInterface) => (
  <div className="flex gap-x-1 gap-y-0">
    <AgeText className="italic font-extrabold" color="#854dff">
      {value ?? "--"}
    </AgeText>
    <AgeText className="italic font-extrabold">{unit}</AgeText>
  </div>
)

function AgeDisplay() {
  return (
    <AgeDisplaySection className="grid gap-x-0 gap-y-0 justify-start pl-5 pb-2 caret-transparent cursor-default">
      <AgeTextDisplay unit="years" />
      <AgeTextDisplay unit="months" />
      <AgeTextDisplay unit="days" />
    </AgeDisplaySection>
  )
}

export default AgeDisplay
