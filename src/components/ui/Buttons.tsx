import { getDictionary } from '@/i18n/dictionaries'
import { IUIProps } from '@/type/common.type'
import ScrollContainer from '@/components/ScrollContainer'
import Intro from '@/components/Intro'
import { DesignType, Level, UICategory } from '@/type/enum.type'
import {
  Basic,
  BasicCode,
  Disabled,
  DisabledCode,
  Icon,
  IconCode,
  Outline,
  OutlineCode,
  Size,
  SizeCode,
} from '@/components/demo/button'
import DemoCode from '@/components/DemoCode'
import { CodeTypeOptions } from '@/helper/constants'
import FilledText from '@/components/FilledText'
import Link from 'next/link'
import usePrettier from '@/util/hook/usePrettier'

interface IProps extends IUIProps {}
const Buttons = async ({ params, contexts }: IProps) => {
  const dict = await getDictionary(params.lang)

  const BasicDemoCode = await usePrettier(BasicCode)
  const OutlineDemoCode = await usePrettier(OutlineCode)
  const IconDemoCode = await usePrettier(IconCode)
  const SizeDemoCode = await usePrettier(SizeCode)
  const DisabledDemoCode = await usePrettier(DisabledCode)

  return (
    <>
      <ScrollContainer id={contexts[0].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[0].title]}>
            {dict[contexts[0].description]}
          </Intro>
          <div className='component-demo-container custom-subtitle2 flex-row'>
            <Basic />
          </div>
          <DemoCode options={CodeTypeOptions} code={BasicDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[1].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[1].title]}>
            <FilledText
              textKey={dict[contexts[1].description]}
              fillings={[
                <span key='.navbar' className='text-us-blue600'>
                  .btn-border
                </span>,
              ]}
            />
          </Intro>
          <div className='component-demo-container custom-subtitle2 flex-row'>
            <Outline />
          </div>
          <DemoCode options={CodeTypeOptions} code={OutlineDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[2].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[2].title]}>
            <FilledText
              textKey={dict[contexts[2].description]}
              fillings={[
                <span key='.navbar' className='text-us-blue600'>
                  .btn-disabled
                </span>,
              ]}
            />
          </Intro>
          <div className='component-demo-container custom-subtitle2'>
            <Disabled />
          </div>
          <DemoCode options={CodeTypeOptions} code={DisabledDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[3].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[3].title]}>
            <FilledText
              textKey={dict[contexts[3].description]}
              fillings={[
                <Link
                  href={`/${params.lang}/${DesignType.foundation}/${UICategory.symbol}`}
                  key='.navbar'
                  className='text-us-blue600 underline'
                >
                  {dict['symbol']}
                </Link>,
              ]}
            />
          </Intro>
          <div className='component-demo-container custom-subtitle2'>
            <Icon />
          </div>
          <DemoCode options={CodeTypeOptions} code={IconDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[4].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[4].title]}>
            <FilledText
              textKey={dict[contexts[4].description]}
              fillings={['.btn-md', '.btn-sm', '.btn-block'].map((item) => (
                <span key={item} className='text-us-blue600'>
                  {item}
                </span>
              ))}
            />
          </Intro>
          <div className='component-demo-container gap-y-4'>
            <Size />
          </div>
          <DemoCode options={CodeTypeOptions} code={SizeDemoCode} />
        </div>
      </ScrollContainer>
    </>
  )
}

export default Buttons
