import React from 'react'
import Section from './index'
import {
  Content,
  ContentImg,
  ContentTitle,
  ContentDesc
} from 'src/components/Section/section.elements'
import {
  TextMedium
} from 'src/components/Typography/typography.elements'
import {Button, ImgInherit} from 'src/components/shared.components'

export default {
  title: '/Home/Section',
  components: Section,
  // decorators: [(Story) => <div style={{ margin: '3em' }}><Story /></div>],
  argTypes: {
    transparent: { control: { type: 'text' } },
  },
}

const Template = (args) => (
  <Section {...args}>
    <Content width="300px">
      <TextMedium>
        Bagaimana Refactory Course membantu <span style={{ color: "#e48800", fontWeight: "bold" }}>meningkatkan skill</span> anda.
          </TextMedium>
      <Button transparent={false} style={{ marginTop: 50 }}>
        Pelajari Lebih
          </Button>
    </Content>
    <Content width="500px">
      <ImgInherit src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame.png?w=839&ssl=1" />
    </Content>
  </Section>);

export const SectionDefault = Template.bind({});

SectionDefault.args = {

};