import { fetchUserAttributes } from 'aws-amplify/auth'
import { createBrowserRouter } from 'react-router-dom'
import { getSubmissionById, getWorkspaceById, listSubmissions } from './api'
import { getProblemById, listProblems } from './api/problem'
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
        loader: async () => {
          return null
        },
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
        loader: async () => {
          try {
            const { data } = await listProblems()
            return data
          } catch (err) {
            return []
          }
        },
      },
      {
        path: '/problems/:problemId',
        element: <Problem />,
        loader: async ({ params }) => {
          try {
            const { problemId } = params
            const { data } = await getProblemById(problemId)
            return data
          } catch (err) {
            return {}
          }
        },
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
        loader: async () => {
          try {
            const { data } = await listSubmissions()
            return data
          } catch (err) {
            return []
          }
        },
      },
      {
        path: '/submissions/:submissionId',
        element: <Submission />,
        loader: async ({ params }) => {
          try {
            const { submissionId } = params
            const { data } = await getSubmissionById(submissionId)
            return data
          } catch (err) {
            return {}
          }
        },
      },
      {
        path: '/workspace',
        element: <Workspace />,
        loader: async () => {
          try {
            const { sub } = await fetchUserAttributes()
            const { data } = await getWorkspaceById(sub)
            return data
          } catch (err) {
            return null
          }
        },
      },
      {
        path: '/practice',
        element: <PracticeScoreboard />,
        loader: async () => {
          return null
        },
      },
      {
        path: '/competition',
        element: <CompetitionScoreboard />,
        loader: async () => {
          return null
        },
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
