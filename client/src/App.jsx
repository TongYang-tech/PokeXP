import { useState, useEffect } from 'react'
import { Container } from '@chakra-ui/react'
import axios from 'axios'

const App = () => {
  const [msg, setMsg] = useState([])

  useEffect(() => {
    const getMock = async () => {
      const { data } = await axios.get(`${import.meta.env.BASE_URL}/api/v1/types`)
      setMsg(data)
    }
    getMock()
  }, [])

  return (
    <Container>
      {msg.map((type) => {
        return (
          <p key={crypto.randomUUID()}>{type}</p>
        )
      })}
    </Container>
  )
}

export default App
