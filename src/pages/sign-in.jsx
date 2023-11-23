import { getUser, handleSignIn } from '@/api/index.js'
import { userState } from '@/atoms'
import { Square3Stack3DIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

export default function SignIn() {
  const navigate = useNavigate()
  const setUser = useSetRecoilState(userState)

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex h-16 shrink-0 items-center justify-center">
            <Square3Stack3DIcon className="h-8 w-auto stroke-gray-900" />
          </div>
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            className="space-y-6"
            method="POST"
            onSubmit={async (e) => {
              e.preventDefault()
              const response = await handleSignIn({
                username: e.target.username.value,
                password: e.target.password.value,
              })
              if (response === null) {
                setUser(await getUser())
                navigate('/')
              }
              if (response === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED')
                navigate('/complete-password')
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

            <div>
              <div className="flex items-center justify-between">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                    to="/reset-password"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="password"
                  name="password"
                  type="password"
                />
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
