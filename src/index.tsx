import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from './App';
import { EventrixProvider } from 'eventrix';
import eventrixStore from './eventrix';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <EventrixProvider eventrix={eventrixStore}>
                <App />
                <ToastContainer position="top-center" />
            </EventrixProvider>
        </BrowserRouter>
    </React.StrictMode>
);
