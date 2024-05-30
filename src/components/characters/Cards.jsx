export default function Cards({ info }) {
	return (
		<>
			<div className="flex flex-col items-cente gap-4 relative bg-[#3c3e44] text-white">
				<p
					className={`py-1 px-2 rounded-md text-[1rem] right-0 absolute text-white font-semibold ${
						info.status === "Alive"
							? "bg-green-500"
							: info.status === "unknown"
							? "bg-gray-500"
							: "bg-red-600"
					}`}
				>
					{info.status}
				</p>
				<img
					src={info.image}
					alt={info.name}
					className="rounded-tr-xl rounded-tl-xl w-full aspect-[1/0.9]"
				/>

				<div className="flex  flex-col items-center p-2">
					<div className="flex justify-between w-full">
						<p className="font-bold ">Nombre: </p>
						<span className="text-gray-300">{info.name}</span>
					</div>
					<div className="flex justify-between w-full gap-6">
						<p className="font-bold ">Genero: </p>
						<span className="text-gray-300 text-center">{info.gender}</span>
					</div>
				</div>
			</div>
		</>
	);
}
