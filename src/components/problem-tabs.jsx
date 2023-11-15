import { clsx } from 'clsx'

const tabs = [
  { id: 1, name: 'Overview' },
  { id: 2, name: 'File' },
]

export default function ProblemTabs({ page, setPage }) {
  return (
    <div>
      <div className="sm:hidden">
        <label className="sr-only" htmlFor="tabs">
          Select a tab
        </label>
        <select
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue={tabs[0].name}
          id="tabs"
          name="tabs"
          onChange={(event) => setPage(event.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                aria-current={tab.id === page ? 'page' : undefined}
                key={tab.id}
                className={clsx(
                  'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                  tab.id === page
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                )}
                onClick={() => setPage(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
