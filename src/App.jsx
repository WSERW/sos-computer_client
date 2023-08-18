import { createBrowserRouter, createRoutesFromElements, Route, RouteProvider, RouterProvider, useLocation } from 'react-router-dom'
import { ModalProvider } from './contexts/ModalContext';
import RootLayout from './layouts/RootLayout';
import Course from './pages/Course';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements((
            <Route path='/' element={<RootLayout />} >
                <Route path='/' element={<Index />} />
                <Route path='course/:id' element={<Course />} />
                <Route path='*' element={<NotFound />} />
            </Route>

        ))
    )
    return (
        <>
            <ModalProvider>
                <RouterProvider router={router} />
            </ModalProvider>
        </>

    )
}

export default App