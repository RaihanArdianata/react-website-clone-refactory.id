import React,{useState} from 'react'
import {FaCaretDown} from 'react-icons/fa'
import {
  DropdownContainer,
  Item,
  ItemList,
  ListName,
  Title,
  ItemContent
} from './dropdown.elements'

function Dropdown() {
  const [open, setOpen] = useState(false)
  return (
    <DropdownContainer>
      <Title>Category : </Title>
      <Item>
        <ItemContent onClick={()=> setOpen(!open)}>
          <Title><span style={{color: "#E48800", cursor: "pointer"}}>All</span></Title>
          <FaCaretDown/>
        </ItemContent>
        <ItemList open={open}>
          <ListName onClick={()=> setOpen(!open)}>All</ListName>
          <ListName onClick={()=> setOpen(!open)}>Web Frontend</ListName>
          <ListName onClick={()=> setOpen(!open)}>Backend</ListName>
          <ListName onClick={()=> setOpen(!open)}>Python</ListName>
        </ItemList>
      </Item>
    </DropdownContainer>
  )
}

export default Dropdown
