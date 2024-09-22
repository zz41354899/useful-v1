import { Lang } from '@/type/enum.type'
import Link from 'next/link'
import clsx from 'clsx'
import { getDictionary } from '@/i18n/dictionaries'
import { IParams } from '@/type/common.type'

const Breadcrumb = async ({ params }: { params: Partial<IParams> }) => {
  const dict = await getDictionary(params.lang || Lang.en_US)

  const crumbs = [params.lang, params.design, params.ui]
    .filter(Boolean)
    .map((crumb) => `/${crumb}`)

  return (
    <div className='sticky w-full z-10 bg-white top-12 py-2 sm:top-[60px]'>
      <ul className='custom-breadcrumb'>
        {crumbs.map((crumb, index, array) => {
          const name = crumb.replace('/', '')
          const isLang = Object.values(Lang).includes(name as Lang)
          const isCurrentPage = index === array.length - 1
          const href = array.slice(index, array.length - 1).join(',')

          return (
            <li
              className={clsx(
                'custom-breadcrumb-item custom-breadcrumb-item-with-delimiter',
                isCurrentPage && 'custom-breadcrumb-item-active'
              )}
              key={crumb}
            >
              <Link
                href={href}
                className={clsx(!isCurrentPage && 'custom-breadcrumb-link')}
              >
                {isLang ? dict.home : dict[name]}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumb
