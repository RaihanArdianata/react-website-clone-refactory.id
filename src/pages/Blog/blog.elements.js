import styled from 'styled-components'

export const CategoryContainer = styled.div`
  background: #005978;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  margin-top: 68px;
`

export const CategoryWrapper = styled.div`
  width:inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CategoryItem = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height:inherit;
`

export const CategoryLink = styled.a`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffff;
  font-size: 18px;
  padding: 0 20px;
  height: inherit;
  cursor: pointer;
  &:hover{
    background: #5CA3BD;
  }
`

export const SectionGrid = styled.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-areas: 'col1 col1 col1 col1 col1 col1 col2 col2';
  margin-right: auto;
  margin-left: auto;
  grid-auto-columns: minmax(auto, 1fr);

  @media screen and (max-width:728px){
    display: flex;
    flex-wrap: wrap;
  }
`

export const Column1 = styled.div`
  grid-area: col1;
`

export const Column2 = styled.div`
  grid-area: col2;
`