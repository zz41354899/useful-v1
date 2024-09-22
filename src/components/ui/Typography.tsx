import { IUIProps } from '@/type/common.type'
import ScrollContainer from '@/components/ScrollContainer'
import { getDictionary } from '@/i18n/dictionaries'
import Intro from '@/components/Intro'
import { UI_CONTENT_LIST } from '@/helper/config/uiContext'
import { Level } from '@/type/enum.type'
import Image from 'next/image'
import { Fonts, Typographies } from '@/helper/config/typography'

interface IProps extends IUIProps {}

const Typography = async ({ params, contexts }: IProps) => {
  const dict = await getDictionary(params.lang)
  return (
    <>
      <ScrollContainer id={contexts[0].title}>
        <Intro level={Level.second} name={dict[contexts[0].title]}>
          <ul className='flex flex-col gap-4'>
            {UI_CONTENT_LIST[params.ui][0].description.map((text, index) => (
              <li key={text}>
                {index + 1}. {dict[text]}
              </li>
            ))}
          </ul>
        </Intro>
      </ScrollContainer>
      <h1 className='text-8xl sm:text-9xl text-center'>Inter</h1>
      <ScrollContainer id={contexts[1].title}>
        <Intro level={Level.second} name={dict[contexts[1].title]}>
          {dict[contexts[1].description]}
        </Intro>
      </ScrollContainer>
      <ScrollContainer id={contexts[2].title}>
        <Intro level={Level.second} name={dict[contexts[2].title]}>
          <div className='mb-4 flex gap-11 sm:gap-14 w-full sm:max-w-[434px]'>
            {Fonts.map(({ src, title }, _, array) => (
              <Image
                key={title}
                src={src}
                width={0}
                height={0}
                sizes={`${100 / array.length}%`}
                alt={title}
              />
            ))}
          </div>
          {dict[contexts[2].description]}
        </Intro>
      </ScrollContainer>
      <ScrollContainer id={contexts[3].title}>
        <Intro level={Level.second} name={dict[contexts[3].title]}>
          <div className='flex flex-col gap-4'>
            {UI_CONTENT_LIST[params.ui][1].description.map((text) => (
              <p key={text}>{dict[text]}</p>
            ))}
          </div>
          {dict[contexts[3].description]}
        </Intro>
      </ScrollContainer>
      <div className='w-full overflow-x-auto'>
        <table className='w-full min-w-[500px]'>
          <thead>
            <tr className='font-bold custom-small'>
              <th className='text-start'>Name</th>
              <th className='text-start'>Weight</th>
              <th className='text-start'>Size/Line Height</th>
            </tr>
          </thead>
          <tbody className='custom-small'>
            {Typographies.map(({ name, weight, size, className = '' }) => (
              <tr key={name}>
                <td className={className}>{name}</td>
                <td>{weight}</td>
                <td>{size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Typography
