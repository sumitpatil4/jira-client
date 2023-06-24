import React from 'react'
import InvitePeople from './InvitePeople';
import CreateTeam from './CreateTeam';
import {Link} from 'react-router-dom';
export default function Team() {
 
  return (
    <>
    <div className='teamWrapper'>
        <div className='team-header'>
         <InvitePeople/>
         <hr/>
         <CreateTeam/>
         </div>
    </div>
    </>
  )
}
