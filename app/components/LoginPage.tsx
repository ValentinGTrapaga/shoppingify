import React from 'react'
import { GitHubLogInButton } from './GitHubLogInButton'
import { GoogleLogInButton } from './GoogleLogInButton'

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full min-h-screen">
      <h1 className="text-8xl font-bold text-primary-accent">Shoppingify</h1>
      <h3 className="text-xl font-semibold">
        Start creating shopping lists immediately so you never miss a thing
        again!
      </h3>
      <div className="flex flex-col gap-4">
        <GitHubLogInButton />
      </div>
    </div>
  )
}
