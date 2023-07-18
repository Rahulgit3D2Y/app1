import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import React from 'react'

const index = () => {
    function addmeetuphandler(enteredMeetupData){
        console.log(enteredMeetupData)
    }

  return (
    <NewMeetupForm onAddMeetup={addmeetuphandler}/>
   )
}

export default index