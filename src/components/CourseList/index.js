import React from 'react'
import {
  ListContainer,
  ListHeaderWrapper,
  ListTitle,
  ListBodyWrapper,
  BodyLeft,
  BodyRight,
  BodyTitle
} from './course.list.elements'
import {FaYoutube} from 'react-icons/fa'
import {Button} from '../shared.components'

function CourseList({data}) {
  console.log(data);
  return (
    <ListContainer>
      <ListHeaderWrapper>
        <ListTitle>
          {data.section}
        </ListTitle>
      </ListHeaderWrapper>
      {
        data.data.map((dataBody,index) => (
          <ListBodyWrapper key={index} href={dataBody.url} target="_blank">
            <BodyLeft>
              <FaYoutube/>
              <BodyTitle>
                {dataBody.title}<span>({dataBody["time-in"]})</span>
              </BodyTitle>
            </BodyLeft>
            <BodyRight>
              <Button style={{fontSize: 16, padding: "10px 20px", borderRadius: 10}} href={dataBody.url} target="_blank">
                Start
              </Button>
            </BodyRight>
          </ListBodyWrapper>
        ))
      }
    </ListContainer>
  )
}

export default CourseList
