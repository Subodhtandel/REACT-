import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Display } from './Componants/Display.jsx'
import { Create } from './Componants/Create.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Display />
      },
      {
        path: "/create",
        element: <Create />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
