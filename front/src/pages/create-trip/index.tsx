import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ConfirmTripModal } from './confirm-trip-modal'
import { Footer } from './footer'
import { GuestInput } from './guest-input'
import { Header } from './header'
import { InviteGuestModal } from './invite-guest-modal'
import { PlannerInput } from './plannerInput'
export function CreateTripPage() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState(['jessica.white44@yahoo.com'])
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const navigate = useNavigate()

  function toggleGuestInput() {
    setIsGuestInputOpen(!isGuestInputOpen)
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

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/trips/1")
  }

  return (
    <main className="h-screen flex justify-center items-center text-center ">
      <div className="max-w-3xl w-full px-6 space-y-10">

        <Header />

        <div className="space-y-4">
          <PlannerInput
            isGuestInputOpen={isGuestInputOpen}
            toggleGuestInput={toggleGuestInput}
          />
          {isGuestInputOpen && (
            <GuestInput
              emailsToInvite={emailsToInvite}
              toggleConfirmTripModalOpen={toggleConfirmTripModalOpen}
              togleGuestModal={togleGuestModal}
            />
          )}
        </div>

        <Footer />
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
