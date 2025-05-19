import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const getMock = async () => {
      const response = await axios.get(`${import.meta.env.BASE_URL}/api/v1/hello`)
      setMsg(response.data.message)
    }
    getMock()
  }, [])

  return (
    <>
      <h1>{msg}</h1>
    </>
  )
}

export default App
