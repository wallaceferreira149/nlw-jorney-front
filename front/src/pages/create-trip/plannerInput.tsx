import { format } from "date-fns";
import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Button } from "../../components/button";

interface PlannerInputProps {
	isGuestInputOpen: boolean;
	toggleGuestInput: () => void;
	setDestination: (destination: string) => void
	dateRange?: DateRange | undefined
	setDateRange: (range: DateRange | undefined) => void
}

export function PlannerInput({
	isGuestInputOpen,
	toggleGuestInput,
	setDestination,
	dateRange,
	setDateRange
}: PlannerInputProps) {
	const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)


	function toggleDatePickerModal() {
		setIsDatePickerOpen(!isDatePickerOpen)
	}

	const displayedDate = dateRange && dateRange.from && dateRange.to
		? format(dateRange.from, "d ' de ' LLL").concat(' até ').concat(format(dateRange.to, "d ' de ' LLL"))
		: null

	return (
		<>
			<div className="px-4 h-16 bg-zinc-900 rounded-xl flex items-center gap-3 shadow-shape">
				<div className="flex items-center gap-2 flex-1">
					<MapPin className='size-5 text-zinc-400' />
					<input type="text"
						placeholder="Para onde você vai?"
						className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
						disabled={isGuestInputOpen}
						onChange={event => setDestination(event.target.value)}
					/>
				</div>
				<button
					className="flex items-center gap-2 text-left w-60"
					disabled={isGuestInputOpen}
					onClick={toggleDatePickerModal}
				>
					<Calendar className='size-5 text-zinc-400' />
					<span
						className="text-base text-zinc-400 flex-1 w-40"
					>
						{displayedDate || 'Quando?'}

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
									selected={dateRange}
									onSelect={setDateRange}
								/>
							</div>

						</div>
					</div>
				)}



				<div className="w-px h-6 bg-zinc-800"></div>

				{isGuestInputOpen ? (
					<Button
						variant="secondary"
						onClick={toggleGuestInput}
					>
						Alterar local e data
						<Settings2 className='size-5 text-zinc-200' />
					</Button>
				) : (
					<Button variant="primary" onClick={toggleGuestInput}>
						Continuar
						<ArrowRight className='size-5 text-lime-950' />
					</Button>
				)}
			</div>
		</>

	)
}