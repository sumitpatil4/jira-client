import React from 'react'
import {Link} from 'react-router-dom'
import CreateProject from './CreateProject'
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
            <button className='btn'>View all Projects</button>
            <hr/>
            <CreateProject/>
        </div>
    </div>
  )
}
