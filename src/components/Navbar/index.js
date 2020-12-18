import React,{useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {Nav, NavContainer, NavLogo, NavLogoImg, MobileIcon, NavMenu, NavItem, NavLinks} from './navbar.elements'

function Navbar({transparent}) {

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])


  return (
    <>
      <IconContext.Provider value={{ color: '#fffff' }}>
        <Nav scrollNav={scrollNav} transparent={transparent}>
          <NavContainer>
            <NavLogo to='/'>
              <NavLogoImg src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/01/refactory-hd.png?w=143&ssl=1" width="120px"/>
            </NavLogo>
            <MobileIcon>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks activeClassName='active' exact  to="/">
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks activeClassName='active' to="/course">
                  Courses
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks activeClassName='active' to="/_">
                  Custome Trainings
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks activeClassName='active' to="/_">
                  Case Studies
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks activeClassName='active' to="/_">
                  Blog
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
