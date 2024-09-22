import Image from 'next/image'
import Logo from '/public/img/brand/logo.svg'
import Link from 'next/link'
import { getDictionary } from '@/i18n/dictionaries'
import NavLink from '@/components/NavLink'
import { HEADER_NAVS } from '@/helper/constants'
import { CSSProperties, PropsWithChildren } from 'react'
import MenuToggleWithButton from '@/components/layout/MenuToggleWithButton'
import { HEADER_ACTIONS } from '@/helper/config/index'
import Sidebar from '@/components/layout/Sidebar'
import { IParams } from '@/type/common.type'
import { HeaderAction, Lang } from '@/type/enum.type'
import TranslateButton from '@/components/layout/TranslateButton'

interface IProps extends PropsWithChildren<{ params: Pick<IParams, 'lang'> }> {}

const Layout = async ({ children, params }: IProps) => {
  const dict = await getDictionary(params.lang)

  const navs = HEADER_NAVS.map(({ href, key }) => ({
    content: dict[key],
    href,
  }))

  const navUlStyle = {
    '--color-border': 'transparent',
  } as CSSProperties

  return (
    <main className='flex min-h-screen flex-col mx-auto'>
      <header className='shadow sticky bg-white top-0 z-30 '>
        <div className='max-w-[1500px] px-6 py-3 sm:px-4 sm:py-0 sm:mx-auto sm:w-full flex justify-between'>
          <Link
            href={`/${params.lang}`}
            className='custom-navbar-begin my-3 hidden sm:block'
          >
            <Image src={Logo} width={117} height={35} alt='Useful UI' />
          </Link>
          <MenuToggleWithButton>
            <Sidebar lang={params.lang} />
          </MenuToggleWithButton>
          <nav className='hidden items-end sm:flex'>
            <ul
              style={navUlStyle}
              className='custom-tab-list z-10 ml-20 mr-auto flex items-center text-center custom-body-content'
            >
              {navs.map(({ content, href }) => (
                <NavLink
                  key={content}
                  content={content}
                  href={`/${params.lang}${href}`}
                />
              ))}
            </ul>
          </nav>
          <section className='flex gap-4 items-center'>
            {HEADER_ACTIONS.map(({ icon, key }) =>
              key === HeaderAction.translate ? (
                <TranslateButton key={key} params={params} icon={icon} />
              ) : (
                <Image
                  className='cursor-pointer'
                  key={key}
                  width={24}
                  height={24}
                  src={icon}
                  alt={dict[key]}
                />
              )
            )}
          </section>
        </div>
      </header>
      <div className='max-w-[1500px] mx-auto w-full flex sm:gap-6'>
        {children}
      </div>
      <footer className='shadow-inner'>
        <div className='max-w-[1500px] m-auto py-6 px-3 sm:py-12 sm:px-6'>
          Copyright 2024 Useful Design
        </div>
      </footer>
    </main>
  )
}

export default Layout
