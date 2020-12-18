import React from 'react'
import Footer from './index'

export default {
  title: '/Home/Footer',
  components: Footer,
  // decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>],
  argTypes: {
    transparent: { control: {type: 'text'} },
  },
}

const Template = (args) => (<Footer {...args} />);

export const FooterDefault = Template.bind({});

FooterDefault.args = {

};