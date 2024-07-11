import { Mail, User, X } from "lucide-react";

interface ConfirmTripModalProps {
  toggleConfirmTripModalOpen: () => void;
  createTrip: () => void;
}

export function ConfirmTripModal( {createTrip, toggleConfirmTripModalOpen} : ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
    <div className="bg-zinc-900 w-[540px] rounded-xl py-5 px-6 shadow-shape space-y-5">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg tracking-tight">Confirmar criação da viagem</h2>
          <button 
            className=""
            onClick={toggleConfirmTripModalOpen}
          >
            <X className='size-5 text-zinc-400' />
          </button>
        </div>
        <p className="text-zinc-400 text-sm text-left">Para concluir a criação da viagem para <span className="text-zinc-100 font-semibold">Florianópolis</span> , Brasil nas datas de <span className="text-zinc-100 font-semibold">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>
      </div>

      <form onSubmit={createTrip} className="flex flex-col items-center gap-3">
        <div className="flex w-full items-center gap-2 bg-zinc-950 border-zinc-800 px-4 py-4 rounded-lg">
          <User className='text-zinc-400 size-5' />
          <input 
            type="text"
            name='fullname'
            placeholder="Seu nome completo" 
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
        </div>

        <div className="flex w-full items-center gap-2 bg-zinc-950 border-zinc-800 px-4 py-4 rounded-lg">
          <Mail className='text-zinc-400 size-5 ' />
          <input 
            type="email"
            name='email'
            placeholder="Seu e-mail pessoal" 
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
        </div>
        <button 
          className="bg-lime-300 text-lime-950 rounded-lg px-5 font-medium gap-2 hover:bg-lime-400 w-full h-14"
          type='submit'
        >
          Confirmar criação da viagem
        </button>  
      </form>
    </div>
  </div>
  )
}