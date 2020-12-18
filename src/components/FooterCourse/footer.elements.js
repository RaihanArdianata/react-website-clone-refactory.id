import styled from 'styled-components'

export const FooterContainer = styled.div`
  background: #3B8C9B;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: -webkit-fill-available;
  width: 960px;


  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px){
    text-align: center;
  }
`

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px){
    text-align: center;
  }
`

export const FooterTitle = styled.div`
  color: #fff;
`

export const FooterLink = styled.a`
  color: #fff;
  font-size: 14px;

  &:hover{
    border-bottom: 1px solid #fff;
  }
`