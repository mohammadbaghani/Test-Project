import Card from "./components/Card";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";
import Loader from "../components/Loader";
const MovieList = ({ apiPath, title }) => {
	const { data: movies, loader } = useFetch(apiPath);
	useTitle(`${title}`);
	return (
		<>
			{loader ? (<Loader />) : (
				<main>
					<section className="max-w-7xl mx-auto py-7">
						<div className="flex justify-start flex-wrap gap-10 others:justify-evenly">
							{movies.map((movie) => (
								<Card key={movie.id} movie={movie} />
							))}
						</div>
					</section>
				</main>
			)}
		</>
	);
};

export default MovieList;
