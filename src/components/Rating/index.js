import React from 'react'
import { FaStar } from 'react-icons/fa'

function Rating({maxValue, initValue}) {
  let star = []
  for (let index = 0; index < maxValue; index++) {
    if(initValue > 0){
      star.push(<FaStar key={index} color="#E48800"/>)
      initValue--
    }else{
      star.push(<FaStar key={index} color="#000"/>)
    }

  }
  return (
    <div>
      {star}
    </div>
  )
}

export default Rating
