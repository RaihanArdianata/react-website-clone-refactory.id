import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from 'src/components/NavbarCourse'
import Footer from 'src/components/FooterCourse'
import Section from 'src/components/Section'
import Card from 'src/components/CardCourse'
import Dropdown from 'src/components/Dropdown'
import Search from 'src/components/Search'
import { Content } from '../../components/Section/section.elements'

function ListCourse() {
  const [course, setCourse] = useState([
    {
      id: 1,
      photo_url: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7',
      title: 'HTML & CSS',
      short_description: 'Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web',
      link_url: 'https://course.refactory.id/p/html-css-introduction',
      user: {
        user_id: 1,
        photo_url: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi',
        name: 'Harlita Keni Damonti'
      }
    },
    {
      id: 1,
      photo_url: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7',
      title: 'HTML & CSS',
      short_description: 'Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web',
      link_url: 'https://course.refactory.id/p/html-css-introduction',
      user: {
        user_id: 1,
        photo_url: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi',
        name: 'Harlita Keni Damonti'
      }
    },
    {
      id: 1,
      photo_url: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7',
      title: 'HTML & CSS',
      short_description: 'Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web',
      link_url: 'https://course.refactory.id/p/html-css-introduction',
      user: {
        user_id: 1,
        photo_url: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi',
        name: 'Harlita Keni Damonti'
      }
    },
    {
      id: 1,
      photo_url: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7',
      title: 'HTML & CSS',
      short_description: 'Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web',
      link_url: 'https://course.refactory.id/p/html-css-introduction',
      user: {
        user_id: 1,
        photo_url: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi',
        name: 'Harlita Keni Damonti'
      }
    }
  ])
  useEffect(()=>{
  },[])
  console.log(course);

  return (
    <div style={{background: "#fafafa"}}>
      <Navbar/>
      <Section>
        <Content style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row', width: 'inherit', alignItems: 'center'}}>
          <Dropdown/>

          <Search placeholder={"Find a course"}/>
        </Content>
        <Section style={{justifyContent:"space-between", width: "90%"}}>
          {
            course.map((datum, index)=>(
              <Card
                courseDesc={datum.short_description}
                courseImage={datum.photo_url}
                courseTitle={datum.title}
                userImg={datum.user.photo_url}
                userName={datum.user.name}
                key={index}

              />
            ))
          }
        </Section>
      </Section>
      <Footer/>
    </div>
  )
}

export default ListCourse
