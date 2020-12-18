import React,{useEffect, useState} from 'react'
import {FaArrowRight} from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import axios from 'axios'
import {
  Content,
  ContentImgCentered,
  ContentTitle,
  ContentDesc
} from '../../components/Section/section.elements'

import {
  Img,
  InsightBtn,
  InsightContent,
  InsightSection,
  InsightSubTitle,
  InsightTitle,
  InsightLink,
  InsightBg
} from './home.elements'

function Home() {
  const [insight, setInsight] = useState([])

  const heroConfig = {
    buttonText1: "Temukan Solusi Anda",
    buttonText2: " Temukan Solusi Anda",
    heroTitle: "Empowering <span class='orangeText'>People</span> Through Programming",
    heroDesc: "Refactory adalah perusahaan edukasi dan teknologi yang menyediakan layanan lengkap berupa <i>course</i> maupun <em>custom training </em>yang materinya dapat disesuaikan dengan kebutuhan teknologi dan bisnis perusahaan Anda.",
    heroDisplay: "grid",
    heroBg: "https://refactory.id/wp-content/uploads/2020/01/hero-homepage.jpg",
    bottomHeroComp:true,
  }

  useEffect(()=>{
    axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/seen_on.json')
    .then(res => {
      setInsight(res.data.data)
    })
  },[])

  return (
    <>
      <Navbar transparent={true}/>
      <Hero {...heroConfig} />
      <Section title="Apa Yang Refactory Dapat Bantu?" size="large">
        <Content width="500px">
          <ContentImgCentered src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/material_approval.png?fit=50%2C48&ssl=1"/>
          <ContentTitle>
            Memperkuat Tim <i>Engineer</i> Anda
          </ContentTitle>
          <ContentDesc>
            Bisnis di jaman modern membutuhkan keterampilan pengembangan terbaik untuk meningkatkan skala produk. Kami dapat mempersiapkan course dan juga dapat menyediakan tim yang menangani kebutuhan digital Anda
          </ContentDesc>
        </Content>
        <Content width="500px">
          <ContentImgCentered src="https://i2.wp.com/refactory.id/wp-content/uploads/2020/01/material_bolt.png?fit=28%2C48&ssl=1"/>
          <ContentTitle>
            Wujudkan <i>Software</i> Impian Anda
          </ContentTitle>
          <ContentDesc>
            Kami adalah perusahaan One-Stop IT Solution untuk proyek Anda, membantu di setiap tahap mulai dari menyusun ide, melalui desain dan pengembangan aplikasi seluler, situs web dan aplikasi desktop, hingga peluncuran produk.
          </ContentDesc>
        </Content>
      </Section>
      <InsightSection>
        <InsightContent>
          <InsightBg src="https://refactory.id/wp-content/uploads/2020/01/ripple-bg.png"/>
          <InsightSubTitle>
            INSIGHT TERBARU
          </InsightSubTitle>
          <InsightTitle>
            Knowledge Sharing
          </InsightTitle>
        </InsightContent>
        <InsightBtn>
          <InsightLink>
            <span>Lihat Semua</span>
            <FaArrowRight/>
          </InsightLink>
        </InsightBtn>
      </InsightSection>
      <Section title="AS SEEN ON" size="" bgColor="#F4F5F6">
        {
          insight.map(datum =>(
            <a key={datum.id} href={datum.link_url}>
              <Img src={datum.photo_url}/>
            </a>
          ))
        }
      </Section>
      <Footer/>
    </>
  )
}

export default Home
