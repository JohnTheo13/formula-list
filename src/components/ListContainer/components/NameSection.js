// @flow
import React from 'react'
import styled from 'styled-components'

type fullnameType = {
  givenName: string,
  familyName: string,
}

type NameSectionType = {
  positionText: string,
  constructorName: string,
  fullname: fullnameType,
}

const StyledSection = styled.div`
  max-width: 75px;
  display: flex;
  & > div {
    &:first-child {
      margin-right: 4px;
    }
    &:nth-child(2) {
      & > div {
        &:first-child {
          @media (max-width: 650px) {
            max-width: 75px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }

`,

  nameGenarator = fullname => {
    const { givenName, familyName } = fullname,
      initial = givenName.slice(0, 1)
    return `${initial}.${familyName}`
  },

  NameSection = ({ fullname, positionText, constructorName }: { ...NameSectionType }) => (
    <StyledSection position={positionText}>
      <div>{positionText}</div>
      <div>
        <div>{nameGenarator(fullname)}</div>
        <div>{constructorName}</div>
      </div>
    </StyledSection>
  )

export default NameSection
