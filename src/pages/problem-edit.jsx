import { putProblemFile } from '@/api'
import Loading from '@/components/loading'
import { useDeleteProblem, useGetProblem, useUpdateProblem } from '@/query'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function ProblemEdit() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const { problemId } = useParams()
  const { isSuccess, data: problem } = useGetProblem(problemId)
  const updateProblem = useUpdateProblem()
  const deleteProblem = useDeleteProblem()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      setName(problem.name)
      setDescription(problem.description)
    }
  }, [isSuccess, problem])

  return (
    <>
      {!isSuccess ? (
        <Loading />
      ) : (
        <div>
          <main>
            <div className="divide-y divide-white/5">
              <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base font-semibold leading-7">
                    Problem attributes
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Update problem attributes.
                  </p>
                </div>

                <form
                  className="md:col-span-2"
                  onSubmit={(e) => {
                    e.preventDefault()
                    updateProblem.mutate({ id: problem.id, name, description })
                  }}
                >
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        className="block text-sm font-medium leading-6"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          autoComplete="name"
                          className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          defaultValue={problem.name}
                          id="name"
                          name="name"
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        className="block text-sm font-medium leading-6 "
                        htmlFor="description"
                      >
                        Description
                      </label>
                      <div className="mt-2">
                        <textarea
                          autoComplete="description"
                          className="block w-full whitespace-pre-wrap rounded-md  border-0  py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          defaultValue={problem.description}
                          id="description"
                          name="description"
                          rows={10}
                          onChange={(e) => setDescription(e)}
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
                    Change problem file
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Upload a new file rhen replace the problem file.
                  </p>
                </div>

                <form
                  className="md:col-span-2"
                  onSubmit={async (e) => {
                    e.preventDefault()
                    await putProblemFile(problemId, file)
                    navigate(`/problems/${problemId}`)
                  }}
                >
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                    <div className="col-span-full">
                      <label
                        className="block text-sm font-medium leading-6 "
                        htmlFor="currentPassword"
                      >
                        Choose a file
                      </label>
                      <div className="mt-2">
                        <label className="sr-only" htmlFor="file">
                          Choose a file
                        </label>
                        <input
                          accept="application/pdf"
                          className="mt-2 block w-full rounded-lg border border-gray-200 text-sm shadow-sm file:me-4 file:border-0 file:bg-gray-50 file:px-4 file:py-2 focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                          id="file"
                          name="file"
                          type="file"
                          onChange={(e) => {
                            setFile(e.target.files[0])
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex">
                    <button
                      className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      type="submit"
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </div>

              <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base font-semibold leading-7">
                    Delete problem
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Click to delete this problem.
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                    onClick={async () => {
                      await deleteProblem.mutateAsync(problemId)
                      navigate('/problems')
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  )
}
