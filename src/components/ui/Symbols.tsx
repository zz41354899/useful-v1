import { IUIProps } from '@/type/common.type'
import Intro from '@/components/Intro'
import { DesignType, IconCategory, Level,  } from '@/type/enum.type'
import { UI_CONTENT_LIST } from '@/helper/config/uiContext'
import { getDictionary } from '@/i18n/dictionaries'
import FilledText from '@/components/FilledText'
import Link from 'next/link'
import Image from 'next/image'
import CopySvgIcon from '@/components/CopySvgIcon'
import SYMBOL_SERIES from '@/helper/config/symbol'
import ScrollContainer from '@/components/ScrollContainer'

interface IProps extends IUIProps {}

const Symbols = async ({ params, contexts }: IProps) => {
  const dict = await getDictionary(params.lang)

  const IconCategories = [
    IconCategory.application,
    IconCategory.unit,
    IconCategory.weather,
  ]

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
      <ScrollContainer id={contexts[1].title}>
        <Intro level={Level.third} name={dict[contexts[1].title]}>
          <FilledText
            textKey={dict[contexts[1].description]}
            fillings={[
              <Link
                key={Math.random()}
                className='text-us-blue600 underline underline-offset-4'
                href={`/${params.lang}/${DesignType.foundation}`}
              >
                {dict[DesignType.foundation]}
              </Link>,
            ]}
          />
        </Intro>
      </ScrollContainer>

      <h2 className='custom-title3'>{dict['List of Icons']}</h2>
      {IconCategories.map((category) => (
        <div key={category} className='flex flex-col gap-6'>
          <h3 className='custom-subtitle2'>{dict[category]}</h3>
          <div className='grid grid-cols-3 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4'>
            {SYMBOL_SERIES[category].map(({ title, svgContent, src }) => (
              <CopySvgIcon
                successMsg={dict['Copied!']}
                key={title}
                svgStr={svgContent}
                classNameStr={`<i className='us-icon us-${title}'></i>`}
              >
                <Image
                  src={src}
                  width='24'
                  height='24'
                  className='max-h-6'
                  alt={title}
                />
                <p className='body-content'>us-{title}</p>
              </CopySvgIcon>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default Symbols
