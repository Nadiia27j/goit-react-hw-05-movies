import { useEffect, useState } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";


const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        
    })
}

