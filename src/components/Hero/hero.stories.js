import React from 'react'
import Hero from './index'

export default {
  title: '/Home/Hero',
  components: Hero,
  // decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>],
  argTypes: {
    transparent: { control: {type: 'text'} },
  },
}

const Template = (args) => <Hero {...args} />;

export const HeroDefault = Template.bind({});

HeroDefault.args = {
  buttonText1: "Temukan Solusi Anda",
  buttonText2: " Temukan Solusi Anda",
  heroTitle: "Empowering <span class='orangeText'>People</span> Through Programming",
  heroDesc: "Refactory adalah perusahaan edukasi dan teknologi yang menyediakan layanan lengkap berupa <i>course</i> maupun <em>custom training </em>yang materinya dapat disesuaikan dengan kebutuhan teknologi dan bisnis perusahaan Anda.",
  heroDisplay: "grid",
  heroBg: "https://refactory.id/wp-content/uploads/2020/01/hero-homepage.jpg",
  BottomHeroComp: () => (<></>),
};