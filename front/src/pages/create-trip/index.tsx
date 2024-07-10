import { ArrowRight, AtSign, Calendar, Mail, MapPin, Plus, Settings2, User, UserRoundPlus, X } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export function CreateTripPage() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState(['jessica.white44@yahoo.com'])
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const navigate = useNavigate()
  
  function openGuestsInput() {
    setIsGuestInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestInputOpen(false)
  }

  function toggleGuestModalOpen() {
    setIsModalOpen(!isModalOpen)
  }

  function toggleConfirmTripModalOpen() {
    setIsConfirmTripModalOpen(!isConfirmTripModalOpen)
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)
    setEmailsToInvite(newEmailList);
  }

  function addEmailToBoard(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    const email = data.get("email")?.toString()
    if (!email) return
    if (emailsToInvite.includes(email)) return

    setEmailsToInvite([...emailsToInvite, email])


    event.currentTarget.reset()
  }

  function createTrip() {
    navigate("/trips/1")
  }

  return (
    <main className="h-screen flex justify-center items-center text-center ">
      <div className="max-w-3xl w-full px-6 space-y-10">

        <div className="flex flex-col items-center gap-3">
          <img src="/Logo.png" alt="panner" className="" width={180}/>
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>

        </div>

        <div className="space-y-4">
          <div className="px-4 h-16 bg-zinc-900 rounded-xl flex items-center gap-3 shadow-shape">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className='size-5 text-zinc-400'/>
              <input type="text" 
                placeholder="Para onde você vai?" 
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                disabled={isGuestInputOpen}
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className='size-5 text-zinc-400'/>
              <input 
                type="text" 
                placeholder="Quando?" 
                className="bg-transparent text-lg placeholder-zinc-400 outline-none w-36"
                disabled={isGuestInputOpen}
                />
            </div>

            <div className="w-px h-6 bg-zinc-800"></div>

            {isGuestInputOpen ? (
              <button 
              className="bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex gap-2 items-center hover:bg-zinc-700"
              onClick={closeGuestsInput}
            >
              Alterar local e data
              <Settings2 className='size-5 text-zinc-200'/>
            </button>
            ) : (
              <button 
              className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex gap-2 items-center hover:bg-lime-400"
              onClick={openGuestsInput}
            >
              Continuar
              <ArrowRight className='size-5 text-lime-950'/>
            </button>
            )}
          </div>

          {isGuestInputOpen && (
            <div className="px-4 h-16 bg-zinc-900 rounded-xl flex items-center gap-3 shadow-shape">
            <div className="flex items-center gap-2 flex-1">
              <UserRoundPlus className='size-5 text-zinc-400'/>
              <button 
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-left"
                onClick={toggleGuestModalOpen}
              >
                {emailsToInvite.length > 0 ? (
                  <span className=" text-zinc-100">{emailsToInvite.length} pessoa(s) convidada(s)</span>                  
                ) : (
                  <span className=" text-zinc-400">Quem estará na viagem?</span>
                )}
                
              </button>
            </div>

            <div className="w-px h-6 bg-zinc-800"></div>

            <button 
              className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex gap-2 items-center hover:bg-lime-400"
              onClick={toggleConfirmTripModalOpen}
            >
              Confirmar viagem
              <ArrowRight className='size-5 text-lime-950'/>
            </button>
          </div>
          )}

        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br /> com os <a href="" className="text-zinc-300 underline">termos de uso</a> e <a href="" className="text-zinc-300 underline">política de privacidade</a>.
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-lg tracking-tight">Selecionar convidados</h2>
                <button 
                  className=""
                  onClick={toggleGuestModalOpen}
                >
                  <X className='size-5 text-zinc-400' />
                </button>
              </div>
              <p className="text-zinc-400 text-sm text-left">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {emailsToInvite.map(email => (
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
      )}

      {isConfirmTripModalOpen && (
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

          <form onSubmit={addEmailToBoard} className="flex flex-col items-center gap-3">
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
            onClick={createTrip}
            >
              Confirmar criação da viagem
            </button>  
          </form>
        </div>
      </div>
      )}
    </main>
  )
}
