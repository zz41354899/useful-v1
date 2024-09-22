'use client'

import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  svgStr: string
  classNameStr: string
  successMsg: string
}

enum CopyType {
  svg = 'SVG',
  jsx = 'JSX',
}

const CopySvgIcon = ({
  children,
  svgStr,
  classNameStr,
  successMsg,
}: IProps) => {
  const handleCopy = (type: CopyType) => {
    switch (type) {
      case CopyType.jsx:
        navigator.clipboard.writeText(classNameStr)
        break
      case CopyType.svg:
        navigator.clipboard.writeText(
          svgStr
            .replaceAll('class', 'className')
            .replaceAll(/fill-opacity=".*?"/g, '')
            .replaceAll(/stroke-opacity=".*?"/g, '')
            .replaceAll(/fill=".*?"/g, 'fill="currentColor"')
        )
        break
      default:
        break
    }
    alert(successMsg)
  }

  return (
    <div className='relative flex items-center justify-center gap-2.5 flex-col p-2'>
      {children}
      <div className='absolute flex gap-2 flex-col w-full items-center justify-center py-2 px-3 opacity-0 hover:opacity-100'>
        <button
          onClick={() => handleCopy(CopyType.svg)}
          className='custom-btn custom-btn-dark custom-btn-sm w-fit'
        >
          Copy {CopyType.svg}
        </button>
        <button
          onClick={() => handleCopy(CopyType.jsx)}
          className='custom-btn custom-btn-primary custom-btn-sm w-fit'
        >
          Copy {CopyType.jsx}
        </button>
      </div>
    </div>
  )
}

export default CopySvgIcon
