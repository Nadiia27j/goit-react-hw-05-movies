import { Outlet } from 'react-router-dom';

export const Movies = () => {
 return (
    <div>
        <h1>Movies</h1>
        <Outlet />
    </div>
    );
};