import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0C162A;
`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    /* background: white; */
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px){
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const FooterLinksWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 820px){
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

export const FooterLinkTitle = styled.h1`
  color: #eaeaea;
  font-size: 16px;
  margin-bottom: 16px;
  font-family: 'Raleway', sans-serif;
`

export const FooterLink = styled(Link)`
  color: #eaeaea;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  line-height: 32px;
  font-family: 'Raleway', sans-serif;

  &:hover{
    color: #E48800;
    transition: 0.3 ease-out;
  }
`

export const SocialMedia = styled.section`
  border-top: 1px solid grey;
  display: flex;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 1200px){
    flex-direction: column;
  }
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 820px){
    flex-direction: column;
    text-align: center;
  }


`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-content: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`

export const WebsiteRights = styled.small`
  color: #fff;
  margin: 20px 0;
  @media screen and (max-width: 768px){
    width: 50%;
    text-align: center;
    line-height: 30px;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`

export const SocialIconLink = styled.a`
  color: #fff;
  background: #35B4AE;
  font-size: 18px;
  height: 18px;
  width: 18px;
  border: 1px solid #35B4AE;
  border-radius: 50%;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`

