import Loading from '@/components/loading'
import SubmissionStats from '@/components/submission-stats'
import { useGetSubmission } from '@/query'
import { CodeBlock, github } from 'react-code-blocks'
import { useParams } from 'react-router'

export default function Submission() {
  const { submissionId } = useParams()
  const { isSuccess, data: submission } = useGetSubmission(submissionId)

  return (
    <>
      {!isSuccess ? (
        <Loading />
      ) : (
        <div className="bg-white px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <h1 className="mx-8 mt-2 text-lg font-bold tracking-tight text-gray-900 sm:text-3xl">
              {submission.id}
            </h1>
            <SubmissionStats submission={submission} />
            <button
              className="ml-2 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:ml-8"
              onClick={() => {
                navigator.clipboard.writeText(submission.code)
              }}
            >
              Copy
            </button>
            <CodeBlock
              wrapLongLines
              language={submission.language}
              showLineNumbers={isSuccess}
              text={submission.code}
              theme={github}
            />
          </div>
        </div>
      )}
    </>
  )
}
