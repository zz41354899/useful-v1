import { ReactNode } from 'react'
import Intro from '@/components/Intro'
import { Level } from '@/type/enum.type'

interface IProps {
  name: string
  description: string | ReactNode
  children: ReactNode
}

const Sentence = ({ name, description, children }: IProps) => (
  <div className='flex flex-col gap-7' style={{ scrollMarginTop: '110px' }}>
    <Intro name={name} level={Level.second}>
      {description}
    </Intro>
    {children}
  </div>
)

export default Sentence
