import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";

interface InviteGuestModalProps {
  togleGuestModal: () => void;
  emailsToInvite: string[] | null;
  addEmailToBoard: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvites: (email: string) => void;
}

export function InviteGuestModal({addEmailToBoard, emailsToInvite, removeEmailFromInvites, togleGuestModal} :InviteGuestModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-lg tracking-tight">Selecionar convidados</h2>
                <button 
                  className=""
                  onClick={togleGuestModal}
                >
                  <X className='size-5 text-zinc-400' />
                </button>
              </div>
              <p className="text-zinc-400 text-sm text-left">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {emailsToInvite?.map(email => (
                <div 
                  className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
                  key={email}
                >
                <span className="text-zinc-300">{email}</span>
                <button 
                  className=""
                  onClick={() => removeEmailFromInvites(email)}>
                  <X className='size-4 text-zinc-400'/>
                </button>
              </div>
              ))}
            </div>

            <div className="w-full h-px bg-zinc-800"></div>

            <form onSubmit={addEmailToBoard} className="p-2.5 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
              <AtSign className='text-zinc-400 size-5 ' />
              <input 
                type="email"
                name='email'
                placeholder="Digite o email do convidado" 
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              <button 
              className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex gap-2 items-center hover:bg-lime-400"
              type='submit'
              >
                Convidar
                <Plus className='size-5 text-lime-950'/>
              </button>  
            </form>
          </div>
        </div>
  )
}