import { useEffect, useState } from "react";
import { getTrendingMovies } from "services/api";
import { MovieList } from "../../components/MovieList/MovieList";
import { Container, Title } from './Home.styled';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const renderTrendingMovies = async () => {
            try {
                const trendingMovies = await getTrendingMovies();
                setTrendingMovies(trendingMovies);
            } catch (error) {
                console.log(error)
            }
        };
        renderTrendingMovies();
    },[]);
   
    return (
        <Container>
            <Title>Trending today</Title>
            <MovieList movies={trendingMovies} />
        </Container>
    )
}

export default Home;