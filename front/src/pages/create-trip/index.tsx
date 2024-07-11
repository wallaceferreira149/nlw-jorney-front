import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ConfirmTripModal } from './confirm-trip-modal'
import { InviteGuestModal } from './invite-guest-modal'
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

  function togleGuestModal() {
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
                onClick={togleGuestModal}
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
        <InviteGuestModal 
          addEmailToBoard={addEmailToBoard}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvites={removeEmailFromInvites}
          togleGuestModal={togleGuestModal}
        />
      )}

      {isConfirmTripModalOpen && (
       <ConfirmTripModal createTrip={createTrip} toggleConfirmTripModalOpen={toggleConfirmTripModalOpen} />
      )}
    </main>
  )
}
