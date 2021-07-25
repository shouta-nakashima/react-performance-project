import React, { VFC } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { increment, selectCount } from '../slices/counterSlice'

const RTKitA: VFC = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">RTKitA</p>
      {count}
      <button
        className="py-2 px-3 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
    </div>
  )
}

export default RTKitA
