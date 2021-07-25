import React, { VFC } from 'react'
import { useClassicalFetch } from '../hooks/useClassicalFetch'
import { useHistory } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

const ClassicalFetchA: VFC = () => {
  const { posts, error, loading } = useClassicalFetch()
  const history = useHistory()
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ClassicalFetchA</p>
      {error && <div>Error</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        posts?.map((post) => <p key={post.id}>{post.title}</p>)
      )}
      <ChevronDoubleRightIcon
        onClick={() => history.push('/fetch-b')}
        className="h-5 w-5 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch B</p>
    </div>
  )
}

export default ClassicalFetchA
