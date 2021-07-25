import React, { VFC } from 'react'
import { useStateContext } from '../context/StateProvider'

const ContextA: VFC = () => {
  const { dark, setDark } = useStateContext()
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">ContewxtA</p>
      <p className="my-3">{dark ? 'on' : 'off'}</p>
      <button
        className="py-3 px-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        onClick={() => setDark(!dark)}
      >
        Dark mode
      </button>
    </div>
  )
}

export default ContextA
