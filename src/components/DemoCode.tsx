'use client'
import { useEffect, useMemo, useState } from 'react'
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/themes/prism-okaidia.css'
import Image from 'next/image'
import { CopyIcon } from '@/util/icon'

interface IProps {
  code: { [key: string]: string } | string
  options?: { label: string; value: string }[]
}

const DemoCode = ({ code, options = [] }: IProps) => {
  const [type, setType] = useState<string>(
    options?.length > 0 ? options[0].value : ''
  )
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const shownCode = useMemo(() => {
    if (typeof code === 'string') {
      return code
    } else {
      if (type) {
        return code[type]
      } else {
        return '-'
      }
    }
  }, [code, type])

  const editorStyle = useMemo(
    () => ({
      fontFamily: '"Fira code", "Fira Mono", monospace',
      padding: typeof code === 'string' ? '10px' : '0 0 10px 0',
    }),
    [code]
  )

  const toggleOpen = () => {
    setIsSelectOpen((prev) => !prev)
  }

  const handleSelect = (value: string) => {
    setType(value)
    setIsSelectOpen(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shownCode)
    // TODO: 改成 snackbar
    alert('success')
  }

  const highlight = (code: string) =>
    Prism.highlight(code || '', Prism.languages.jsx, 'jsx')

  useEffect(() => {
    if (options.length > 0) {
      setType(options[0].value)
    }
  }, [options])

  return (
    // TODO: 點擊到外面就要關閉
    <div className='bg-us-gray1100 rounded-lg relative custom-body-content'>
      {options.length > 0 && (
        <div className='relative p-2.5 text-us-gray600 w-[181px]'>
          <button
            onClick={toggleOpen}
            className='w-full bg-us-gray1000 border-none rounded-lg shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-2 focus:ring-us-blue600 focus:border-us-blue600'
          >
            <span>{type}</span>
            <span className='absolute inset-y-0 right-3 flex items-center px-2 pointer-events-none'>
              {isSelectOpen ? '▲' : '▼'}
            </span>
          </button>
          {isSelectOpen && (
            <ul className='absolute w-[calc(100%-20px)] top-14 shadow-lg z-10 rounded-lg py-1 bg-us-gray1000 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none'>
              {options.map(({ value, label }) => (
                <li
                  key={value}
                  onClick={() => handleSelect(value)}
                  className='cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-us-blue600 hover:text-white'
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <button
        className='rounded-md text-white body-content absolute top-2.5 right-2.5 z-10'
        onClick={handleCopy}
      >
        <Image
          className='dark:invert'
          src={CopyIcon}
          width={24}
          height={24}
          alt={shownCode}
        />
        {/* TODO: 後端字典 */}
        <span className='sr-only'>Copy</span>
      </button>
      {/* TODO: SSR */}
      <div className='h-fit max-h-[200px] overflow-y-auto scrollbar px-4'>
        <Editor
          className='text-white bg-us-gray1100 pointer-events-none rounded-lg'
          value={shownCode}
          onValueChange={() => {}}
          highlight={highlight}
          style={editorStyle}
        />
      </div>
    </div>
  )
}

export default DemoCode
