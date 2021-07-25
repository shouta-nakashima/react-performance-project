import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Post } from '../types/posts'

const fetchPosts = async () => {
  const { data } = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  )
  return data
}

export const useQueryPosts = () => {
  return useQuery({
    queryKey: 'posts',
    queryFn: fetchPosts,
    cacheTime: 30000,
    staleTime: 30000,
  })
}
