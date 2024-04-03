import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from './routers/Router';
import AuthProvider from './context/AuthProvider';
//tanstack
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<QueryClientProvider client={queryClient}>
<AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>     
  </React.StrictMode>
);


