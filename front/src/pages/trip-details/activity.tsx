import { CircleCheck } from "lucide-react";

interface ActivityProps {
  date: Date;
  name: string;
  time: string; // Example: '14:00' for 2 PM
}

export function Activity({ date, name, time }: ActivityProps) {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-baseline gap-2">
        <span className="text-xl text-zinc-300 font-semibold">
          Dia {date.getDay()}
        </span>
        <span className="text-xs text-zinc-500">{date.toLocaleDateString('pt-BR', { weekday: 'long' })}</span>
      </div>
      <p className="text-sm text-zinc-500">
        Nenhuma atividade cadastrada nessa data.
      </p>
      <div className="bg-zinc-900 rounded-xl py-2 px-4 flex justify-between shadow-shape">
        <div className="flex gap-3 items-center">
          <CircleCheck className="text-lime-300 size-5" />
          <span className="text-zinc-100 text-md">{name}</span>
        </div>
        <div className="text-sm text-zinc-400">{time}h</div>
      </div>
    </div>
  )
}