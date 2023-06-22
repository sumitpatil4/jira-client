import React from 'react';
import './ViewAllProject.css';

const ViewAllProject = () => {
  return (
    
    <div className='ViewAllProjectPage'>
        
        <div className='ViewAllProjectMainHeading'>
                <h3>Projects</h3>
                <button className='btn createProjectButton'>Create Project</button>
            </div>
            <br></br>
            <br></br>
            <div className='tableContainer'>
<table className='tableOfProjects'>

<tr className='line'>
<th>&#9733;</th>
<th>Name</th>
<th>Key</th>
<th>Type</th>
<th>Lead</th>
<th>Actions</th>
</tr>

<br></br>
<tr>
<td>&#9734;</td>
<td>DemoOne</td>
<td>DEM</td>
<td>Team-managed software</td>
<td>Dhruv Bansal</td>
<button className="fa">&#xf141;</button>
</tr>

<tr>
<td>&#9734;</td>
<td>SampleProjectCompanyType</td>
<td>SM</td>
<td>Company-managed software</td>
<td>Yash Ambekar</td>
<button className="fa">&#xf141;</button>
</tr>

<tr>
<td>&#9734;</td>
<td>SampleProjectTeam</td>
<td>SMPLPRJCT</td>
<td>Team-managed software</td>
<td>Darshita Gupta</td>
<button className="fa">&#xf141;</button>
</tr>

<tr>
<td>&#9734;</td>
<td>SampleProjectTeamType</td>
<td>SAM</td>
<td>Team-managed software</td>
<td>Darshita Gupta</td>
<button className="fa">&#xf141;</button>
</tr>

<tr>
<td>&#9734;</td>
<td>Yash Ambekar</td>
<td>YA</td>
<td>Team-managed software</td>
<td>Darshita Gupta</td>
<button className="fa">&#xf141;</button>
</tr>

</table>
            </div>
    </div>
  )
}

export default ViewAllProject
