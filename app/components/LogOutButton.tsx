'use client'

import { LogOutSVG } from './icons'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export const LogOutButton = () => {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <button onClick={handleSignOut}><LogOutSVG /></button>
  )
}
