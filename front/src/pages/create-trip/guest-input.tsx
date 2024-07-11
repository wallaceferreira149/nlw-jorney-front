import { ArrowRight, UserRoundPlus } from "lucide-react";

interface GuestInputProps {
  togleGuestModal: () => void;
  emailsToInvite: string[];
  toggleConfirmTripModalOpen: () => void;

}

export function GuestInput({ emailsToInvite, toggleConfirmTripModalOpen, togleGuestModal }: GuestInputProps) {
  return (
    <div className="px-4 h-16 bg-zinc-900 rounded-xl flex items-center gap-3 shadow-shape">
      <div className="flex items-center gap-2 flex-1">
        <UserRoundPlus className='size-5 text-zinc-400' />
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
        <ArrowRight className='size-5 text-lime-950' />
      </button>
    </div>
  )
}