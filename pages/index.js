import React from 'react'
import MeetupList from '@/components/meetups/MeetupList'
 
const dummy_meetup=[
    {
        id:'m1',
        title:'1', 
        image:'https://source.unsplash.com/800x800/?game',
        address:'some address',
        description:'random bullshit',
    },
    {
        id:'m2',
        title:'2', 
        image:'https://source.unsplash.com/800x800/?car',
        address:'some address',
        description:'random bullshit',
    },
]

const index = () => {
  return (   
 
            <MeetupList meetups={dummy_meetup}/>
   )
}

export default index