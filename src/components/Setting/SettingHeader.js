import React from 'react'
import './SettingHeader.css'

export default function SettingHeader(props) {
  return (
    <div className='setting-container'>
         <p>Projects / {props.projectName} / Project Settings </p>
         <h4 className='setting-subheading'>Details</h4>
    </div>
  )
}

