import React from 'react'
import {
  FooterContainer,
  FooterLeft,
  FooterLink,
  FooterRight,
  FooterTitle,
  FooterWrapper
} from './footer.elements'

function FooterCourse() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLeft>
          <FooterTitle>
            © Refactory 2020
          </FooterTitle>
          <FooterLink>Terms of Services</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
        </FooterLeft>
        <FooterRight>
          <FooterLink>Terms of Use</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
        </FooterRight>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default FooterCourse
