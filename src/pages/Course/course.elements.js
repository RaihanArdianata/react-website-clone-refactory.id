import styled from 'styled-components'

export const ReviewWrapper = styled.div`
  width: 100%;
  padding: 0 50px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 768px){

  }
`

export const SectionStartLearning = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 50px 0;
  background: linear-gradient(90deg, #127BCA 0%, #35B4AE 100%);
  min-height: 20px;
`

export const ImgStep = styled.img`
  @media screen and (max-width: 728px){
    width: 100%;
  }
`