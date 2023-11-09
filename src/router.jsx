import { createBrowserRouter } from 'react-router-dom'
import Sidebar from './components/sidebar'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Sidebar>
          <div>123</div>
        </Sidebar>
      </>
    ),
    // children: [
    //   {
    //     path: '/',
    //     element: <></>,
    //   },
    // ],
  },
])
