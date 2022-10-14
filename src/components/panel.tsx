import React, { CSSProperties, FC, ReactNode } from 'react'

export const Panel: FC<{
  children: ReactNode
  style?: CSSProperties
}> = (props) => {
  const { children = null, style } = props
  return (
    <div className="w-full h-auto p-2 bg-white border-gray-200 border-solid border" style={style}>
      {children}
    </div>
  )
}
