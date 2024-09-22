import { PropsWithChildren } from 'react'
import { IParams } from '@/type/common.type'
import Sidebar from '@/components/layout/Sidebar'

interface IProps
  extends PropsWithChildren<{ params: Pick<IParams, 'lang' | 'design'> }> {}

const Layout = ({ children, params }: IProps) => {
  return (
    <>
      <aside className='w-full hidden max-h-fit sm:block sm:w-[300px] h-[calc(100vh-60px)] sticky top-10'>
        <Sidebar lang={params.lang} />
      </aside>
      <article className='w-full sm:max-w-[calc(100%-300px)] px-6 py-7 sm:py-12 sm:px-0 sm:pr-7'>
        {children}
      </article>
    </>
  )
}

export default Layout
