import styled, { keyframes } from 'styled-components'
import React from 'react'

const animation =  keyframes`
  20% {margin-left: 0px;}
  30% {margin-left: -100%;}
  50% {margin-left: -100%;}
  60% {margin-left: -200%;}
  70% {margin-left: -200%;}
  80% {margin-left: 0px;}
  90% {margin-left: 0px;}
`

const SlideContainer = styled.div`
  overflow: hidden;
  height: 40%;
  width: 100%;
  margin: 0 auto;
  & > div {
    width: calc(100% + 200%);
    height: 40%;
    animation: ${animation} 18s ease infinite;
    & > img {
      float: left;
      height: 100%;
      width: 33.33%;
      ${'' /* &:first-child {
        background: url('/images/first.jpg');
      }
      &:nth-child(2) {
        background: url('/images/second.jpg');
      }
      &:last-child {
        background: url('/image/third.jpg');
      } */}
    }
  }
`

const Image = () =>
  <SlideContainer>
    <div>
      <img src="/images/first.jpg" alt="" />
      <img src="/images/second.jpg" alt="" />
      <img src="/images/third.jpg" alt="" />
    </div>
  </SlideContainer>
export default Image
