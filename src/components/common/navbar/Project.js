import React from 'react'
import {Link} from 'react-router-dom'
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
            <Link to='/create-project'>
            <button className='btn' >Create Project</button>
            </Link>
        </div>
    </div>
  )
}
