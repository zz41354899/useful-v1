import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/style/globals.css'
import { META_DATA } from '@/helper/config/index'
import { headers } from 'next/headers'
import { Lang } from '@/type/enum.type'
import { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = META_DATA

const RootLayout = ({ children }: PropsWithChildren) => {
  const headerList = headers()
  const pathname = headerList.get('x-current-pathname')
  const lang = (pathname || `/${Lang.en_US}`).split('/')[1]

  return (
    <html lang={lang} className='scroll-smooth'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='noindex' />
      </head>
      <body className={`${inter.className} text-us-gray1100`}>{children}</body>
    </html>
  )
}

export default RootLayout
