import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from 'src/components/Navbar'
import Hero from 'src/components/Hero'
import Footer from 'src/components/Footer'
import Section from 'src/components/Section'
import CardReview from 'src/components/CardReview'
import {
  Content,
} from 'src/components/Section/section.elements'
import {
  ReviewWrapper,
  SectionStartLearning,
  ImgStep
} from './course.elements'
import {
  TextLarge,
  TextMedium, TextSmall
} from 'src/components/Typography/typography.elements'
import {Button, ImgInherit} from 'src/components/shared.components'

function Course() {
  const [review, setReview] = useState([])
  const heroConfig = {
    buttonText1: "Masuk & Memulai Belajar",
    buttonText2: "Daftar Sekarang",
    heroTitle: "Tingkatkan <span class='orangeText'>skill pemrograman</span> kapan pun, dimana pun.",
    heroDesc: "Refactory adalah perusahaan edukasi dan teknologi yang menyediakan layanan lengkap berupa <i>course</i> maupun <em>custom training </em>yang materinya dapat disesuaikan dengan kebutuhan teknologi dan bisnis perusahaan Anda.",
    heroDisplay: "flex",
    heroBg: "https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg",
    BottomHeroComp: false,
  }

  useEffect(()=>{
    axios.get('https://raw.githubusercontent.com/cahyo-refactory/RSP-DataSet-SkilTest-FE/main/alumni-report.json')
    .then(res => {
      setReview(res.data.data)
    })
  },[])

  return (
    <>
      <Navbar transparent={true}/>
      <Hero {...heroConfig} />
      <Section >
        <Content width="300px">
          <TextMedium>
            Bagaimana Refactory Course membantu <span style={{color: "#e48800", fontWeight: "bold"}}>meningkatkan skill</span> anda.
          </TextMedium>
          <Button transparent={false} style={{marginTop: 50}}>
            Pelajari Lebih
          </Button>
        </Content>
        <Content width="500px">
          <ImgInherit src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame.png?w=839&ssl=1"/>
        </Content>
      </Section>
      <Section bgColor="#F4F5F6">
        <Content style={{width: 400}}>
          <TextMedium>Kursus pemrograman untuk semua orang tanpa terkecuali</TextMedium>
          <TextSmall>
            <p>
              Refactory Course dirancang untuk memudahkan setiap orang mampu meningkatkan keahlian dalam software engineering tanpa dibatasi oleh kesulitan akses, kesulitan waktu, batasan keahlian, ataupun usia.
            </p>
            <p>
              Dengan pembelajaran berdasarkan pengalaman nyata pengerjaan project, bagi pelajar/mahasiswa, Refactory Course akan melengkapi keahlian yang sudah diperoleh dalam studi sehingga dapat membuka kesempatan tak terbatas pada karir software engineering.
            </p>
            <p>
              Bagi karyawan atau tenaga profesional, Refactory Course dapat meningkatkan keahlian software engineer dalam menunjang menyelesaikan tugas pekerjaannya tanpa khawatir dengan keterbatasan waktu.
            </p>
            <p>
              Masyarakat secara luas juga dapat memanfaatkan pembelajaran untuk meningkatkan keahlian sehingga mampu berkarya dan mendapat keuntungan karir tanpa khawatir mahalnya belajar.
            </p>
          </TextSmall>
          <Button style={{marginTop: 50, marginBottom: 50}}>
            Daftar Sekarang
          </Button>
        </Content>
        <Content style={{width: 400}}>
          <ImgStep width="500px" src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/IMG_1152-1.jpg?fit=690%2C800&ssl=1"/>
        </Content>
      </Section>
      <SectionStartLearning style={{background:"#F4F5F6", padding: "20px 0", height: "auto"}}>
        <Content style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextSmall style={{fontSize: 16, lineHeight: 5}}>MEET OUR GRADUATES</TextSmall>
          <TextLarge style={{color: "#000",textAlign: "center", width: 250, fontWeight: 'bold', lineHeight: 0}}>Review</TextLarge>
          <TextMedium style={{color: "#000", marginTop:10, fontWeight: 400, textAlign: "center", lineHeight: 2}}>Read what our alumni said on <b>Course Report</b></TextMedium>
        </Content>
      </SectionStartLearning>
      <Section>
        <ReviewWrapper>
          {
            review.map(datum =>(
              <CardReview
              key={datum.id}
              from={datum.user.from}
              image={datum.user.photo_url}
              maxStar={5}
              nameName={datum.user.name}
              postDescription={datum.description}
              postTitle={datum.title}
              star={datum.star} />
            ))
          }
        </ReviewWrapper>
      </Section>
      <SectionStartLearning>
        <ReviewWrapper style={{width: 600 }}>
          <TextMedium style={{fontSize: 24, color: "#fff"}}>
            Ready to start Learning?
          </TextMedium>
          <Button>
            Daftar Sekarang
          </Button>
        </ReviewWrapper>
      </SectionStartLearning>
      <Section>
        <Content style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextSmall style={{color: "#E48800", fontSize: 16}}>LANGKAH MUDAH</TextSmall>
          <TextMedium style={{textAlign: "center", width: 250, fontWeight: 'bold'}}>Memulai Belajar di Refactory Course</TextMedium>
          <ImgStep width="85%" src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame-3-1.png?w=1457&ssl=1"/>
          <Button>
            Pelajari lebih
          </Button>
        </Content>
      </Section>
      <Footer/>
    </>
  )
}

export default Course
