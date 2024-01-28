import { AlertOctagonIcon } from 'lucide-react'
import { cloneElement } from 'react'
import { cn } from '@/lib/utils'

type ErrorMessageProps = {
  title?: string
  description?: string
  icon?: React.ReactElement<{ className?: string; strokeWidth?: number }>
  className?: string
  style?: React.CSSProperties
}

export function ErrorMessage({
  title = 'Error',
  description = 'Something went wrong. Please try again',
  icon = <AlertOctagonIcon />,
  className,
  style,
}: ErrorMessageProps) {
  return (
    <div className={cn('p-4 text-sm', className)} style={style}>
      {cloneElement(icon, {
        className: cn('mx-auto mb-2 h-8 w-8 text-muted-foreground', icon.props.className),
        strokeWidth: 1.25,
      })}
      <div className="text-center font-medium">{title}</div>
      <div className="text-center text-muted-foreground">{description}</div>
    </div>
  )
}
