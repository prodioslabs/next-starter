'use client'

import { useSession } from 'next-auth/react'
import { FlameIcon, LoaderIcon, UserIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import AccountMenu from './account-menu'

const ThemeToggle = dynamic(() => import('./theme-toggle'), {
  ssr: false,
  loading: () => {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-md border">
        <LoaderIcon className="h-4 w-4 animate-spin text-muted-foreground" />
      </div>
    )
  },
})

type AppShellProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function AppShell({ children, className, style }: AppShellProps) {
  const session = useSession()

  const router = useRouter()

  return (
    <div className={cn('flex h-screen flex-col', className)} style={style}>
      <div className="flex items-center space-x-4 border-b px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className="rounded-md border bg-muted p-2">
            <FlameIcon className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-sm text-muted-foreground">Next Starter App</div>
        </div>
        <div className="flex-1" />
        <ThemeToggle />
        {session.status === 'authenticated' ? (
          <AccountMenu />
        ) : session.status === 'unauthenticated' ? (
          <Button
            icon={<UserIcon />}
            onClick={() => {
              router.push('/api/auth/signin')
            }}
          >
            Login
          </Button>
        ) : null}
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}
