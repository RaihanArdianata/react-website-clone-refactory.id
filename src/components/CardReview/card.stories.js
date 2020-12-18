import React from 'react'
import CardReview from './index'

export default {
  title: '/Home/CardReview',
  components: CardReview,
  // decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>],
  argTypes: {
    transparent: { control: {type: 'text'} },
  },
}

const Template = (args) => <CardReview {...args} />;

export const CardReviewDefault = Template.bind({});

CardReviewDefault.args = {
  nameName: "MUHAMMAD FIRHAT",
  from: "Student",
  image: "https://i1.wp.com/refactory.id/wp-content/uploads/2020/08/Firhat.jpg?w=1000&ssl=1",
  postTitle: "Recomended Bootcamp",
  postDescription: "Refactory adalah game changer untuk belajar pemrograman. Kalau Anda yakin pada karir pemrograman, Refactory harus menjadi tempat pertama yang Anda tuju. Anda akan dilatih oleh Mentor yang Ahli di bidangnya. Refactory tidak hanya memberikan kurikulum terbaru, tetapi juga akan meberikan pengalaman studi kasus dan lingkungan pemrograman secara real menyesuaikan dunia bisnis saat ini. Refactory memang luar biasa!",
  star: 4,
  maxStar: 5
};