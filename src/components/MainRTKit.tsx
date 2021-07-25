import React, { VFC } from 'react'
import RTKitA from './RTKitA'
import RTkitB from './RTkitB'
import RTKitC from './RTKitC'
import RTKitD from './RTKitD'

const MainRTKit: VFC = () => {
  return (
    <div className="grid grid-cols-2 gap-40">
      <RTKitA />
      <RTkitB />
      <RTKitC />
      <RTKitD />
    </div>
  )
}

export default MainRTKit
