import React from 'react'

export default function Project() {
    let ListOfProjects=["Project1","Project2","Project3"]
  return (
    <div className='projectOuterWrapper'>
        <div>
           <label style={{fontWeight:"bold",color:"gray"}}>RECENT</label><hr/>
           {ListOfProjects.map((curProject)=>{
             return (<div>
                {curProject}
             </div>)
           })
        }
        </div><hr/>
        <div>
            <button className='btn'>View all Projects</button>
            <button className='btn'>Creat Project</button>
        </div>
    </div>
  )
}
