import React from 'react'
import InvitePeople from './teams/InvitePeople';
import CreateTeam from './teams/CreateTeam';
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
