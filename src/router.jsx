import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Action from './pages/action'
import AdminDashboard from './pages/admin-dashboard'
import CompetitionScoreboard from './pages/competition-scoreboard'
import CompletePassword from './pages/complete-password'
import Home from './pages/home'
import PracticeScoreboard from './pages/practice-scoreboard'
import Problem from './pages/problem'
import ProblemEdit from './pages/problem-edit'
import Problems from './pages/problems'
import ResetPassword from './pages/reset-password'
import Settings from './pages/settings'
import SignIn from './pages/sign-in'
import Submission from './pages/submission'
import Submissions from './pages/submissions'
import Testcase from './pages/testcase'
import TestcaseEdit from './pages/testcase-edit'
import TestcaseList from './pages/testcase-list'
import Workspace from './pages/workspace'
import AdminRoute from './route-components/admin-route'
import UserRoute from './route-components/user-route'

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
        path: '/problems/:problemId',
        element: <Problem />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <Layout>
        <UserRoute />
      </Layout>
    ),
    children: [
      {
        path: '/submissions',
        element: <Submissions />,
      },
      {
        path: '/submissions/:submissionId',
        element: <Submission />,
      },
      {
        path: '/workspace',
        element: <Workspace />,
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
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <Layout>
        <AdminRoute />
      </Layout>
    ),
    children: [
      {
        path: '/problems/:problemId/edit',
        element: <ProblemEdit />,
      },
      {
        path: '/problems/:problemId/testcases',
        element: <TestcaseList />,
      },
      {
        path: '/problems/:problemId/testcases/:testcaseId',
        element: <Testcase />,
      },
      {
        path: '/problems/:problemId/testcases/:testcaseId/edit',
        element: <TestcaseEdit />,
      },
      {
        path: '/admin-dashboard',
        element: <AdminDashboard />,
      },
      {
        path: '/action/:actionId',
        element: <Action />,
      },
    ],
  },
])
