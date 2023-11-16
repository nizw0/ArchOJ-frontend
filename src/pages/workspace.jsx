import { HashtagIcon } from '@heroicons/react/24/outline'

const status = 'Running'

export default function Workspace() {
  return (
    <div className="space-x-4">
      <button
        className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        type="button"
      >
        Register
      </button>
      <button
        className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        type="button"
      >
        AWS Console Sign-In
      </button>

      <p className="mt-8 text-3xl font-bold tracking-tight text-gray-900">
        Current Status
      </p>
      <p className="mt-4 text-4xl font-bold">{status}</p>

      <button
        className="relative mt-32 block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center"
        disabled={true}
        type="button"
      >
        <HashtagIcon aria-hidden="true" className="mx-auto h-12 w-12" />
        <span className="mt-4 block text-sm font-semibold text-gray-900">
          New feature coming soon...
        </span>
      </button>
    </div>
  )
}
