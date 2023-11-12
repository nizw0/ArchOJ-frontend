import { Dialog, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  Bars3Icon,
  ChartBarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  Square3Stack3DIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import { Fragment, useState } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function AppIcon() {
  return <Square3Stack3DIcon className="h-8 w-auto stroke-white" />
}

const navigation = [
  { name: 'Home', to: '/', icon: HomeIcon },
  { name: 'Problems', to: '/problems', icon: DocumentDuplicateIcon },
  { name: 'Submissions', to: '/submissions', icon: FolderIcon },
  { name: 'Workspace', to: '/workspace', icon: ComputerDesktopIcon },
  { name: 'Scoreboard', to: '#', icon: ChartBarIcon },
  { name: 'Dashboard', to: '#', icon: ChartPieIcon },
]
const userNavigation = [{ name: 'Sign out', to: '#' }]

const isLogin = true

export default function Sidebar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div>
      <Transition.Root as={Fragment} show={sidebarOpen}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      className="-m-2.5 p-2.5"
                      type="button"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                  <div className="flex h-14 shrink-0 items-center">
                    <AppIcon />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul className="flex flex-1 flex-col gap-y-7" role="list">
                      <li>
                        <ul className="-mx-2 space-y-1" role="list">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                reloadDocument="true"
                                to={item.to}
                                className={clsx(
                                  location.pathname === item.to
                                    ? 'bg-gray-800 text-white'
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                  'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                )}
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="h-6 w-6 shrink-0"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <Link
                          reloadDocument="true"
                          to="/settings"
                          className={clsx(
                            'group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                            location.pathname === '/settings'
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                          )}
                        >
                          <Cog6ToothIcon
                            aria-hidden="true"
                            className="h-6 w-6 shrink-0"
                          />
                          Settings
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
          <div className="flex h-14 shrink-0 items-center">
            <AppIcon />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7" role="list">
              <li>
                <ul className="-mx-2 space-y-1" role="list">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        reloadDocument="true"
                        to={item.to}
                        className={clsx(
                          'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                          location.pathname === item.to
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <Link
                  reloadDocument="true"
                  to="/settings"
                  className={clsx(
                    'group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    location.pathname === '/settings'
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  )}
                >
                  <Cog6ToothIcon
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0"
                  />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-14 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            type="button"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>

          {/* Separator */}
          <div
            aria-hidden="true"
            className="h-6 w-px bg-gray-900/10 lg:hidden"
          />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="relative flex flex-1">
              <Breadcrumb />
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              {/* Separator */}
              <div
                aria-hidden="true"
                className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              />

              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                {isLogin ? (
                  <>
                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        className="h-8 w-8 rounded-full bg-gray-50"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      />
                      <span className="hidden lg:flex lg:items-center">
                        <span
                          aria-hidden="true"
                          className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        >
                          User
                        </span>
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="ml-2 h-5 w-5 text-gray-400"
                        />
                      </span>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                reloadDocument="true"
                                to={item.to}
                                className={clsx(
                                  'block px-3 py-1 text-sm leading-6 text-gray-900',
                                  active ? 'bg-gray-50' : ''
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </>
                ) : (
                  <Link
                    className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    to="/signin"
                  >
                    Sign In
                  </Link>
                )}
              </Menu>
            </div>
          </div>
        </div>

        {/* Content */}
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol className="flex items-center space-x-4" role="list">
        <li>
          <div>
            <Link className="text-gray-400 hover:text-gray-500" to="/">
              <HomeIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            {location.pathname !== '/' ? (
              <>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <Link
                  aria-current="page"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  to={location.pathname}
                >
                  {location.pathname.substring(1)}
                </Link>
              </>
            ) : null}
          </div>
        </li>
      </ol>
    </nav>
  )
}
