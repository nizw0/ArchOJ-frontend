import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import {
  createProblem,
  createSubmission,
  createTestcase,
  createWorkspace,
  deleteProblem,
  deleteSubmission,
  getProblemById,
  getSubmissionById,
  getWorkspaceByAuth,
  listProblems,
  listSubmissions,
  listTestcases,
  updateProblem,
} from './api'
import { importUsers, initUsers } from './api/admin'
import { listUsersSolveCounts } from './api/statistic'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
})

export const useListProblems = () =>
  useQuery({
    queryKey: ['problems'],
    queryFn: listProblems,
    placeholderData: [],
  })

export const useGetProblem = (problemId) =>
  useQuery({
    queryKey: ['problem', problemId],
    queryFn: () => getProblemById(problemId),
    placeholderData: {},
  })

export const useCreateProblem = () =>
  useMutation({
    mutationFn: (problem) => createProblem(problem),
  })

export const useUpdateProblem = () =>
  useMutation({
    mutationFn: (problem) => updateProblem(problem),
  })

export const useDeleteProblem = () =>
  useMutation({
    mutationFn: (problemId) => deleteProblem(problemId),
  })

export const useListTestcases = (problemId) =>
  useQuery({
    queryKey: ['testcases', problemId],
    queryFn: () => listTestcases(problemId),
    placeholderData: [],
  })

export const useCreateTestcase = () =>
  useMutation({
    mutationFn: ({ problemId, testcase }) =>
      createTestcase({ problemId, testcase }),
  })

export const useListSubmissions = () =>
  useQuery({
    queryKey: ['submissions'],
    queryFn: listSubmissions,
    placeholderData: [],
  })

export const useGetSubmission = (submissionId) =>
  useQuery({
    queryKey: ['submission', submissionId],
    queryFn: () => getSubmissionById(submissionId),
    placeholderData: {},
  })

export const useCreateSubmission = () =>
  useMutation({
    mutationFn: (submission) => createSubmission(submission),
  })

export const useDeleteSubmission = () =>
  useMutation({
    mutationFn: (submissionId) => deleteSubmission(submissionId),
  })

export const useGetWorkspaceByAuth = () =>
  useQuery({
    queryKey: ['environment'],
    queryFn: getWorkspaceByAuth,
  })

export const useCreateWorkspace = () =>
  useMutation({
    mutationKey: ['environment'],
    mutationFn: () => createWorkspace(),
  })

export const useListUsersSolveCounts = () =>
  useQuery({
    queryKey: ['usersSolveCounts'],
    queryFn: () => listUsersSolveCounts(),
    placeholderData: [],
  })

export const useImportUsers = () =>
  useMutation({
    mutationFn: (file) => importUsers(file),
  })

export const useInitUsers = () =>
  useMutation({
    mutationFn: () => initUsers(),
  })
