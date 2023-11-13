import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/home'
import Problem from './pages/problem'
import Problems from './pages/problems'
import Settings from './pages/settings'
import SignIn from './pages/signin'
import Submission from './pages/submission'
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
        path: '/problems',
        element: <Problems />,
      },
      {
        path: '/problems/:id',
        element: <Problem />,
      },
      {
        path: '/submissions',
        element: <Submissions />,
      },
      {
        path: '/submissions/:id',
        element: <Submission />,
      },
      {
        path: '/workspace',
        element: <Workspace />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
])
