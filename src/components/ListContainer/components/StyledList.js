import styled, { css } from 'styled-components'

const StyledList = styled.div`
  & > div {
    &:nth-child(2) { /* Header */
      background-color: #cccbcb;
    }
    &:nth-child(3) {
      & > div {
        &:first-child {
          & > div {
            &:last-child {
              & > div {
                &:first-child {
                  ${({ isSeason }) => isSeason && css`
                    text-decoration: underline;
                    text-transform: uppercase;
                    font-weight: 600;
                  `};
                }
              }
            }
          }
        }
      }




    }
    &:first-child {
      height: 40px;
      padding: 10px
    }
    &:last-child {
      text-align: center;
      cursor: pointer;
      & > i {
        color: #000000;
      }
    }
  }
`

export default StyledList
