function Button({ next, prev, number }) {
	return (
		<>
			<div className="flex gap-4 items-center mx-auto mb-10">
				<button
					onClick={prev}
					disabled={number === 1}
					className={`text-2xl font-bold text-white  select-none  h-[35px] w-[35px] flex items-center justify-center rounded-sm ${
						number === 1
							? "bg-blue-500 cursor-default"
							: "bg-blue-600 cursor-pointer".trim()
					}`}
				>
					-
				</button>
				<p className="h-full text-white">{number}</p>
				<button
					onClick={next}
					disabled={number === 42}
					className={`text-2xl font-bold text-white select-none  h-[35px] w-[35px] flex items-center justify-center rounded-sm ${
						number === 42
							? "bg-blue-400 cursor-default"
							: "bg-blue-600 cursor-pointer".trim()
					}`}
				>
					+
				</button>
			</div>
		</>
	);
}

export default Button;
