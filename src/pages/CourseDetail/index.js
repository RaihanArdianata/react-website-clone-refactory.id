import React, { useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import axios from 'axios'
import Navbar from 'src/components/NavbarCourse'
import Hero from 'src/components/Hero'
import Section from 'src/components/Section'
import Footer from 'src/components/FooterCourse'
import {
  Content,
  ContentImgCentered,
  ContentTitle,
  ContentDesc
} from '../../components/Section/section.elements'
import CourseDetail from 'src/components/CourseList'
import { ButtonSquere, ImgInherit } from 'src/components/shared.components'

function DetailCourse() {
  const [detail, setDetail] = useState({})

  const heroConfig = {
    buttonText1: "Mulai Belajar",
    heroTitle: "HTML & CSS Introduction",
    heroDesc: "<b>HTML</b> dan <b>CSS</b> adalah materi dasar untuk pengembangan web. Setiap web developer harus memiliki pengetahuan dasar setidaknya HTML dan CSS.",
    heroDisplay: "flex",
    heroBg: "https://cdn.fs.teachablecdn.com/RBZMT9GSASWBQNBzWhJM",
    bottomHeroComp: false,
    heroGradientOpacity: 1,
    width: 580,
    heroFontSizeDesc: 14,
    heroHeight: 400,
  }

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/detail-course.json')
      .then(res => {
        setDetail(res.data)
      })
  }, [])

  return (
    <>
      <Navbar />
      <Hero {...heroConfig} />
      <Section>
        <Content style={{ width: 620 }}>
          <ContentTitle style={{ fontWeight: 400, fontSize: 22 }}>
            Tentang Course
          </ContentTitle>
          <ContentDesc style={{ fontSize: 14, fontWeight: 400, textAlign: "center" }}>
            <p>
              {detail['short-description']}
            </p>
          </ContentDesc>
        </Content>
      </Section>
      <Section>
        <Content style={{ width: 620, justifyContent: 'center' }}>
          <ContentTitle style={{ fontWeight: 400, fontSize: 22 }}>
            Materi Course
          </ContentTitle>
          <Content style={{ width: '-webkit-fill-available', justifyContent: 'center', alignItems: 'center' }}>
            {
              detail['materi course'] ?
                detail['materi course'].map((datum, index) => (
                  <CourseDetail key={index} data={datum} />
                ))
                :
                null
            }
            <ButtonSquere>
              <FaAngleDown />
            </ButtonSquere>
          </Content>
        </Content>
      </Section>
      <Content style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        <ImgInherit src={detail['quistion-photo']} />
        <Content style={{ width: 450, height: "auto" }}>
          <ContentTitle style={{ fontWeight: 400, fontSize: 18 }}>
            {detail.quistion}
          </ContentTitle>
          <ContentDesc style={{ fontSize: 13 }}>
            {detail.answer}
          </ContentDesc>
        </Content>
      </Content>
      <Footer/>
    </>
  )
}

export default DetailCourse
