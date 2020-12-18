import styled from 'styled-components'

export const TextLarge = styled.div`
  color: #FFFFFF;
  font-family: "Raleway", Sans-serif;
  font-size: 40px;
  font-weight: 400;
  font-style: normal;
  line-height: 50px;
`
export const TextNormal = styled.div`
  color: #EFEFEF;
  font-family: "Montserrat", Sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
`

export const TextSmall = styled.div`
  color: rgba(11, 22, 43, 0.6);
  font-family: "Montserrat", Sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 30px;
  @media screen and (max-width: 668px){
    font-size: 16;
  }
`

export const TextMedium = styled.div`
  color:  "#0B162B";
  font-family: "Raleway", Sans-serif;
  font-size: 28px;
  font-weight: 500;
  font-style: normal;
  line-height: 40px;

  @media screen and (max-width: 668px){
    text-align: center;
    font-size: 18px;
    padding-top: 30px;
  }
`