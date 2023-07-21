import MeetupDetails from '@/components/meetups/MeetupDetails'
import React, { Fragment } from 'react'

const index = () => {
  return (
    <MeetupDetails image="https://source.unsplash.com/600x300/?game" alt="aaaaa" title="first meeting" address="Lorem, ipsum dolor." description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, quidem quisquam! Laborum quia adipisci nam rem fugiat aperiam eos maxime reiciendis odio, enim expedita quos temporibus error dolor earum perferendis.">

    </MeetupDetails>

  )
}
export async function getStaticPaths() {
  return {
    fallback:false,
    paths: [
      {
        params: {
          meetupid: 'm1',
        },
      },
      {
        params: {
          meetupid: 'm2',
        }
      }
    ]
  }
}
export async function getStaticProps(context) {
  const meetupid = context.params.meetupid;
  console.log(meetupid)
  return {
   props:{
    meetupid:{
      id:'m1'
    }
   }
  }
}
export default index