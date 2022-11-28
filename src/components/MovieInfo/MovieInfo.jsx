import { Outlet } from "react-router-dom";

export const MovieDetails = () => {
 return (
    <div>
        <h1>MovieDetails</h1>
        <Cast />
        <Reviews />
        <Outlet />
    </div>
    )
}