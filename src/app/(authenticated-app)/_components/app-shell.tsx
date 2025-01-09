'use client'

import { useSession } from 'next-auth/react'
import {
  CalendarIcon,
  FilesIcon,
  FolderIcon,
  HomeIcon,
  PieChartIcon,
  SearchIcon,
  UserIcon,
  UsersIcon,
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import NavLink from './nav-link'
import AccountMenu from './account-menu'
import NotificationsMenu from './nofitications-menu'
import { ThemeToggle } from './theme-toggle'

type AppShellProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function AppShell({ children, className, style }: AppShellProps) {
  const session = useSession({
    required: false, // change it true if you don't want to show the app shell to unauthenticated users
  })

  const router = useRouter()

  return (
    <div className={cn('flex h-screen', className)} style={style}>
      <div className="flex w-[280px] flex-col overflow-hidden border-r">
        <div className="flex items-center gap-3 py-4 pl-5 pr-3">
          <div className="h-6 w-6 rounded-full bg-primary" />
          <div>Next Starter</div>
        </div>
        <div className="flex-1 space-y-3 overflow-auto p-3">
          <NavLink href="/" icon={<HomeIcon />} label="Home" />
          <NavLink href="/team" icon={<UsersIcon />} label="Team" />
          <NavLink href="/projects" icon={<FolderIcon />} label="Projects" />
          <NavLink href="/calendar" icon={<CalendarIcon />} label="Calendar" />
          <NavLink href="/documents" icon={<FilesIcon />} label="Documents" />
          <NavLink href="/reports" icon={<PieChartIcon />} label="Reports" />
        </div>
        <div className="py-3 pl-5 pr-3">
          <ThemeToggle />
        </div>
      </div>
      <div className="relative flex-1">
        <div className="sticky top-0 flex items-center gap-3 border-b px-4 py-3">
          <div className="flex-1" />
          <div className="flex w-full max-w-screen-sm items-center gap-2 rounded-md p-2 focus-within:ring-1 focus-within:ring-ring">
            <SearchIcon className="h-5 w-5 text-muted-foreground/50" />
            <input
              placeholder="Search for..."
              className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground/50 focus-visible:outline-none"
            />
          </div>
          <div className="flex-1" />
          {session.status === 'authenticated' ? (
            <>
              <NotificationsMenu />
              <div className="h-6 border-r" />
              <AccountMenu />
            </>
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
        {children}
      </div>
    </div>
  )
}
