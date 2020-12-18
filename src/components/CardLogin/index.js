import React from 'react'
import { Button } from '../shared.components'
import {
  CardContainer,
  CardInput,
  CardInputLabel,
  CardInputWrapper,
  CardTitle
} from './login.elements'

function CardLogin() {
  return (
    <CardContainer>
      <CardTitle>Log In to Refactory</CardTitle>
      <CardInputWrapper>
        <CardInputLabel>Username</CardInputLabel>
        <CardInput/>
      </CardInputWrapper>
      <CardInputWrapper>
        <CardInputLabel>Password</CardInputLabel>
        <CardInput/>
      </CardInputWrapper>
      <Button>
        Login
      </Button>
    </CardContainer>
  )
}

export default CardLogin
