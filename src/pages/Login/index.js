import React from 'react'
import Navbar from 'src/components/NavbarCourse'
import Footer from 'src/components/FooterCourse'
import Section from 'src/components/Section'
import CardLogin from 'src/components/CardLogin'
import { Content } from '../../components/Section/section.elements'

function Login() {
  return (
    <>
      <Navbar islogin={true}/>
      <Section bgColor="#F5F5F8">
        <Content style={{width: "100%", height: "65vh", display: 'flex', justifyContent: "center", alignItems: "center"}}>
          <CardLogin/>
        </Content>
      </Section>
      <Footer/>
    </>
  )
}

export default Login
