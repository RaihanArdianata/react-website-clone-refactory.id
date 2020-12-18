import styled from 'styled-components'

export const HeroContainer = styled.div`
  background: #232a34;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  height: 550px;
  flex-direction: column;
  z-index: 1;
  padding-top: 150px;

  @media screen and (max-width: 668px){
    height: 700px;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(6,125,111);
  background: linear-gradient(297deg, rgba(6,125,111,1) 24%, rgba(11,127,154,1) 47%, rgba(0,29,115,1) 100%);
  z-index: 2
`

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  opacity: 0.5;
`
export const HeroContentWrapper = styled.div`
  display: ${({display})=>(
    display === 'flex' ? 'flex' : 'grid'
  )};
  text-align: ${({display})=>(
    display === 'flex' ? 'center' : 'left'
  )};
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  grid-auto-columns: minmax(auto, 1fr);
  justify-content: center;
  align-content: center;
  align-items: center;
  grid-template-areas: 'col1 col2';
  z-index: 3;

  @media screen and (max-width: 768px){
    grid-template-areas: 'col1 col1' 'col2 col2'
  }
`

export const HeroContentColumn1 = styled.div`
  grid-area: col1;
  width: 680px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px){
    width: auto;
    padding: 0 20px;
    display: flex;
    text-align: center;
    flex-direction: column;
  }
`
export const HeroContentColumn2 = styled.div`
  grid-area: col2;
  width: auto;
`

export const HeroContentBody = styled.div`
  margin-left: ${({display})=>(
    display === 'flex' ? 0 : '50px'
  )};;
  @media screen and (max-width: 768px){
    margin-left: auto;
  }
`

export const HeroH1 = styled.div`
  color: #ffffff;
  font-size: 3rem;
  font-weight: 600;

  @media screen and (max-width: 768px){
    font-size: 2rem;
    width: auto;
  }
`

export const HeroP = styled.div`
  color: #ffffff;
  font-weight: 400;
  line-height: 1.75;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 10px;

  @media screen and (max-width: 768px){
    width: auto;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: ${({display})=>(
    display === 'flex' ? 'center' : 'flex-start'
  )};
  @media screen and (max-width: 768px){
    flex-direction: column;
    width: fit-content;
  }
`
/* new components */

/* top */

export const HeroTopComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  height: 80px;
  background: black;
  z-index: 999;
`

/* bot */
export const HeroBottomComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
`

export const BottomContentTitle =  styled.div`
  color: #ffffff;
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
`

export const BottomContentWrapper = styled.div`
  width: 90vw;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BottomContentBg = styled.div`
  position: absolute;
  width: 100%;
`

export const BottomContent = styled.div`
  width: 85%;
  height: 100%;
`

export const Img = styled.img`
  padding: 0 20px;
`
