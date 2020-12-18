import React,{useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {Nav, NavContainer, NavLogo, NavLogoImg, MobileIcon, NavMenu, NavItem, NavLinks, LinkP} from './navbar.elements'
import {Button} from '../shared.components'

function NavbarCourse({transparent, islogin}) {

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
            <NavLogo>
              <NavLogoImg src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/01/refactory-hd.png?w=143&ssl=1" width="80px"/>
            </NavLogo>
            <MobileIcon>
              <FaBars/>
            </MobileIcon>
            {
              islogin?
              null:
              <NavMenu>
                <NavItem>
                  <NavLinks style={{fontWeight: "lighter"}} activeClassName='active' exact  to="/">
                    <LinkP>Courses</LinkP>
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks style={{fontWeight: "lighter"}} activeClassName='active' to="/course">
                    <LinkP>Roadmap</LinkP>
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks style={{fontWeight: "lighter"}} activeClassName='active' to="/a">
                    <LinkP>Login</LinkP>
                  </NavLinks>
                </NavItem>
                {/* <NavItem>
                  <NavLinks activeClassName='active' to="/c">
                    <Button style={{fontWeight: "lighter", fontSize: 16, padding: "10px 10px"}}>
                      Sign Up
                    </Button>
                  </NavLinks>
                </NavItem> */}
              </NavMenu>
            }
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default NavbarCourse
