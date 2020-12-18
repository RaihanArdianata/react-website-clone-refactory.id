import React from 'react'
import {
  CardContainer,
  CardContent,
  CardDesc,
  CardFooter,
  CardImgWrapper,
  CardTitle,
  CardWrapper,
  Creator,
  CardImg,
  Avatar
} from './card.course.elements'

function CardCourse({courseImage, courseTitle, courseDesc, userImg, userName}) {
  return (
    <CardContainer>
      <CardWrapper>
        <CardContent>
          <CardImgWrapper>
            <CardImg src={courseImage}/>
          </CardImgWrapper>
          <div style={{padding: 20}}>
            <CardTitle>{courseTitle}</CardTitle>
            <CardDesc>{courseDesc}</CardDesc>
          </div>
        </CardContent>
        <CardFooter>
          <Avatar src={userImg}/>
          <Creator>{userName}</Creator>
        </CardFooter>
      </CardWrapper>
    </CardContainer>
  )
}

export default CardCourse
