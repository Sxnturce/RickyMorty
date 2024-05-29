export default function Cards({ info }) {
	return (
		<>
			<div className="flex flex-col items-center">
				<img
					src={info.image}
					alt={info.name}
					className="rounded-tr-xl rounded-tl-xl w-full"
				/>
				<p
					className={`py-1 px-2 rounded-md text-white font-semibold ${
						info.status === "Alive"
							? "bg-green-500"
							: info.status === "unknown"
							? "bg-gray-500"
							: "bg-red-600"
					}`}
				>
					{info.status}
				</p>
			</div>
		</>
	);
}
