import React from 'react'
import Dropdown from './index'

export default {
  title: '/Home/Dropdown',
  components: Dropdown,
  decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>],
  argTypes: {
    // transparent: { control: {type: 'text'} },
  },
}

const Template = (args) => <Dropdown {...args} />;

export const DropdownDefault = Template.bind({});

DropdownDefault.args = {
  placeholder: "Find a course"
};