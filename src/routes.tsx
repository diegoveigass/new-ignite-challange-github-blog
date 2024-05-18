import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app'
import { Blog } from './pages/Blog'
import { Repository } from './pages/Repository'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Blog /> },
      { path: '/test', element: <Repository /> },
    ],
  },
])
