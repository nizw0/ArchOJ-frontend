import SubmissionStats from '@/components/submission-stats'
import { CodeBlock, github } from 'react-code-blocks'

const submission = {
  id: '1',
  problemId: '1',
  problemTitle: 'MYSQL n+1 problem',
  userId: '1',
  language: 'CPP',
  runtime: '2.13 s',
  status: 'Accepted',
  time: '5 days ago',
  code: '#include <iostream>\nint main() {\n cout << "hello world\\n" << endl;\n return 0;\n}',
}

export default function Submission() {
  return (
    <div className="bg-white px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {submission.problemTitle}
        </h1>
        <SubmissionStats submission={submission} />
        <CodeBlock
          wrapLongLines
          language={submission.language.toLowerCase()}
          showLineNumbers="true"
          text={submission.code}
          theme={github}
        />
      </div>
    </div>
  )
}
