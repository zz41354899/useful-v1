import { NextRequest, NextResponse } from 'next/server'
import { Lang, PageType } from '@/type/enum.type'
import { LOCALES } from '@/helper/config/index'
import { getPageType } from '@/util/methods'

const getLocale = (request: NextRequest) => {
  return Lang.en_US
}

export const middleware = (request: NextRequest) => {

  const { pathname } = request.nextUrl
  const hasLocale = LOCALES.some((locale) => {
    const type = getPageType(pathname, locale)
    return type === PageType.page || type === PageType.home
  })

  const headers = new Headers(request.headers)
  headers.set('x-current-pathname', request.nextUrl.pathname)

  if (hasLocale) {
    return NextResponse.next({ headers })
  }

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
