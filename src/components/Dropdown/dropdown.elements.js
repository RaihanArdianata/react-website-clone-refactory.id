import styled from 'styled-components'

export const ItemContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  color: #E48800;
  cursor: pointer;
`

export const DropdownContainer = styled.div`
 display: flex;
 flex-direction: row;
 width:fit-content;
 background: #fff;
 padding: 15px;
 border-radius: 20px;
`

export const Title = styled.div`
  font-size: 22px;
`

export const Item = styled.div`
  display: inline-block;
  position: relative;
`

export const ItemList = styled.div`
  display: ${({open})=>(
    open? 'block' : 'none'
  )};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`

export const ListName = styled.div`
  margin: 10px 0;
  padding: 12px 16px;
  cursor: pointer;
  &:hover{
    background: #eaeaea;
  }
`