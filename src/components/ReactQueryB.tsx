import React, { VFC } from 'react'
import { useQueryClient } from 'react-query'
import { useHistory } from 'react-router-dom'
import { Post } from '../types/posts'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

const ReactQueryB: VFC = () => {
  const history = useHistory()
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Post[]>('posts')
  return (
    <>
      <p className="font-bold my-3">ReactQueryA</p>
      {data?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => history.push('/')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">react query A</p>
    </>
  )
}

export default ReactQueryB
