import React from 'react'
import Search from './index'

export default {
  title: '/Home/Search',
  components: Search,
  decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>],
  argTypes: {
    // transparent: { control: {type: 'text'} },
  },
}

const Template = (args) => <Search {...args} />;

export const SearchDefault = Template.bind({});

SearchDefault.args = {
  placeholder: "Find a course"
};