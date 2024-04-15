import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import NotebooksPage from './pages/NotebooksPage'
import NotebookPage from './pages/NotebookPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: '/Notebooks',
    element: <NotebooksPage/>,
  },
  {
    path: '/Notebook',
    element: <NotebookPage/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
