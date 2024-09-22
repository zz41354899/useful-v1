import { CodeTypeOptions } from '@/helper/constants'
import { getDictionary } from '@/i18n/dictionaries'
import { IUIProps } from '@/type/common.type'
import { Level } from '@/type/enum.type'
import {
  BasicCode,
  Basic,
  WrappedLabel,
  WrappedLabelCode,
  RadioTabsBoxedTabContent,
  RadioTabsBoxedTabContentCode,
  AlignCode,
  Align,
} from '@/components/demo/tabs'
import DemoCode from '@/components/DemoCode'
import Intro from '@/components/Intro'
import ScrollContainer from '@/components/ScrollContainer'
import FilledText from '@/components/FilledText'
import usePrettier from '@/util/hook/usePrettier'

interface IProps extends IUIProps {}
const Tabs = async ({ params, contexts }: IProps) => {
  const dict = await getDictionary(params.lang)

  const BasicDemoCode = await usePrettier(BasicCode)
  const WrappedLabelDemoCode = await usePrettier(WrappedLabelCode)
  const RadioTabsBoxedTabContentDemoCode = await usePrettier(
    RadioTabsBoxedTabContentCode
  )
  const AlignDemoCode = await usePrettier(AlignCode)

  return (
    <>
      <ScrollContainer id={contexts[0].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[0].title]}>
            {dict[contexts[0].description]}
          </Intro>
          <div className='component-demo-container custom-subtitle2'>
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
          <div className='component-demo-container custom-subtitle2'>
            <WrappedLabel />
          </div>
          <DemoCode options={CodeTypeOptions} code={WrappedLabelDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[2].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[2].title]}>
            <FilledText
              textKey={dict[contexts[2].description]}
              fillings={[
                <span key='.tab-boxed' className='text-us-blue600'>
                  .tab-boxed
                </span>,
              ]}
            />
          </Intro>
          <div className='component-demo-container custom-subtitle2'>
            <RadioTabsBoxedTabContent />
          </div>
          <DemoCode
            options={CodeTypeOptions}
            code={RadioTabsBoxedTabContentDemoCode}
          />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[3].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[3].title]}>
            {dict[contexts[3].description]}
          </Intro>
          <div className='component-demo-container custom-subtitle2'>
            <Align />
          </div>
          <DemoCode options={CodeTypeOptions} code={AlignDemoCode} />
        </div>
      </ScrollContainer>
    </>
  )
}

export default Tabs
