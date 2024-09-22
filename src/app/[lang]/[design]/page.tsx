import Breadcrumb from '@/components/Breadcrumb'
import Intro from '@/components/Intro'
import ErrorRedirect from '@/components/layout/ErrorRedirect'
import Welcome from '@/components/Welcome'
import { DESIGN_INTRO_KEY_PAIR, UI_SHOWCASE } from '@/helper/config/index'
import { getDictionary } from '@/i18n/dictionaries'
import { IParams } from '@/type/common.type'
import { DesignType } from '@/type/enum.type'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  params: Pick<IParams, 'lang' | 'design'>
}

const Home = async ({ params }: IProps) => {
  const dict = await getDictionary(params.lang)
  const showcases = UI_SHOWCASE?.[params.design] || []

  const name = dict[params.design]

  if (!name) {
    return <ErrorRedirect />
  }

  return (
    <>
      <Breadcrumb params={params} />
      <div className='page-container'>
        {params.design === DesignType.foundation && <Welcome params={params} />}
        <Intro name={name}>{dict[DESIGN_INTRO_KEY_PAIR[params.design]]}</Intro>
        <ul className='grid gap-x-6 gap-y-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
          {showcases.map(({ key, img }) => (
            <li key={key}>
              <Link
                href={`/${params.lang}/${params.design}/${key}`}
                className='flex flex-col gap-4'
              >
                <Image
                  className='rounded-lg w-full aspect-[359/236]'
                  width={0}
                  height={0}
                  src={img}
                  alt={dict[key]}
                />
                {dict[key]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
