import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface PlannerInputProps {
	isGuestInputOpen: boolean;
	toggleGuestInput: () => void;
}

export function PlannerInput({ isGuestInputOpen, toggleGuestInput }: PlannerInputProps) {
	const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
	// const initialRange: DateRange = {
	// 	from: new Date(),
	// 	to: addDays(new Date(), 3)
	// }
	const [range, setRange] = useState<DateRange | undefined>(undefined)
	function toggleDatePickerModal() {
		setIsDatePickerOpen(!isDatePickerOpen)
	}

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
				<button
					className="flex items-center gap-2 text-left"
					disabled={isGuestInputOpen}
					onClick={toggleDatePickerModal}
				>
					<Calendar className='size-5 text-zinc-400' />
					<span
						className="text-lg text-zinc-400 outline-none w-36 [color-scheme:dark]"
					>
						Quando?
					</span>
				</button>

				{isDatePickerOpen && (
					<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
						<div className="bg-zinc-900 rounded-xl py-5 px-6 shadow-shape space-y-5">
							<header className="space-y-2">
								<div className="flex items-center justify-between">
									<h2 className="font-semibold text-lg tracking-tight">Selecione uma data</h2>
									<button
										className=""
										onClick={toggleDatePickerModal}
									>
										<X className='size-5 text-zinc-400' />
									</button>
								</div>
								<p className="text-zinc-400 text-sm text-left">Escolha o início e término da viagem.</p>
							</header>

							<div className="flex justify-center items-center">
								<DayPicker
									mode="range"
									selected={range}
									onSelect={setRange}
								/>
							</div>

						</div>
					</div>
				)}



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