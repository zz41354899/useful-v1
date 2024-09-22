import { CodeTypeOptions } from '@/helper/constants'
import { getDictionary } from '@/i18n/dictionaries'
import { IUIProps } from '@/type/common.type'
import { Level } from '@/type/enum.type'
import {
  BasicCode,
  Basic,
  Feedback,
  FeedbackCode,
  Disabled,
  DisabledCode,
  Customization,
  CustomizationCode,
  Size,
  SizeCode,
  Half,
  HalfCode,
} from '@/components/demo/ratingBar'
import DemoCode from '@/components/DemoCode'
import Intro from '@/components/Intro'
import ScrollContainer from '@/components/ScrollContainer'
import usePrettier from '@/util/hook/usePrettier'

interface IProps extends IUIProps {}
const RatingBars = async ({ params, contexts }: IProps) => {
  const dict = await getDictionary(params.lang)

  const BasicDemoCode = await usePrettier(BasicCode)
  const FeedbackDemoCode = await usePrettier(FeedbackCode)
  const DisabledDemoCode = await usePrettier(DisabledCode)
  const CustomizationDemoCode = await usePrettier(CustomizationCode)
  const SizeDemoCode = await usePrettier(SizeCode)
  const HalfDemoCode = await usePrettier(HalfCode)

  return (
    <>
      <ScrollContainer id={contexts[0].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[0].title]} />
          <div className='component-demo-container'>
            <Basic />
          </div>
          <DemoCode options={CodeTypeOptions} code={BasicDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[1].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[1].title]} />
          <div className='component-demo-container flex-col items-center'>
            <Feedback />
          </div>
          <DemoCode options={CodeTypeOptions} code={FeedbackDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[2].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[2].title]} />
          <div className='component-demo-container  flex-col items-center'>
            <Disabled />
          </div>
          <DemoCode options={CodeTypeOptions} code={DisabledDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[3].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[3].title]} />
          <div className='component-demo-container  flex-col items-center'>
            <Customization />
          </div>
          <DemoCode options={CodeTypeOptions} code={CustomizationDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[4].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[4].title]} />
          <div className='overflow-x-auto flex flex-wrap justify-center gap-x-6 gap-y-8 p-4 flex-col items-center'>
            <Size />
          </div>
          <DemoCode options={CodeTypeOptions} code={SizeDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[5].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[5].title]} />
          <div className='overflow-x-auto flex flex-wrap justify-center gap-x-6 gap-y-8 p-4 flex-col items-center'>
            <Half />
          </div>
          <DemoCode options={CodeTypeOptions} code={HalfDemoCode} />
        </div>
      </ScrollContainer>
    </>
  )
}

export default RatingBars
