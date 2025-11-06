import React from 'react'

function CheckBox( {handleCheckboxChange}) {
  return (
    <div className='flex items-center gap-1'>
        <input type="checkbox" id="showPassword" onChange={handleCheckboxChange}/> <label htmlFor="showPassword">Show Password</label>
    </div>
  )
}

export default CheckBox