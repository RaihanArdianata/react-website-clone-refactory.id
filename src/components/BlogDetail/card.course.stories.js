import React from 'react'
import BlogDetail from './index'

export default {
  title: '/Home/BlogDetail',
  components: BlogDetail,
  // decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>],
  argTypes: {
    // transparent: { control: {type: 'text'} },
  },
}

const Template = (args) => <BlogDetail {...args} />;

export const BlogDetailDefault = Template.bind({});

BlogDetailDefault.args = {

};