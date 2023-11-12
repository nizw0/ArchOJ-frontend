import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/home'
import Problems from './pages/problems'
import Settings from './pages/settings'
import SignIn from './pages/signin'
import Submissions from './pages/submissions'
import Workspace from './pages/workspace'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: 'problems',
        element: <Problems />,
      },
      {
        path: 'submissions',
        element: <Submissions />,
      },
      {
        path: 'workspace',
        element: <Workspace />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
])
