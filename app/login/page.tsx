import React from 'react'
import { LogInButton } from '../components/LogInButton'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 w-full min-h-screen'>
      <h1 className='text-8xl font-bold text-primary-accent'>Shoppify</h1>
      <h3 className='text-xl font-semibold'>
        You can start creating lists immediately, just need to sign in
      </h3>
      <LogInButton />
    </div>
  )
}

export default page
