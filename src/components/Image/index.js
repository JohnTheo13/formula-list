import React from 'react'
import styled, { keyframes } from 'styled-components'
import CollapsedContainer from '../CollapsingContainer'

const animation = keyframes`
  20% {margin-left: 0px;}
  30% {margin-left: -100%;}
  50% {margin-left: -100%;}
  60% {margin-left: -200%;}
  70% {margin-left: -200%;}
  80% {margin-left: -300%;}
  90% {margin-left: -300%;}
  100% {margin-left: 0px}
`,

  SlideContainer = styled.div`
    background-color: #000000;
    & > div {
      overflow: hidden;
      height: 40%;
      width: 60%;
      margin: 0 auto;
      & > div {
        width: 400%;
        height: 40%;
        animation: ${animation} 18s ease infinite;
        & > img {
          float: left;
          height: 100%;
          width: 25%;
        }
      }
    }
`;

class Image extends React.Component<{}, { collapsed: boolean }> {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
    }
  }

  toogle = () => this.setState(({ collapsed }) => ({ collapsed: !collapsed }))

  render() {
    const { collapsed } = this.state
    return (
      <>
        <button type="button" onClick={this.toogle}>open slideshow</button>
        <CollapsedContainer collapsed={collapsed}>
          <SlideContainer>
            <div>
              <div>
                <img src="/images/first.jpg" alt="" />
                <img src="/images/second.jpg" alt="" />
                <img src="/images/third.jpg" alt="" />
                <img src="/images/fourth.jpg" alt="" />
              </div>
            </div>
          </SlideContainer>
        </CollapsedContainer>
      </>
    )
  }
}

export default Image
