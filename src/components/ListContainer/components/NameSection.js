// @flow
import React from 'react'
import styled from 'styled-components'

type fullnameType = {
  givenName: string,
  familyName: string
}

type NameSectionType = {
  positionText: string,
  constructorName: string,
  fullname: fullnameType
}

const StyledSection = styled.div`
  display: flex;
  & > div {
    &:first-child {
      margin-right: 4px;
    }
    &:nth-child(3) {
      margin-left: 8px;
      & > i {
        color: #fff824;
        width: 30px;
      }
    }
  }
`

const nameGenarator = fullname => {
  const { givenName, familyName } = fullname,
        initial = givenName.slice(0,1)
  return `${initial}.${familyName}`
}

const NameSection = (props: NameSectionType) => (
  <StyledSection>
      <div>{props.positionText}</div>
      <div>
        <div>{nameGenarator(props.fullname)}</div>
        <div>{props.constructorName}</div>
      </div>
      {props.positionText === '1' &&
        <div>
          <i className="material-icons">star_rate</i>
        </div>
      }
  </StyledSection>
)

export default NameSection
