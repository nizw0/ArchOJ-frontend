import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <p>home</p>,
      },
      {
        path: 'profile',
        element: <p>profile</p>,
      },
      {
        path: 'problems',
        element: <p>problems</p>,
      },
      {
        path: 'submissions',
        element: <p>submissions</p>,
      },
      {
        path: 'workspace',
        element: <p>workspace</p>,
      },
    ],
  },
])
