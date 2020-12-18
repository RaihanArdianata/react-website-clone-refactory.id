import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Img = styled.img`
  width: 150px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  margin: 0 10px;

  &:hover{
    -webkit-filter: none;
    filter: none;
  }
`

export const InsightSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 300px;
`

export const InsightContent = styled.div`
  display:flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const InsightBg = styled.img`
  position: absolute;
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
`

export const InsightSubTitle = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  line-height: 22px;
  letter-spacing: 2px;
  font-weight: 400;
  font-family: 'Raleway', sans-serif;
`

export const InsightTitle = styled.div`
  color: #0B162B;
  font-size: 28px;
  font-weight: 700;
  line-height: 92px;
  font-family: 'Raleway', sans-serif;
`

export const InsightBtn = styled.div`

`

export const InsightLink = styled(LinkR)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  text-decoration: none;
  font-family: "Raleway", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 22px;
  fill: #007BFF;
  color: #007BFF;
  width: 130px;
  height: 120px;

  &:hover{
    fill: #E48800;
    color: #E48800;
  }
`