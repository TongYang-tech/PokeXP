import * as React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './components/layout/Home'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
