import React, { VFC } from 'react'
import { useHistory } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

const ClassicalFetchB: VFC = () => {
  const history = useHistory()
  const { posts } = useStateContext()
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ClassicalFetchB</p>

      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}

      <ChevronDoubleLeftIcon
        onClick={() => history.push('/fetch-a')}
        className="h-5 w-5 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch A</p>
    </div>
  )
}

export default ClassicalFetchB
