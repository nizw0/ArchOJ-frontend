import { handleSignOut, handleUpdatePassword } from '@/api/authentication'

export default function Settings() {
  return (
    <>
      <div>
        <main>
          {/* Settings forms */}
          <div className="divide-y divide-white/5">
            <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
              <div>
                <h2 className="text-base font-semibold leading-7">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>
              </div>

              <form className="md:col-span-2" onSubmit={() => {}}>
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      className="block text-sm font-medium leading-6"
                      htmlFor="first-name"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        id="first-name"
                        name="first-name"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      className="block text-sm font-medium leading-6"
                      htmlFor="last-name"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0  py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        id="last-name"
                        name="last-name"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      className="block text-sm font-medium leading-6 "
                      htmlFor="email"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        autoComplete="email"
                        className="block w-full rounded-md border-0  py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        id="email"
                        name="email"
                        type="email"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex">
                  <button
                    className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>

            <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
              <div>
                <h2 className="text-base font-semibold leading-7 ">
                  Change password
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Update your password associated with your account.
                </p>
              </div>

              <form
                className="md:col-span-2"
                onSubmit={async (event) => {
                  const currentPassword = event.target.currentPassword.value
                  const newPassword = event.target.newPassword.value
                  const confirmPassword = event.target.confirmPassword.value

                  if (newPassword === confirmPassword) {
                    await handleUpdatePassword(currentPassword, newPassword)
                  }
                }}
              >
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                  <div className="col-span-full">
                    <label
                      className="block text-sm font-medium leading-6 "
                      htmlFor="currentPassword"
                    >
                      Current password
                    </label>
                    <div className="mt-2">
                      <input
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0  py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        id="currentPassword"
                        name="currentPassword"
                        type="password"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      className="block text-sm font-medium leading-6 "
                      htmlFor="newPassword"
                    >
                      New password
                    </label>
                    <div className="mt-2">
                      <input
                        autoComplete="new-password"
                        className="block w-full rounded-md border-0  py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        id="newPassword"
                        name="newPassword"
                        type="password"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      className="block text-sm font-medium leading-6 "
                      htmlFor="confirm-password"
                    >
                      Confirm password
                    </label>
                    <div className="mt-2">
                      <input
                        autoComplete="newPassword"
                        className="block w-full rounded-md border-0  py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex">
                  <button
                    className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>

            <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
              <div>
                <h2 className="text-base font-semibold leading-7 ">
                  Sign out other sessions
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Sign out of your other sessions across all of your devices.
                </p>
              </div>

              <form
                className="md:col-span-2"
                onSubmit={() => handleSignOut(true)}
              >
                <div className="mt-8 flex">
                  <button
                    className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    type="submit"
                  >
                    Sign out other sessions
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
