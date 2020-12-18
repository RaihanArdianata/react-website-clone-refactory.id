import React from 'react'
import CourseList from './index'

export default {
  title: '/Home/CourseList',
  components: CourseList,
  decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>],
  argTypes: {
    // transparent: { control: {type: 'text'} },
  },
}

const Template = (args) => <CourseList {...args} />;

export const CourseListDefault = Template.bind({});

CourseListDefault.args = {
  data:
    {
      id: 1,
      section: 'HTML Dasar',
      data: [
        {
          id: 1,
          title: 'Pengenalan HTML',
          url: 'https://course.refactory.id/p/html-css-introduction',
          'time-in': '5:45'
        },
        {
          id: 1,
          title: 'Pengenalan HTML',
          url: 'https://course.refactory.id/p/html-css-introduction',
          'time-in': '5:45'
        },
        {
          id: 1,
          title: 'Pengenalan HTML',
          url: 'https://course.refactory.id/p/html-css-introduction',
          'time-in': '5:45'
        }
      ]
    }
};