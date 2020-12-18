import React from 'react'
import FooterCourse from './index'

export default {
  title: '/Home/FooterCourse',
  components: FooterCourse,
  // decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>],
  argTypes: {
  },
}

const Template = (args) => (<FooterCourse {...args} />);

export const FooterCourseDefault = Template.bind({});

FooterCourseDefault.args = {

};