import { Level } from '@/type/enum.type'
import clsx from 'clsx'
import { PropsWithChildren } from 'react'

interface IProps
  extends PropsWithChildren<{
    name: string
    level?: Level
  }> {}

const Intro = ({ name, level = Level.first, children }: IProps) => (
  <div className='flex flex-col gap-4'>
    <h1
      className={clsx(
        'text-us-blue600 break-all',
        level === Level.first && 'custom-large-text sm:custom-display',
        level === Level.second && 'custom-title1',
        level === Level.third && 'custom-title3'
      )}
    >
      {name}
    </h1>
    {children && <div className='custom-body-content'>{children}</div>}
  </div>
)

export default Intro
