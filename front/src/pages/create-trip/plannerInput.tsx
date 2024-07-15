import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface PlannerInputProps {
	isGuestInputOpen: boolean;
	toggleGuestInput: () => void;
}

export function PlannerInput({ isGuestInputOpen, toggleGuestInput }: PlannerInputProps) {
	return (
		<>
			<div className="px-4 h-16 bg-zinc-900 rounded-xl flex items-center gap-3 shadow-shape">
				<div className="flex items-center gap-2 flex-1">
					<MapPin className='size-5 text-zinc-400' />
					<input type="text"
						placeholder="Para onde você vai?"
						className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
						disabled={isGuestInputOpen}
					/>
				</div>
				<div className="flex items-center gap-2">
					<Calendar className='size-5 text-zinc-400' />
					<input
						type="date"
						placeholder="Quando?"
						className="bg-transparent text-lg placeholder-zinc-400 outline-none w-36 [color-scheme:dark]"
						disabled={isGuestInputOpen}
					/>
				</div>

				<div className="w-px h-6 bg-zinc-800"></div>

				{isGuestInputOpen ? (
					<button
						className="bg-zinc-800 text-zinc-200 rounded-lg py-2 px-5 font-medium flex gap-2 items-center hover:bg-zinc-700"
						onClick={toggleGuestInput}
					>
						Alterar local e data
						<Settings2 className='size-5 text-zinc-200' />
					</button>
				) : (
					<button
						className="bg-lime-300 text-lime-950 rounded-lg py-2 px-5 font-medium flex gap-2 items-center hover:bg-lime-400"
						onClick={toggleGuestInput}
					>
						Continuar
						<ArrowRight className='size-5 text-lime-950' />
					</button>
				)}
			</div>
		</>

	)
}