import React from 'react'
import CheckBox from './CheckBox'
import SignInBtn from './SignInBtn'

function Form() {
  return (
    <div className='max-w-[700px] w-full flex flex-col items-center'>
      <form className='w-full flex flex-col gap-6'>

        {/* email */}
        <div className='flex flex-col w-full'>
          <label className='mb-1'>Email:</label>
          <input className='inpts' type="email" placeholder='Enter email' />
        </div>

        {/* password */}
        <div className='flex flex-col w-full'>
          <label className='mb-1'>Password:</label>
          <input className='inpts' type="password" placeholder='Enter password' />

        <div className='py-2'>
          <CheckBox />
        </div>
          
        </div>

        
        <SignInBtn></SignInBtn>
      </form>
    </div>
  )
}


export default Form