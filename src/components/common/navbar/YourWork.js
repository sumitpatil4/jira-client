import React, { useState } from 'react'

export default function () {
   
    let showButtons=["Assign To Me","Recent","Boards"]
    const [curOption,setCurOPtion]=useState(-1)
    const handleButton=(e,curButton)=>{
               setCurOPtion(curButton);        
    }
  return (
    <div className='yourWorkWrapper'>
        <div className='yourWork-btn' style={{fontWeight:600,color:"gray"}}> 
          {
            showButtons.map((curButton,index)=>{
                return <button className={`btn-${index+1}`} onClick={(e)=>{handleButton(e,index+1)}} >{curButton}</button>
            })
          }
        </div><hr/>
        {
            curOption==1?(
                <div className='btn-div'>this is first div sdfsdf 
                </div>
            ):curOption==2?
            (<div className='btn-div'>this is second div</div>):
            (<div className='btn-div'>this is third div </div>)
        }
        <div>
        <hr/>
        <button style={{fontWeight:600,color:"gray"}}>Go To Your Work Page</button>
        </div>
    </div>
  )
}
