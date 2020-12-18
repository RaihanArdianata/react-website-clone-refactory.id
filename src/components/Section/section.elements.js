import styled from 'styled-components'

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0 0 0;
  min-height: ${({size})=>(
    size === 'large'? "600px" : "200px"
  )};
  background: ${({bgColor})=>(bgColor)};
`

export const SectionTitle = styled.div`
  font-weight: 600;
  font-size: 2.25rem;
  @media screen and (max-width: 768px){
    text-align: center;
    margin: 0 20px;
    font-size: 2rem;
  }
`

export const SectionContentWrapper = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  justify-content: space-evenly;
  margin: 60px 0;
  flex-wrap: wrap;
`

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: ${({width}) => width};
  @media screen and (max-width: 768px){
    width: 400px;
  }
`

export const ContentImgCentered = styled.img`
  width: fit-content;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export const ContentTitle = styled.div`
  text-align: center;
  margin: 20px 0;
  font-size: 26px;
  font-weight: 600;
  font-family: "Montserrat", Sans-serif;
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 768px){
    font-size: 20px;
  }
`

export const ContentDesc = styled.div`
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: rgba(11, 22, 43, 0.6);
  line-height: 30px;
  font-size: 16px;
  font-weight: 400;
  width: 90%;
  font-family: "Montserrat", Sans-serif;
`