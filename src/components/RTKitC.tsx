import React, { VFC } from 'react'
import { useAppDispatch } from '../app/hooks'
import { darkMode } from '../slices/counterSlice'

const RTKitC: VFC = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">RTKitC</p>
      <button
        className="py-2 px-3 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        onClick={() => dispatch(darkMode())}
      >
        darkMode
      </button>
    </div>
  )
}

export default RTKitC
