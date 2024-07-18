import { Link2 } from "lucide-react";

export function ImportantLink({ title, url }: { title: string, url: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1.5 max-w-60 overflow-hidden">
        <span className="block font-medium text-base text-zinc-100">{title}</span>
        <a href="" className="truncate text-xs text-zinc-400">{url}</a>
      </div>
      <Link2 className="size-5 text-zinc-400 shrink-0" />
    </div>
  )
}