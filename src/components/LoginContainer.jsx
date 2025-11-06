import React from 'react'
import Header from './Header'
import Form from './Form'
import PageLinks from './pageLinks'

function LoginContainer() {
  return (
    <div className="bg-white w-full max-w-[600px] rounded p-8 mx-auto my-auto flex flex-col items-center justify-center content-center ">
  <Header />
  <Form />
  <PageLinks />
</div>

  )
}

export default LoginContainer