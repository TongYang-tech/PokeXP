import * as React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from 'react-router-dom'
import Home from './components/layout/Home'

const Router = createBrowserRouter([
  {
    path: '/',
    element: redirect('/pokex')
  },
  {
    path: '/pokex',
    element: <Home />
  }
])

const App = () => {
  return (
    <RouterProvider router={Router} future={{ v7_startTransition: true }} />
  )
}

export default App
