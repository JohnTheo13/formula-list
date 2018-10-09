import React from 'react'
import styled, { keyframes } from 'styled-components'

const carAnimation =  keyframes`
  0% { left: 100%;}
  100%{ left : 0;}
`

const Container = styled.div`
  overflow: hidden;
  & > div {
    position: relative;
    height: 80px;
    animation: ${carAnimation} 6s infinite;
    & > div {
      display: inline-block;
      padding: 30px 5px;
    }
    & > img {
      height: 100%;
      float: left;
    }
  }
`
const PromtChoose = () => (
  <Container>
    <div>
      <img alt="racing car" src="/images/car.png" />
      <div>CHOOSE A SEASON</div>
    </div>
  </Container>
)

export default PromtChoose
