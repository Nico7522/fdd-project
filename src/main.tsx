import * as React from 'react'
import * as ReactDOM  from 'react-dom/client'
import { inject } from '@vercel/analytics';

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes/route';

const router = createBrowserRouter(routes)
inject();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
