'use client'

import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  content: string
  successMsg: string
  className?: string
}
const CopyContainer = ({
  children,
  content,
  successMsg,
  className,
}: IProps) => {
  // TODO: success msg 要改成 snackbar
  return (
    <div
      className={className}
      onClick={() => {
        navigator.clipboard.writeText(content)
        alert(successMsg)
      }}
    >
      {children}
    </div>
  )
}

export default CopyContainer
