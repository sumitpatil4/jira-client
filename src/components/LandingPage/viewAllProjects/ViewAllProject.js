import React from 'react';
import './ViewAllProject.css';
import { useEffect, useState } from "react"
const ViewAllProject = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      setLoading(true)
      fetch("http://localhost:4545/api/project/all-project")
        .then(response => response.json())
        .then(json => setProjects(json))
        .finally(() => {
          setLoading(false)
        })
    }, [])
  
  return (
    
    <div className='ViewAllProjectPage'>
      
        <div className='ViewAllProjectMainHeading'>
                <h3>Projects</h3>
                <button className='btn createProjectButton'>Create Project</button>
            </div>
            <br></br>
            <br></br>
<div className='tableContainer'> 
{loading ? (
        <div>Loading...</div>
      ) : (
        <>              
<table className='tableOfProjects' border={2}>
<tr className='line'>
<th>Name</th>
<th>Owner</th>
<th>Description</th>
</tr>

{projects.map(user => (
              <tr key={user.id}>
                <td>{user.title}</td>
                <td>{user.owner}</td>
                <td>{user.description}</td>
              </tr>
            ))}

</table>
</>
)}
</div>
</div>
  )
}

export default ViewAllProject