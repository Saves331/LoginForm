import React from 'react'

function CheckBox() {
  return (
    <div className='flex items-center gap-1'>
        <input type="checkbox" id="showPassword"/> <label htmlFor="showPassword">Show Password</label>
    </div>
  )
}

export default CheckBox