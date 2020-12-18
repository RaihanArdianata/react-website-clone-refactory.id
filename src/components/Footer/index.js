import React from 'react';
import {FooterContainer, FooterLinksWrapperRight, FooterWrap, FooterLinksContainer, FooterLinksWrapper,FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIconLink, SocialIcons, SocialLogo} from './footer.elements';
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>Site Map</FooterLinkTitle>
                <FooterLink to="/signin">Home</FooterLink>
                <FooterLink to="/signin">Bootcamp</FooterLink>
                <FooterLink to="/signin">Software Development</FooterLink>
                <FooterLink to="/signin">Courses</FooterLink>
                <FooterLink to="/signin">Custom Trainings</FooterLink>
                <FooterLink to="/signin">Blog</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle>Company</FooterLinkTitle>
                <FooterLink to="/signin">About Us</FooterLink>
                <FooterLink to="/signin">Career <span> We’re Hiring</span></FooterLink>
                <FooterLink to="/signin">We’re Hiring</FooterLink>
                <FooterLink to="/signin">FAQ</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle>Connect</FooterLinkTitle>
                <FooterLink to="/signin">Facebook</FooterLink>
                <FooterLink to="/signin">Instagram</FooterLink>
                <FooterLink to="/signin">Youtube</FooterLink>
                <FooterLink to="/signin">LinkedIn</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapperRight>
            <SocialIcons>
                <SocialIconLink href="/" target="_blank" arial-label='facebook'><FaFacebook/></SocialIconLink>
                <SocialIconLink href="/" target="_blank" arial-label='facebook'><FaInstagram/></SocialIconLink>
                <SocialIconLink href="/" target="_blank" arial-label='facebook'><FaYoutube/></SocialIconLink>
                <SocialIconLink href="/" target="_blank" arial-label='facebook'><FaLinkedin/></SocialIconLink>
            </SocialIcons>
            <FooterLinksWrapper>
              <FooterLinkItems>
                  <FooterLinkTitle>Company Address</FooterLinkTitle>
                  <span>Jln. Palagan Tentara Pelajar Km. 9,8 Ngaglik, Kab. Sleman DI Yogyakarta 55581</span>
              </FooterLinkItems>
              <FooterLinkItems>
                  <FooterLinkTitle>Contact</FooterLinkTitle>
                  <FooterLink to="/signin">marketing@refactory.id</FooterLink>
                  <FooterLink to="/signin">+62 8122 8203 381</FooterLink>
                  <FooterLink to="/signin">Dewita: 0857 2582 7222</FooterLink>
                  <FooterLink to="/signin">Septin: 0878 2080 0206</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksWrapperRight>
        </FooterLinksContainer>
      </FooterWrap>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>© 2020 Refactory - All Rights Reserved - Terms of Services / Privacy Policy</WebsiteRights>
        </SocialMediaWrap>
        <SocialMediaWrap>

        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
