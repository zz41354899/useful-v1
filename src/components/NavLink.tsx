'use client'

import { Level, NavLinkType } from '@/type/enum.type'
import clsx from 'clsx'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useMemo } from 'react'
import Image from 'next/image'

interface IProps {
  content: string
  href: string
  type?: NavLinkType
  level?: Level
  icon?: any
  isFinished?: boolean
}

const NavLink = ({
  content,
  href,
  type = NavLinkType.tab,
  level = Level.first,
  icon,
  isFinished = true,
}: IProps) => {
  const params = useParams()
  const pathname = usePathname()

  const isCurrentPage = useMemo(
    () => pathname?.startsWith(href),
    [href, pathname]
  )

  return (
    <li
      className={clsx(
        'flex items-center',
        type === NavLinkType.tab && 'custom-tab',
        type === NavLinkType.tab && isCurrentPage ? 'custom-tab-active' : '',
        type === NavLinkType.item && isCurrentPage && 'text-us-blue600',
        level === Level.first && 'justify-center',
        level === Level.second && 'custom-body-content gap-2',
        !isFinished && 'cursor-not-allowed pointer-events-none'
      )}
    >
      {icon && (
        <Image className='rounded' width={24} height={24}  src={icon} alt={content} />
      )}
      <Link href={href}>{content}</Link>
      {!isFinished && (
        <span className='custom-badge custom-badge-sm bg-us-orange400 text-white'>
          WIP
        </span>
      )}
    </li>
  )
}

export default NavLink
