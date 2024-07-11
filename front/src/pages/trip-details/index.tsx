import { Calendar, CircleCheck, Link2, MapPin, Plus, Settings2 } from "lucide-react";

export function TripDetails() {
  return (
    <div className="max-w-[1100px] px-6 py-10 flex flex-col justify-center items-center space-y-8">
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

          <button
            className="bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium text-base flex gap-2 items-center hover:bg-zinc-700"
          >
            Alterar local e data
            <Settings2 className='size-5 text-zinc-200' />
          </button>
        </div>
      </div>

      <div className="flex space-x-16 w-full px-4">
        <section className="flex-1 space-y-6">
          <header className="flex items-center w-full justify-between">
            <h1 className="text-3xl font-semibold">Atividades</h1>
            <button
              className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex gap-2 items-center hover:bg-lime-400"
            >
              <Plus className='size-5 text-lime-950' />
              Cadastrar atividade
            </button>
          </header>

          {/* painel */}
          <div className="flex flex-col space-y-8">
            {/* days */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>

            <div className="flex flex-col space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 18
                </span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="bg-zinc-900 rounded-xl py-2 px-4 flex justify-between shadow-shape">
                <div className="flex gap-3 items-center">
                  <CircleCheck className="text-lime-300 size-5" />
                  <span className="text-zinc-100 text-md">Corrida de Kart</span>
                </div>
                <div className="text-sm text-zinc-400">14:00h</div>
              </div>
            </div>
          </div>
        </section>

        <aside className="flex flex-col w-80 space-y-6">
          <div className="">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="flex">
              <div className="flex flex-col overflow-hidden">
                <span className="">Reserva do AirBnB</span>
                <a href="" className="">https://www.airbnb.com.br/rooms/104700011</a>
              </div>
              <Link2 className="size-5 text-zinc-400" />
            </div>
          </div>
          <div className="w-full h-px bg-zinc-800"></div>
        </aside>
      </div>
    </div>
  )
}