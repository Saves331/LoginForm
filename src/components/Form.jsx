import React, { useState } from 'react'
import CheckBox from './CheckBox'
import SignInBtn from './SignInBtn'




function Form() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([{email: "", password: ""}])
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(prev => !prev);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    setUsers(users =>{const updated = [...users, {email: email, password: password}]
            console.log(updated)
            return updated});   
    setEmail('');
    setPassword('');
   
  }

 


  return (
    <div className='max-w-[700px] w-full flex flex-col items-center'>
      <form className='w-full flex flex-col gap-6' onSubmit={handleSubmit}>

        {/* email */}
        <div className='flex flex-col w-full'>
          <label className='mb-1'>Email:</label>
          <input className='inpts' type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>

        {/* password */}
        <div className='flex flex-col w-full'>
          <label className='mb-1'>Password:</label>
          <input className='inpts' type={isChecked ? "text" : "password"} placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} required/>

        <div className='py-2'>
          <CheckBox handleCheckboxChange = {handleCheckboxChange}/>
        </div>
          
        </div>

        
        <SignInBtn ></SignInBtn>
      </form>

      <div>
       
        
      </div>
      
    </div>
  )
}


export default Form