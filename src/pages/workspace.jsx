import { createWorkspace, getWorkspaceByAuth } from '@/api'
import Loading from '@/components/loading'
import { HashtagIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Workspace() {
  const accountId = import.meta.env.VITE_ACCOUNT_ID
  const [loading, setLoading] = useState(true)
  const [isRunning, setIsRunning] = useState(false)
  const [environmentId, setEnvironmentId] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const update = async () => {
      setLoading(true)
      const { data } = await getWorkspaceByAuth()
      setIsRunning(true)
      setEnvironmentId(data.environmentId)
      setLoading(false)
    }

    update()
  }, [setIsRunning, setEnvironmentId, setPassword])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="space-x-4">
            {isRunning ? (
              <Link
                className="rounded-md bg-slate-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                rel="noopener noreferrer"
                target="_blank"
                to={`https://ap-southeast-1.console.aws.amazon.com/cloud9/ide/${environmentId}`}
                type="button"
              >
                Open IDE
              </Link>
            ) : (
              <button
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                type="button"
                onClick={async () => {
                  const { data } = await createWorkspace()
                  setIsRunning(true)
                  setEnvironmentId(data.environmentId)
                  if (data.password) setPassword(data.password)
                }}
              >
                Register
              </button>
            )}
            <Link
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              rel="noopener noreferrer"
              target="_blank"
              to={`https://${accountId}.signin.aws.amazon.com/console`}
              type="button"
            >
              AWS Console Sign-In
            </Link>
          </div>

          <p className="mt-8 text-3xl font-bold tracking-tight text-gray-900">
            Current Status
          </p>
          <p className="mt-4 text-4xl font-bold">
            {isRunning ? 'Running' : 'Stopped'}
          </p>
          {password && (
            <p className="mt-4">
              Your temporary password is:{' '}
              <span className="font-bold">{password}</span>
            </p>
          )}

          <button
            disabled
            className="relative ml-0 mt-32 block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center"
            type="button"
          >
            <HashtagIcon aria-hidden="true" className="mx-auto h-12 w-12" />
            <span className="mt-4 block text-sm font-semibold text-gray-900">
              New feature coming soon...
            </span>
          </button>
        </div>
      )}
    </>
  )
}
