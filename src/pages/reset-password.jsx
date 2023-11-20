import { handleConfirmResetPassword, handleResetPassword } from '@/api/index.js'
import { Square3Stack3DIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function ResetPassword() {
  const [isNextStep, setIsNextStep] = useState(false)

  const navigate = useNavigate()

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex h-16 shrink-0 items-center justify-center">
          <Square3Stack3DIcon className="h-8 w-auto stroke-gray-900" />
        </div>
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          action="#"
          className="space-y-6"
          method="POST"
          onSubmit={async (event) => {
            event.preventDefault()
            if (!isNextStep) {
              await handleResetPassword(event.target.username.value)

              setIsNextStep(true)
            } else {
              await handleConfirmResetPassword({
                username: event.target.username.value,
                confirmationCode: event.target.confirmationCode.value,
                newPassword: event.target.newPassword.value,
              })
              navigate('/sign-in')
            }
          }}
        >
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="username"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                required
                autoComplete="username"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="username"
                name="username"
                type="text"
              />
            </div>
          </div>

          {isNextStep && (
            <>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor="confirmationCode"
                  >
                    Confirmation Code
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    required
                    autoComplete="new-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="confirmationCode"
                    name="confirmationCode"
                    type="text"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900"
                    htmlFor="password"
                  >
                    New password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    required
                    autoComplete="new-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="newPassword"
                    name="newPassword"
                    type="password"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              {!isNextStep ? 'Continue' : 'Complete'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
