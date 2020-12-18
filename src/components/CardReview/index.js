import React from 'react'
import Rating from 'src/components/Rating'
import {
  CardContainer,
  CardImage,
  CardTitle,
  CardSubTitle,
  CardContent,
  CardContentTitle,
  CardContentDescription,
} from './card.elements'

function CardReview({nameName, image, from, postTitle, postDescription, star, maxStar}) {
  return (
    <CardContainer>
      <CardImage src={image} />
      <CardTitle>
        {nameName}
      </CardTitle>
      <CardSubTitle>
        {from}
      </CardSubTitle>
      <Rating initValue={star} maxValue={maxStar} />
      <CardContent>
        <CardContentTitle>
          {postTitle}
        </CardContentTitle>
        <CardContentDescription>
          {postDescription}
        </CardContentDescription>
      </CardContent>
    </CardContainer>
  )
}

export default CardReview
