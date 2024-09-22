'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Lang } from '@/type/enum.type'
import { IParams } from '@/type/common.type'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

interface IProps {
  params: Pick<IParams, 'lang'>
  icon: any
}

const TranslateButton = ({ params, icon }: IProps) => {
  const pathname = usePathname()

  const href = useMemo(
    () =>
      pathname.replace(
        params.lang,
        params.lang === Lang.en_US ? Lang.zh_TW : Lang.en_US
      ),
    [params.lang, pathname]
  )

  return (
    <Link className='w-fit h-fit' as={href} replace prefetch href={href}>
      <Image width={24} height={24} src={icon} alt={params.lang} />
    </Link>
  )
}

export default TranslateButton
