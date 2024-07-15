import { CircleCheck, CircleDashed } from "lucide-react"

interface GuestProps {
  name: string
  email: string
  isConfirmed: boolean
}

export function Guest({ name, email, isConfirmed }: GuestProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1.5 max-w-60 overflow-hidden">
        <span className="block font-medium text-base text-zinc-100">{name}</span>
        <span className="truncate text-xs text-zinc-400">{email}</span>
      </div>
      {isConfirmed ?
        <CircleCheck className="size-5 text-lime-300 shrink-0" />
        :
        <CircleDashed className="size-5 text-zinc-400 shrink-0" />
      }
    </div>
  )
}