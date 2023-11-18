const items = [
  { id: 1, in: '1\n1 2', out: '3' },
  { id: 2, in: '1\n5 4', out: '9' },
  { id: 3, in: '1\n3 6', out: '9' },
]

export default function ProblemTestcaseTable() {
  return (
    <div>
      <ul className="divide-y divide-gray-200" role="list">
        {items.map((item) => (
          <li className="px-4 py-4" key={item.id}>
            <dl className="mt-0 grid grid-cols-2 divide-x divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
              <div className="p-4 sm:p-6" key={item.name}>
                <dt className="-mt-2 mb-2 text-xs font-medium text-gray-900">
                  Input
                </dt>
                <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                  <div className="flex items-baseline whitespace-pre-wrap text-base font-semibold">
                    {item.in}
                  </div>
                </dd>
              </div>
              <div className="p-4 sm:p-6" key={item.name}>
                <dt className="-mt-2 mb-2 text-xs font-medium text-gray-900">
                  Output
                </dt>
                <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                  <div className="flex items-baseline text-base font-semibold">
                    {item.out}
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
