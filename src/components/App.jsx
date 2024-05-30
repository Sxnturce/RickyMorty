import { useState, useEffect } from "react";
import Cards from "./characters/Cards";
import Button from "./buttons/Button";

function App() {
	let [value, setValue] = useState(1);
	const [character, setCharacters] = useState([]);

	const URL = `https://rickandmortyapi.com/api/character/?page=${value}`;
	useEffect(() => {
		async function feching() {
			try {
				const datos = await fetch(URL);
				const characters = await datos.json();
				setCharacters(characters.results);
			} catch (error) {
				console.log(e);
			}
		}
		feching();
	}, [value]);

	function next() {
		setValue((prevValue) => prevValue + 1);
	}

	function prev() {
		setValue((prevValue) => prevValue - 1);
	}
	return (
		<>
			<main className="w-11/12 mx-auto max-w-7xl flex flex-col gap-10 mt-8">
				<h1 className="text-green-500 font-bold text-center text-4xl">
					Rick y Morty (Api)
				</h1>
				<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
					{character.map((char, index) => {
						return <Cards info={char} key={index} />;
					})}
				</section>
				<Button next={next} prev={prev} number={value} />
			</main>
		</>
	);
}

export default App;
