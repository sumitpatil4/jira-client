import React from 'react'
import '../Navbar/index.css'
export default function CreateIssueDropdown({name,dropdownoptions}) {
   
    return (
    <>
    <div className='dropdown-options'>
    <label className="label" for={name}>{name}</label><br/>
<select className='dropdown-select'>
    {
       dropdownoptions && dropdownoptions.map((element)=>{
            return <option value={element}>{element}</option>
        })
    }
 
</select>
    </div>
   
    </>
    
  )
}
