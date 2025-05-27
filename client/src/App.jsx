import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Layout from './components/layout/Layout'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  }
], {
  basename: import.meta.env.BASE_URL
})

const App = () => {
  return (
    <RouterProvider router={Router} future={{ v7_startTransition: true }} />
  )
}

export default App
