import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import CoordinateData from '../screens/coordinateData';
import NameData from '../screens/nameData';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />
        },
        {
            path: "/coordinate",
            element: <CoordinateData />
        },
        {
            path: "/name",
            element: <NameData />
        }
    ])

    return <RouterProvider router={router} />
}

export default Router;