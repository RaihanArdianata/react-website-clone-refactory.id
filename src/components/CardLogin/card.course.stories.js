import React from 'react'
import CardLogin from './index'

export default {
  title: '/Home/CardLogin',
  components: CardLogin,
  decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>],
  argTypes: {
    // transparent: { control: {type: 'text'} },
  },
}

const Template = (args) => <CardLogin {...args} />;

export const CardLoginDefault = Template.bind({});

CardLoginDefault.args = {

};