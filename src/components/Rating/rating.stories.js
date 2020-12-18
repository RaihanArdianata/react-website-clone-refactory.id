import React from 'react'
import Rating from './index'

export default {
  title:'/Home/Rating',
  components: Rating
}

const Template = (args) => <Rating {...args} />;

export const RatingDefault = Template.bind({});

RatingDefault.args = {
  maxValue: 5,
  initValue: 4
};