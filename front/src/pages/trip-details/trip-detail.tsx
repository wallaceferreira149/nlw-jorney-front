import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function TripDetail() {
  return (
    <div className="px-4 h-16 bg-zinc-900 rounded-xl flex items-center gap-3 shadow-shape justify-between w-full">
      <div className="flex items-center gap-2">
        <div
          className="flex items-center gap-2 text-lg text-zinc-100 outline-none flex-1"
        >
          <MapPin className='size-5 text-zinc-400' />
          <span className="">Florianópolis, Brasil</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex gap-2 items-center">
          <Calendar className='size-5 text-zinc-400' />
          <span
            className="bg-transparent text-zinc-100"
          >
            17 a 23 de Agosto
          </span>
        </div>

        <div className="w-px h-6 bg-zinc-800"></div>

        <Button
          variant="secondary"
          className="bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium text-base flex gap-2 items-center hover:bg-zinc-700"
        >
          Alterar local e data
          <Settings2 className='size-5 text-zinc-200' />
        </Button>
      </div>
    </div>
  )
}