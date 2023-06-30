import React from 'react'
import {Link} from 'react-router-dom'
import CreateProject from './CreateProject'
import ViewAllProject from '../../LandingPage/viewAllProjects/ViewAllProject'
export default function Project() {
    let ListOfProjects=["Project1","Project2","Project3"]
  return (
    <div className='projectOuterWrapper'>
        <div>
           <label className='label-style'>RECENT</label><hr/>
           {ListOfProjects.map((curProject)=>{
             return (<div className='div-style'>
                {curProject}
             </div>)
           })
        }
        </div><hr/>
        <div>
            <Link className='btn' to='/view-all'>View all Projects
            </Link>
            <hr/>
        </div>
    </div>
  )
}
