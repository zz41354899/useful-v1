import { Lang, Level, NavLinkType } from '@/type/enum.type'
import Link from 'next/link'
import Logo from '/public/img/brand/logo.svg'
import Image from 'next/image'
import { getDictionary } from '@/i18n/dictionaries'
import { HEADER_NAVS } from '@/helper/constants'
import NavLink from '@/components/NavLink'
import { UIS } from '@/helper/config/index'

const Sidebar = async ({ lang }: { lang: Lang }) => {
  const dict = await getDictionary(lang || Lang.en_US)

  const navs = HEADER_NAVS.map(({ href, key }) => ({
    content: dict[key],
    href,
  }))

  return (
    <nav className='flex flex-col gap-5 py-10 px-7 bg-white'>
      <div className='flex flex-col gap-5 sm:hidden'>
        <Link href={`/${lang}`} className='custom-navbar-begin'>
          <Image src={Logo} width={117} height={35} alt='Useful UI' />
        </Link>
        <ul className='custom-navbar-items flex-col items-start gap-5'>
          {navs.map(({ content, href }) => (
            <NavLink
              key={content}
              content={content}
              href={href}
              type={NavLinkType.item}
            />
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-10 h-[calc(100vh-220px)] sm:h-[calc(100vh-140px)] overflow-y-scroll'>
        {UIS.map(({ typeKey, categories, href }) => (
          <ul className='flex flex-col gap-6' key={typeKey}>
            <Link href={href} className='custom-subtitle2'>
              {dict[typeKey] || '-'}
            </Link>
            {categories.map(({ key, icon, isFinished }) => (
              <NavLink
                icon={icon}
                key={key}
                href={`/${lang}/${typeKey}/${key}`}
                type={NavLinkType.item}
                level={Level.second}
                content={dict[key]}
                isFinished={isFinished}
              />
            ))}
          </ul>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar
