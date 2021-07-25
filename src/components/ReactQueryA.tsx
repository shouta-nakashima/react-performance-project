import React, { VFC } from 'react'
import { useQueryPosts } from '../hooks/useQueryPosts'
import { useHistory } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

const ReactQueryA: VFC = () => {
  const history = useHistory()
  const { status, data } = useQueryPosts()

  if (status === 'loading') return <div>{'Loading...'}</div>
  if (status === 'error') return <div>{'Error'}</div>
  return (
    <>
      <p className="font-bold my-3">ReactQueryA</p>
      {data?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={() => history.push('/query-b')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">react query B</p>
    </>
  )
}

export default ReactQueryA
