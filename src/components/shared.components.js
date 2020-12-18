import styled from 'styled-components';
import {Link as LinkS  } from 'react-scroll';
import {Link as LinkR} from 'react-router-dom'

export const Button = styled(LinkR)`
  padding: 8px 40px;
  border-radius: 30px;
  border: 1px solid #E48800;
  background: ${({transparent}) => (
    transparent? "transparent" : "#E48800"
  )};
  color: #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  outline: none;
  text-decoration: none;
  height: 15px;

  &:hover{
    background: ${({transparent}) => (
      transparent? "#E48800" : "#f49200"
    )};
  }
`

export const ButtonSquere = styled.div`
  padding: 8px 10px;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    background-color: #E8E8E8;
  }
`

export const ImgInherit = styled.img`
  width: inherit;
`
