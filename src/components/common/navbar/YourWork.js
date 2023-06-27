import React, { useState } from 'react'
import {Link} from 'react-router-dom';
export default function () {
   
    let showButtons=["Assign To Me","Recent","Boards"]
    const [curOption,setCurOPtion]=useState(-1)
    const handleButton=(e,curButton)=>{
               setCurOPtion(curButton);        
    }
  return (
    <div className='yourWorkWrapper'>
        <div className='yourWork-btn'> 
          {
            showButtons.map((curButton,index)=>{
                return <button className={`btn-${index+1}`} onClick={(e)=>{handleButton(e,index+1)}} >{curButton}</button>
            })
          }
        </div><hr/>
        {
            curOption==1?(
                <div className='btn-div'>this is first div 
                </div>
            ):curOption==2?
            (<div className='btn-div'>this is second div</div>):
            (<div className='btn-div'>this is third div </div>)
        }
        <div className="your-work-link">
        <hr/>
        <Link to='/landingpage' className="landingpage-redirect">
        Go To Your Work Page
        </Link>
        <hr/>
        </div>
    </div>
  )
}
