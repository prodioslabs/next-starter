import { BellIcon } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { EmptyMessage } from '@/components/ui/empty-message'

export default function NotificationsMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center rounded-md p-2 text-muted-foreground focus-visible:outline-none focus-visible:ring-1">
          <BellIcon className="h-4 w-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <EmptyMessage icon={<BellIcon />} title="No notifications found" description="Please comeback later" />
      </PopoverContent>
    </Popover>
  )
}
