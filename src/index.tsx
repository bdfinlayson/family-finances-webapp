import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Auth0ProviderWithHistory} from "./components/auth/Auth0ProviderWithHistory";
import {Dashboard} from "./components/dashboard/Dashboard";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Root = () => (
    <Auth0ProviderWithHistory>
        <App />
    </Auth0ProviderWithHistory>
)

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }
])

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
