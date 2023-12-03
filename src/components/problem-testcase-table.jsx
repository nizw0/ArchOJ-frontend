export default function ProblemTestcaseTable({ testcases }) {
  return (
    <div>
      <ul className="divide-y divide-gray-200" role="list">
        {testcases &&
          testcases.map((testcase) => (
            <li className="px-4 py-4" key={testcase.id}>
              <dl className="mt-0 grid grid-cols-2 divide-x divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                <div className="p-4 sm:p-6">
                  <dt className="-mt-2 mb-2 text-xs font-medium text-gray-900">
                    Input
                  </dt>
                  <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                    <div className="flex items-baseline whitespace-pre-wrap text-base font-semibold">
                      {testcase.input}
                    </div>
                  </dd>
                </div>
                <div className="p-4 sm:p-6">
                  <dt className="-mt-2 mb-2 text-xs font-medium text-gray-900">
                    Output
                  </dt>
                  <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                    <div className="flex items-baseline whitespace-pre-wrap text-base font-semibold">
                      {testcase.output}
                    </div>
                  </dd>
                </div>
              </dl>
            </li>
          ))}
      </ul>
    </div>
  )
}
