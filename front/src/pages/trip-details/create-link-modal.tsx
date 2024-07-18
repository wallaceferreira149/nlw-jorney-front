import { Link2, Tag, X } from "lucide-react";
import { FormEvent } from "react";

interface CreateLinkModalProps {
  toggleCreateLinkModal: () => void;
  createImportantLink: (event: FormEvent<HTMLFormElement>) => void;
}

export function CreateLinkModal({ toggleCreateLinkModal, createImportantLink }: CreateLinkModalProps) {

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-zinc-900 w-[540px] rounded-xl py-5 px-6 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg tracking-tight">Cadastrar Link</h2>
            <button
              className=""
              onClick={toggleCreateLinkModal}
            >
              <X className='size-5 text-zinc-400' />
            </button>
          </div>
          <p className="text-zinc-400 text-sm text-left">Todos convidados podem visualizar os links importantes.</p>
        </div>

        <form onSubmit={createImportantLink} className="flex flex-col items-center gap-2">
          <div className="flex w-full items-center gap-2 bg-zinc-950 border-zinc-800 px-4 py-4 rounded-lg">
            <Tag className='text-zinc-400 size-5' />
            <input
              type="text"
              name='title'
              placeholder="Título do link"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex w-full items-center gap-2 bg-zinc-950 border-zinc-800 px-4 py-4 rounded-lg">
            <Link2 className='text-zinc-400 size-5' />
            <input
              type="url"
              name='url'
              placeholder="URL"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <button
            className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2.5 font-medium gap-2 hover:bg-lime-400 w-full"
            type='submit'
          >
            Salvar link
          </button>
        </form>
      </div>
    </div>
  )
}