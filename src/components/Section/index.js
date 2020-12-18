import React from 'react'
import {
  SectionContainer,
  SectionContentWrapper,
  SectionTitle,
} from './section.elements'

function Section({children, title, size, bgColor, style}) {
  return (
    <SectionContainer size={size} bgColor={bgColor} >
      <SectionTitle>{title}</SectionTitle>
      <SectionContentWrapper style={style}>
        {
          children
        }
      </SectionContentWrapper>
    </SectionContainer>
  )
}

export default Section
