import { CircleCheck, Plus, UserCog } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { api } from "../../lib/axios";
import { CreateActivityModal } from "./create-activity";
import { CreateLinkModal } from "./create-link-modal";
import { Guest } from "./guest";
import { ImportantLink } from "./important-link";
import { TripDetail } from "./trip-detail";

interface IImportantLink {
  id: number
  title: string
  url: string
}

interface IActivity {
  date: Date;
  name: string;
  time: string;
}

interface IGuest {
  id: string;
  name: string;
  email: string;
  isConfirmed: boolean;
}

// const guests = [
//   { name: 'Alice Johnson', email: 'alice@example.com', isConfirmed: true },
//   { name: 'Bob Smith', email: 'bob@example.com', isConfirmed: false },
//   { name: 'Charlie Brown', email: 'charlie@example.com', isConfirmed: true },
//   { name: 'Diana Miller', email: 'diana@example.com', isConfirmed: false },
//   { name: 'Ethan Wilson', email: 'ethan@example.com', isConfirmed: true },
//   { name: 'Fiona Lee', email: 'fiona@example.com', isConfirmed: false },
//   { name: 'George Davis', email: 'george@example.com', isConfirmed: true },
//   { name: 'Hannah Clark', email: 'hannah@example.com', isConfirmed: false },
//   { name: 'Ian Brown', email: 'ian@example.com', isConfirmed: true },
//   { name: 'Julia White', email: 'julia@example.com', isConfirmed: false }
// ];

export function TripDetails() {
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false)
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false)

  const [importantLinks, setImportantLinks] = useState<IImportantLink[]>([])
  const [guests, setGuests] = useState<IGuest[]>()
  const [activities, setActivities] = useState<IActivity[]>([])

  const { tripId } = useParams()

  useEffect(() => {
    api.get(`/trips/${tripId}/links`).then(response => setImportantLinks(response.data))
    api.get(`/trips/${tripId}/participants`).then(response => setGuests(response.data))
  }, [])


  function toggleCreateActivityModal() {
    setIsActivityModalOpen(!isActivityModalOpen)
  }

  function toggleCreateLinkModal() {
    setIsLinkModalOpen(!isLinkModalOpen)
  }

  async function createImportantLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    const title = data.get("title")?.toString()
    const url = data.get("url")?.toString()
    if (!title || !url) return
    const linkToCreate = {
      title,
      url
    }
    console.log(linkToCreate)
    const response = await api.post(`/trips/${tripId}/links`, linkToCreate)
    setImportantLinks(response.data)
    console.log("RESPONSE", response.data)
    console.log("STATE", importantLinks)
    toggleCreateLinkModal();
  }

  function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const date = data.get("date")?.toString()
    const time = data.get("time")?.toString()
    const name = data.get("name")?.toString()

    if (!name || !date || !time) return
    const newActivity = {
      date: new Date(date!),
      name,
      time
    }
    setActivities([...activities, newActivity])

    // const atividadesAgrupadas = activities.reduce((acc, activity) => {
    //   acc[activity.date.getDate().toString()] = acc[activity.date.getDate().toString()] || [];
    //   acc[activity.date.getDate().toString()].push(activity);
    //   return acc;
    // }, {});

    console.log(newActivity);
    toggleCreateActivityModal();
  }

  return (
    <div className="max-w-[1100px] px-6 py-10 space-y-8 mx-auto h-screen">

      <TripDetail />

      <div className="flex space-x-16 w-full px-4">
        <section className="flex-1 space-y-6">
          <header className="flex items-center w-full justify-between">
            <h1 className="text-3xl font-semibold">Atividades</h1>
            <Button variant="primary">
              <Plus className='size-5 text-lime-950 shrink-0' />
              Cadastrar atividade
            </Button>
          </header>

          {/* painel */}
          <div className="flex flex-col space-y-8">
            {/* days
            {activities
              .filter(day => day.date.getDate() === new Date().getDate())
              // .map(activity => (
              //   <Activity key={activity.date.getTime()} {...activity} />
              // ))
            } */}

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

        <aside className="w-80 space-y-6">
          <h2 className="font-semibold text-xl">Links importantes</h2>
          <div className="space-y-5">
            {importantLinks.map(link => <ImportantLink
              title={link.title}
              url={link.url}
              key={link.id}
            />)}
            <Button
              variant="secondary"
              onClick={toggleCreateLinkModal}
            >
              <Plus className='size-5 text-zinc-200 inline' />
              Cadastrar novo link
            </Button>
          </div>

          {/* divisória */}
          <div className="w-full h-px bg-zinc-800"></div>

          <h2 className="font-semibold text-xl">Convidados</h2>
          <div className="space-y-5">
            {/* convidados */}
            {guests?.map(guest => (
              <Guest
                key={guest.id}
                email={guest.email} name={guest.name}
                isConfirmed={guest.isConfirmed} />
            ))}
            <Button
              variant="secondary"
            >
              <UserCog className='size-5 text-zinc-200 inline' />
              Gerenciar convidados
            </Button>
          </div>
        </aside>

        {isActivityModalOpen &&
          <CreateActivityModal
            createActivity={createActivity}
            toggleCreateActivityModal={toggleCreateActivityModal}
          />
        }

        {isLinkModalOpen &&
          <CreateLinkModal
            toggleCreateLinkModal={toggleCreateLinkModal}
            createImportantLink={createImportantLink} />
        }

      </div >
    </div >
  )
}