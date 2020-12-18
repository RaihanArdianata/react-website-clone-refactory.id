import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 350px;
  border-radius: 5px;
  box-shadow: 0px 12px 20px 0px rgba(223, 223, 223, 0.8);
  padding: 20px;

  justify-content: space-between;
  align-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 768px){
    margin-top: 50px;
  }
`

export const CardImage = styled.img`
  width: inherit;
`

export const CardTitle = styled.div`
  color: #111111;
  font-family: "Raleway", Sans-serif;
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;
  font-style: normal;
  line-height: 62px;
  letter-spacing: 0.2px;
`

export const CardSubTitle = styled.div`
  color: #999999;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 40px;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin: 10px 0;
`

export const CardContentTitle = styled.div`
  color: rgba(11, 22, 43, 0.8);
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 50px;
`

export const CardContentDescription = styled.div`
  color: #0B162B;
  font-family: "Montserrat", Sans-serif;
  font-size: 16px;
  font-weight: 300;
  font-style: normal;
  line-height: 30px;
`