'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

interface Anchor {
  id: string
  title: string
}

interface IProps {
  anchors?: Anchor[]
}

const AnchorMap = ({ anchors }: IProps) => {
  const [activeAnchor, setActiveAnchor] = useState<string>(
    anchors && anchors.length > 0 ? anchors[0].id : ''
  )

  useEffect(() => {
    const handleScroll = () => {
      let current = ''

      const list = anchors || ([] as Anchor[])

      list.forEach(({ id }) => {
        const section = document.getElementById(id)
        const sectionTop = (section?.offsetTop || 100) - 100
        if (window.scrollY >= sectionTop) {
          current = id
        }
      })

      setActiveAnchor(current)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [anchors])

  return (
    <div
      id={JSON.stringify(anchors)}
      className='pointer-events-none fixed z-10 top-[90px] w-full max-w-[1500px] sm:top[112px] right-6 sm:right-[calc(50%+28px)] sm:translate-x-[calc(50%)] hidden sm:flex justify-end'
    >
      <div className='max-w-[120px] flex flex-col border bg-[rgba(256,256,256,0.5)] shadow p-3 rounded-lg gap-2 pointer-events-auto'>
        {(anchors || ([] as Anchor[])).map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            className={clsx(
              'pl-2 custom-body-content border-l break-all',
              activeAnchor === id
                ? 'border-us-blue600 text-us-blue600'
                : 'border-us-gray1100'
            )}
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  )
}

export default AnchorMap
