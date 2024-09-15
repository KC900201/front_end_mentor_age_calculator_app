import styled from 'styled-components'
import IconArrowLogo from '../assets/images//icon-arrow.svg'

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
  width: 70%;
`

// Further adjustments needed (1/24/2024s)
function CalculateAgeButton() {
  // WIP
  const onSubmitAge = () => {
    alert('testing button')
  }

  return (
    <CalculateAgeSection>
      <UnderLine />
      <CustomButton onClick={onSubmitAge}>
        <img src={IconArrowLogo} alt="icon-arrow" />
      </CustomButton>
    </CalculateAgeSection>
  )
}

export default CalculateAgeButton
