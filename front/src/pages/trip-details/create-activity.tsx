import { Calendar, Clock, Tag, X } from "lucide-react";
import { FormEvent } from "react";

interface CreateActivityModalProps {
  toggleCreateActivityModal: () => void;
  createActivity: (event: FormEvent<HTMLFormElement>) => void;
}

export function CreateActivityModal({ toggleCreateActivityModal, createActivity }: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-zinc-900 w-[540px] rounded-xl py-5 px-6 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg tracking-tight">Cadastrar Atividade</h2>
            <button
              className=""
              onClick={toggleCreateActivityModal}
            >
              <X className='size-5 text-zinc-400' />
            </button>
          </div>
          <p className="text-zinc-400 text-sm text-left">Todos convidados podem visualizar as atividades.</p>
        </div>

        <form
          onSubmit={createActivity}
          className="flex flex-col items-center gap-2">
          <div className="flex w-full items-center gap-2 bg-zinc-950 border-zinc-800 px-4 py-4 rounded-lg">
            <Tag className='text-zinc-400 size-5' />
            <input
              type="text"
              name='name'
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex justify-between gap-2 w-full">
            <div className="flex w-full items-center gap-2 bg-zinc-950 border-zinc-800 px-4 py-4 rounded-lg">
              <Calendar className='text-zinc-400 size-5' />
              <input
                type="date"
                name='date'
                placeholder="20 de agosto"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none [color-scheme:dark]"
              />
            </div>
            <div className="flex items-center gap-2 bg-zinc-950 border-zinc-800 px-4 py-4 rounded-lg">
              <Clock className='text-zinc-400 size-5 ' />
              <input
                type="time"
                name='time'
                placeholder="Horário"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none [color-scheme:dark]"
              />
            </div>
          </div>

          <button
            className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2.5 font-medium gap-2 hover:bg-lime-400 w-full"
            type='submit'
          >
            Salvar atividade
          </button>
        </form>
      </div>
    </div>
  )
}
