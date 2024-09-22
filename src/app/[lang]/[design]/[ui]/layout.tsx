import AnchorMap from '@/components/AnchorMap'
import Breadcrumb from '@/components/Breadcrumb'
import Intro from '@/components/Intro'
import UI_CONTEXT from '@/helper/config/uiContext'
import { IMG_PAIR } from '@/helper/config/index'
import { getDictionary } from '@/i18n/dictionaries'
import { IParams } from '@/type/common.type'
import Image from 'next/image'
import { ReactNode } from 'react'
import UI_DESCRIPTION from '@/helper/config/uiDescription'
import ErrorRedirect from '@/components/layout/ErrorRedirect'

interface IProps {
  children: ReactNode
  params: Pick<IParams, 'lang' | 'design' | 'ui'>
}

const Layout = async ({ children, params }: IProps) => {
  const dict = await getDictionary(params.lang)
  const description = dict[UI_DESCRIPTION?.[params.design]?.[params.ui]]

  const anchors = UI_CONTEXT[params.design]?.[params.ui]?.map(({ title }) => ({
    id: title,
    title: dict[title],
  }))

  const name = dict[params.ui]
  const src = IMG_PAIR[params.ui]

  if (!name || !src) {
    return <ErrorRedirect />
  }

  return (
    <>
      <Breadcrumb params={params} />
      <AnchorMap anchors={anchors} />
      <div className='page-container relative'>
        <Intro name={name}>{description}</Intro>
        <Image
          width={0}
          height={0}
          className='w-full m-auto lg:w-3/4 max-w-[500px] rounded-3xl aspect-[1013/530]'
          src={src}
          alt={name}
        />
        {children}
      </div>
    </>
  )
}

export default Layout
