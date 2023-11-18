import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Action from './pages/action'
import AdminDashboard from './pages/admin-dashboard'
import CompetitionScoreboard from './pages/competition-scoreboard'
import CompletePassword from './pages/complete-password'
import Home from './pages/home'
import PracticeScoreboard from './pages/practice-scoreboard'
import Problem from './pages/problem'
import Problems from './pages/problems'
import ResetPassword from './pages/reset-password'
import Settings from './pages/settings'
import SignIn from './pages/sign-in'
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
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/complete-password',
        element: <CompletePassword />,
      },
      {
        path: '/reset-password',
        element: <ResetPassword />,
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
        path: '/admin-dashboard',
        element: <AdminDashboard />,
      },
      {
        path: '/practice',
        element: <PracticeScoreboard />,
      },
      {
        path: '/competition',
        element: <CompetitionScoreboard />,
      },
      {
        path: '/action/:id',
        element: <Action />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
])
