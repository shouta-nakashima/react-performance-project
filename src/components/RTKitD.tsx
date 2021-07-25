import React, { VFC } from 'react'
import { selectMode } from '../slices/counterSlice'
import { useAppSelector } from '../app/hooks'

const RTKitD: VFC = () => {
  const mode = useAppSelector(selectMode)
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">RTKitD</p>
      <p className="text-blue-500">{mode ? 'mode on' : 'mode off'}</p>
    </div>
  )
}

export default RTKitD
