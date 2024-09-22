import { PropsWithChildren } from 'react'

const ScrollContainer = ({
  id,
  children,
}: PropsWithChildren<{ id: string }>) => (
  <div id={id} className='scroll-mt-28'>
    {children}
  </div>
)

export default ScrollContainer
