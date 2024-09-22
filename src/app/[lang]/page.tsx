import { getDictionary } from '@/i18n/dictionaries'
import { IParams } from '@/type/common.type'
import Link from 'next/link'
import { DesignType } from '@/type/enum.type'
import clsx from 'clsx'
import Image from 'next/image'
import { BannerImg } from '@/util/showcase'

interface IProps {
  params: Pick<IParams, 'lang'>
}

const Home = async ({ params: { lang } }: IProps) => {
  const dict = await getDictionary(lang)

  const links = [
    {
      key: 'Get started',
      design: DesignType.foundation,
      href: `/${lang}/${DesignType.foundation}`,
    },
    {
      key: 'See components',
      design: DesignType.development,
      href: `/${lang}/${DesignType.development}`,
    },
  ]

  return (
    <div className='justify-center items-center flex flex-wrap min-h-[calc(100vh-180px)] w-full p-10 flex-col lg:flex-row'>
      <div className='lg:w-[calc(55%-40px)] flex gap-10 flex-col'>
        <h1 className='text-us-blue600 custom-large-text lg:custom-display break-all'>
          {dict['Build modern web Applications With Useful Ui']}
        </h1>
        <p className='subtitle3 text-us-gray600 break-'>
          {
            dict[
              'Useful UI is an open-source component library based on React and Tailwind CSS, designed to help developers create more visually appealing and feature-rich web applications.'
            ]
          }
        </p>
        <div className='mt-2 flex flex-wrap gap-4'>
          {links.map(({ key, href, design }) => (
            <Link
              key={key}
              href={href}
              className={clsx(
                'custom-btn w-full text-center py-6 custom-subtitle1 rounded-2xl sm:w-fit',
                design === DesignType.development && 'border',
                design === DesignType.foundation &&
                  'custom-btn-primary bg-us-blue600 text-white'
              )}
            >
              {dict[key]}
            </Link>
          ))}
        </div>
      </div>
      <div className='hidden lg:block lg:w-[45%]'>
        <Image
          width={0}
          height={0}
          sizes='100%'
          src={BannerImg}
          alt={dict['Build modern web Applications With Useful Ui']}
        />
      </div>
    </div>
  )
}

export default Home
