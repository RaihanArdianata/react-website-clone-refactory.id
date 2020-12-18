import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {NavLink as LinkR} from 'react-router-dom'

export const Nav = styled.div`
  background: ${({transparent}) => (
    transparent? "transparent" : "#003547"
  )};
  margin-top: -69px;
  height: 70px;
  display: ${({scrollNav}) => (scrollNav? 'none' : 'flex')} ;
  justify-content: center;
  font-size: 1.10rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
    background: rgba(19,69,107, 0.7);
  }
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkS)`
  color: #ffffff;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const NavLogoImg = styled.img``

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #ffffff;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: -22px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavItem = styled.li`
  height: 70px;
`

export const NavLinks = styled(LinkR)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: 600;
  cursor: pointer;

  &.active{
    color: #E48800;
    /* border-bottom: 3px solid; */
  }

  &:hover{
    color: #E48800;
    transition: 0.2s ease-in-out;
  }
`
