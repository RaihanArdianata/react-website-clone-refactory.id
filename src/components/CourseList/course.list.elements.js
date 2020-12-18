import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:-webkit-fill-available;
  margin-bottom: 20px;
`

export const ListHeaderWrapper = styled.div`
  height: 50px;
  background: #E8E8E8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const ListTitle = styled.div`
`

export const ListBodyWrapper = styled.a`
  height: 50px;
  background: #F0F0F0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 2px;
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
  color: #000;

  &:hover{
    background: #E8E8E8;
  }
`

export const BodyLeft = styled.div`
  display: flex;
`

export const BodyTitle = styled.div`
  margin-left: 10px;
`

export const BodyRight = styled.div`

`