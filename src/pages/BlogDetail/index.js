import React from 'react'
import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import Section from 'src/components/Section'
import Blog from 'src/components/BlogDetail'
import {
  CategoryContainer,
  CategoryWrapper,
  CategoryItem,
  CategoryLink,
  SectionGrid,
  Column1,
  Column2
} from './blog.elements'

function BlogDetail() {
  return (
    <>
      <Navbar/>
      <CategoryContainer>
        <CategoryItem>
          <CategoryLink>Blog</CategoryLink>
          <CategoryLink>Engineering</CategoryLink>
          <CategoryLink>Profile</CategoryLink>
        </CategoryItem>
      </CategoryContainer>
      <Section>
        <SectionGrid>
          <Column1>
            <Blog></Blog>
          </Column1>
          <Column2>sdsdsdsd</Column2>
        </SectionGrid>
      </Section>
      <Footer/>
    </>
  )
}

export default BlogDetail

