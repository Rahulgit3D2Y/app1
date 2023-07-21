import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import React from 'react'

const index = () => {
    function addmeetuphandler(enteredMeetupData){
     const response=   fetch('/api/new-meetup.js',{method:'POST',});
         
    }

  return (
    <NewMeetupForm onAddMeetup={addmeetuphandler}/>
   )
}

export default index