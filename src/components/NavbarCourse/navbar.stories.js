import React from 'react'
import Navbar from './index'

export default {
  title: '/Home/NavbarCourse',
  components: Navbar,
  decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>],
  argTypes: {
    transparent: { control: {type: 'text'} },
  },
}

const Template = (args) => <Navbar {...args} />;

export const NavbarDefault = Template.bind({});

NavbarDefault.args = {
  transparent: false,
};