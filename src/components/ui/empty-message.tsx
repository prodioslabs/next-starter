import { PackageOpenIcon } from 'lucide-react'
import { cloneElement } from 'react'
import { cn } from '@/lib/utils'

type EmptyMessageProps = {
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactElement<{ className?: string; strokeWidth?: number }>
  className?: string
  style?: React.CSSProperties
}

export function EmptyMessage({
  title = 'No items found',
  description = 'Please upload some item',
  icon = <PackageOpenIcon />,
  className,
  style,
}: EmptyMessageProps) {
  return (
    <div className={cn('p-4 text-sm', className)} style={style}>
      {cloneElement(icon, {
        className: cn('mx-auto mb-2 h-8 w-8 text-muted-foreground', icon.props.className),
        strokeWidth: 1.25,
      })}
      <div className="text-center text-sm font-medium">{title}</div>
      <div className="text-center text-xs text-muted-foreground">{description}</div>
    </div>
  )
}
