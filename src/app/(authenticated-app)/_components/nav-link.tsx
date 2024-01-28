'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cloneElement, useMemo } from 'react'
import { cn } from '@/lib/utils'

type NavLinkProps = Omit<React.ComponentProps<typeof Link>, 'children'> & {
  icon: React.ReactElement<{ className?: string }>
  label: string
}

export default function NavLink({ href, icon, label, className, ...rest }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = useMemo(() => {
    const hrefStr = typeof href === 'string' ? href : href.pathname
    return pathname === hrefStr
  }, [href, pathname])

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors',
        isActive ? 'bg-muted/60 text-primary' : 'text-foreground hover:bg-muted/60',
        className,
      )}
      {...rest}
    >
      {cloneElement(icon, {
        className: cn(icon.props.className, 'h-5 w-5', isActive ? 'text-primary' : 'text-muted-foreground'),
      })}
      <span className="flex-1">{label}</span>
    </Link>
  )
}
