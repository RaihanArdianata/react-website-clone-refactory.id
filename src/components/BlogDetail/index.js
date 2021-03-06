import React from 'react'
import {
  BlogContainer,
  BlogCreatorWraper,
  BlogImage,
  BlogPost,
  BlogSubTitle,
  BlogTitle,
  CreatorName,
  DateCreate
} from './blog.detail.elements'

function BlogDetail() {
  return (
    <BlogContainer>
      <BlogImage src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/02/063-Refactory-HDYBAP017.jpg?w=1201&ssl=1"/>
      <BlogSubTitle>GROWTH & CULTURE</BlogSubTitle>
      <BlogTitle>How Did You Become A Programmer?</BlogTitle>
      <BlogCreatorWraper>
        <CreatorName>BY ISNA</CreatorName>
        <DateCreate>AUGUST 4, 2020</DateCreate>
      </BlogCreatorWraper>
      <BlogPost>
        <p>
        Setiap kali mendengar kata “pemrograman”, kira-kira hal apa yang langsung terlintas di pikiran kalian guys? Ribet, susah dipelajari, ngoding, IT, lalu apa lagi? Mungkin beberapa kata tersebut yang paling mudah terlintas di pikiran kita ketika mendengar kata “pemrograman”. Tidak sedikit pula yang mempunyai pemikiran bahwa apabila seseorang ingin belajar pemrograman atau bisa ngoding harus kuliah di jurusan Teknologi Informatika. Hmm.. ternyata _statement_ seperti ini belum tentu selalu benar. Mengapa demikian? Karena seperti halnya kita ingin mahir dalam bermain tenis meja misalnya, kita tidak dituntut untuk mempunyai latar belakang pendidikan olahraga agar bisa bermain tenis meja. Yang perlu kita siapkan adalah meja tenis, bet, dan  bola pingpong. Barulah setelah itu kita bisa mulai latihan bermain tenis meja.
        </p>

        <p>
        Ada banyak cara berbeda untuk menjadi seorang _programmer_. Ada yang mulai mempelajari pemrograman di dunia perkuliahan, ada yang belajar pemrograman secara otodidak, dan ada juga yang mulai mempelajari pemrograman karena ketagihan main game online.
        </p>

        <p>
        Setiap orang mempunyai “cara” dan motivasi sendiri untuk memulai mempelajari pemrograman. Beberapa programmer Refactory juga ada loh yang mempunyai latar belakang pendidikan non-IT. Kita simak yuk alasan mereka memulai belajar pemrograman!
        </p>
        <p>
        **Muhamad Firhat (Front End Developer) – Belajar Pemrograman Secara Otodidak**
        </p>
        “Saya mulai menyukai dan tertarik untuk belajar pemrograman sejak berada di bangku SMA. Saat itu belajar pemrograman saya jadikan sebagai hobi dan saya belajar secara otodidak. Namun di awal karir saya, saya tidak langsung bekerja sebagai _programmer_, melainkan akuntan. Saya berfikir bahwa bekerja akan terasa lebih menyenangkan ketika kita sekaligus bisa menyalurkan hobi kita. Dan benar saja, saat ini saya sangat menikmati pekerjaan saya sebagai _programmer_”.
        <p>
        **Akbar Rachman (Mobile Developer) – Belajar Pemrograman Secara Otodidak**
        </p>
        <p>
        “Berbekal niat dan semangat untuk belajar pemrograman, saya beranikan diri untuk ikut belajar ngoding. Saya mengawalinya dengan menekuni mobile development dan sekarang saya mulai mempelajari DevOps. Hal terberat yang saya hadapi selama belajar pemrograman adalah tidak adanya latar belakang pendidikan IT pada diri saya. Namun dengan menerapkan metode belajar learning by doing secara intensif, saya mulai bisa memahami setiap proses ketika belajar pemrograman”.
        </p>
        <p>
        Nah, setelah menyimak alasan mereka, kalian mulai termotivasi untuk belajar pemrograman belum nih? Intinya adalah apabila kita ingin mempelajari hal baru itu butuh proses. Jadi buat kalian yang ingin memulai belajar pemrograman, kalian juga harus siap untuk menikmati setiap proses yang akan kalian jalani selama proses belajar. Dan buat kalian yang tidak mempunyai latar belakang pendidikan IT, jangan cemas! Ada istilah _learning by doing_ (belajar dan melakukannya). Dalam realitanya, langkah ini sering menunjukkan hasil yang lebih baik daripada belajar menggunakan _text book_. Mengapa demikian? Karena seringkali buku sulit untuk dicerna. Apabila kita belajar sambil mempraktekkan langsung apa yang kita pelajari, kita akan lebih mudah mengingatnya. Kalian juga bisa memulai belajar basic programming gratis secara online lewat program [Bootcamp Prep Refactory](http://enroll.refactory.id/program/bootcamp-prep).
        </p>
      </BlogPost>
    </BlogContainer>
  )
}

export default BlogDetail
