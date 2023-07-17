import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouteProvider, RouterProvider } from 'react-router-dom'
import { ModalProvider } from './contexts/ModalContext';
import RootLayout from './layouts/RootLayout';
import Course from './pages/Course';
import Index from './pages/Index';

import './App.css';

import reportWebVitals from './reportWebVitals';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path='/' element={<RootLayout />} >
      <Route path='/' element={<Index />} />
      <Route path='course/:id' element={<Course />} />
      <Route path='*' element={<NotFound />} />
    </Route>

  ))
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
