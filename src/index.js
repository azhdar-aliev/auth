import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<GoogleOAuthProvider clientId='<your_client_id>'>
              <RouterProvider router={router} />
            </GoogleOAuthProvider>);

