import { Movies } from "components/Movies/Movies";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "services/api";
import { Movies } from "components/Movies/Movies";

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
            <Movies movies={trendingMovies} />
        </Container>
    )
}

export default Home;