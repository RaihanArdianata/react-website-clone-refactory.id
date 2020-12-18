import React from 'react'
import CardCourse from './index'

export default {
  title: '/Home/CardCourse',
  components: CardCourse,
  // decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>],
  argTypes: {
    // transparent: { control: {type: 'text'} },
  },
}

const Template = (args) => <CardCourse {...args} />;

export const CardCourseDefault = Template.bind({});

CardCourseDefault.args = {
  courseImage : "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/CTT7UaWkTcmvZwIk1tp7",
  courseTitle: "GIT",
  courseDesc: "Mempelajari bahasa pemrograman HTML & CSS sebagai dasar dalam pengembangan web",
  userImg: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/KI6yume5Q6Cav3jEJBGi",
  userName:"Harlita Keni Damonti"
};