import React from 'react'
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

// Continue here (1/16/2024)
const LayoutBoard = styled.section`
  border: solid hsl(0, 0%, 100%);
  border-radius: 5% 5% 35% 5%;
  background-color: hsl(0, 0%, 100%);
  min-height: fit-content;
  height: 400px;
  box-shadow: 10px 5px 5px hsl(211, 68%, 94%);
  align-content: center;
  display: grid;
  width: 500px;
`

function Layout({ children }: Props) {
  return <LayoutBoard>{children}</LayoutBoard>
}

export default Layout
