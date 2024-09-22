import { getDictionary } from '@/i18n/dictionaries'
import { IUIProps } from '@/type/common.type'
import ScrollContainer from '@/components/ScrollContainer'
import Intro from '@/components/Intro'
import { Level } from '@/type/enum.type'
import {
  Align,
  AlignCode,
  Basic,
  BasicCode,
  Collapsed,
  CollapsedCode,
  CustomDelimiter,
  CustomDelimiterCode,
  Customization,
  CustomizationCode,
  LastActive,
  LastActiveCode,
  WithIcon,
  WithIconCode,
} from '@/components/demo/breadcrumb'
import DemoCode from '@/components/DemoCode'
import { CodeTypeOptions } from '@/helper/constants'
import usePrettier from '@/util/hook/usePrettier'

interface IProps extends IUIProps {}

const Breadcrumbs = async ({ params, contexts }: IProps) => {
  const dict = await getDictionary(params.lang)

  const AlignDemoCode = await usePrettier(AlignCode)
  const BasicDemoCode = await usePrettier(BasicCode)
  const CollapsedDemoCode = await usePrettier(CollapsedCode)
  const CustomDelimiterDemoCode = await usePrettier(CustomDelimiterCode)
  const CustomizationDemoCode = await usePrettier(CustomizationCode)
  const LastActiveDemoCode = await usePrettier(LastActiveCode)
  const WithIconDemoCode = await usePrettier(WithIconCode)

  return (
    <>
      <ScrollContainer id={contexts[0].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[0].title]}>
            {dict[contexts[0].description]}
          </Intro>
          <div className='component-demo-container'>
            <Basic />
          </div>
          <DemoCode options={CodeTypeOptions} code={BasicDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[1].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[1].title]}>
            {dict[contexts[1].description]}
          </Intro>
          <div className='component-demo-container'>
            <LastActive />
          </div>
          <DemoCode options={CodeTypeOptions} code={LastActiveDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[2].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[2].title]}>
            {dict[contexts[2].description]}
          </Intro>
          <div className='component-demo-container'>
            <WithIcon />
          </div>
          <DemoCode options={CodeTypeOptions} code={WithIconDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[3].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[3].title]}>
            {dict[contexts[3].description]}
          </Intro>
          <div className='component-demo-container'>
            <CustomDelimiter />
          </div>
          <DemoCode options={CodeTypeOptions} code={CustomDelimiterDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[4].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[4].title]}>
            {dict[contexts[4].description]}
          </Intro>
          <div className='component-demo-container'>
            <Collapsed />
          </div>
          <DemoCode options={CodeTypeOptions} code={CollapsedDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[5].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[5].title]}>
            {dict[contexts[5].description]}
          </Intro>
          <div className='component-demo-container'>
            <Align />
          </div>
          <DemoCode options={CodeTypeOptions} code={AlignDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[6].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[6].title]}>
            {dict[contexts[6].description]}
          </Intro>
          <div className='component-demo-container'>
            <Customization />
          </div>
          <DemoCode options={CodeTypeOptions} code={CustomizationDemoCode} />
        </div>
      </ScrollContainer>
    </>
  )
}

export default Breadcrumbs
