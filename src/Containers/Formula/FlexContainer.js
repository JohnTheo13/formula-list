import styled, {keyframes} from 'styled-components'

const animation =  keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  & > div {
    width: 90px;
    &:nth-child(3) {
      animation: ${animation} 0.5s ease;
    }
  }
`

export default FlexContainer
