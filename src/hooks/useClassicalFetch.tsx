import { useState, useEffect } from 'react'
import axios from 'axios'
import { useStateContext } from '../context/StateProvider'

export const useClassicalFetch = () => {
  const { posts, setPosts } = useStateContext()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      setLoading(true)
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        )
        setPosts(res.data)
      } catch (err) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [setPosts])

  return { posts, error, loading }
}
