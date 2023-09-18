'use client'

import { FlameIcon, LoaderIcon } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { match } from 'ts-pattern'
import { BaseButton, Button } from '@/components/ui/button'

export default function SignoutPage() {
  const session = useSession()

  return (
    <div className="flex h-screen items-center justify-center">
      {match(session)
        .returnType<React.ReactNode>()
        .with({ status: 'loading' }, () => {
          return (
            <div className="flex items-center justify-center space-x-2 text-sm">
              <LoaderIcon className="h-4 w-4 animate-spin text-muted-foreground" />
              <span>Logging out..</span>
            </div>
          )
        })
        .with({ status: 'unauthenticated' }, () => {
          return (
            <div className="flex flex-col items-center space-y-2">
              <FlameIcon className="h-10 w-10" />
              <div className="text-sm font-medium">Login to Next Starter AppF</div>
              <BaseButton>
                <Link href="/api/auth/signin">Sign In</Link>
              </BaseButton>
            </div>
          )
        })
        .with({ status: 'authenticated' }, () => {
          return (
            <div className="flex flex-col items-center space-y-2">
              <FlameIcon className="h-10 w-10" />
              <div className="text-sm font-medium">Logout to Next Starter App</div>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => {
                    signOut()
                  }}
                >
                  Logout
                </Button>
                <BaseButton variant="secondary">
                  <Link href="/">Go to Home</Link>
                </BaseButton>
              </div>
            </div>
          )
        })
        .exhaustive()}
    </div>
  )
}
