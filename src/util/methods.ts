import { Lang, PageType } from '@/type/enum.type'

export const getPageType = (pathname: string, locale: Lang) => {
  const isHome = pathname === `/${locale}`
  if (isHome) {
    return PageType.home
  }
  const isPage = pathname.startsWith(`/${locale}/`)
  if (isPage) {
    return PageType.page
  }
  return PageType.undefined
}