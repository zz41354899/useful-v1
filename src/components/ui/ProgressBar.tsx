import { IUIProps } from '@/type/common.type'
import ScrollContainer from '@/components/ScrollContainer'
import { getDictionary } from '@/i18n/dictionaries'
import { Level } from '@/type/enum.type'
import Intro from '@/components/Intro'
import { CodeTypeOptions } from '@/helper/constants'
import DemoCode from '@/components/DemoCode'
import {
  Basic,
  BasicCode,
  Height,
  HeightCode,
  Rounded,
  RoundedCode,
  Background,
  BackgroundCode,
} from '@/components/demo/progressBar'
import usePrettier from '@/util/hook/usePrettier'

interface IProps extends IUIProps {}

const ProgressBar = async ({ params, contexts }: IProps) => {
  const dict = await getDictionary(params.lang)
  const BasicDemoCode = await usePrettier(BasicCode)
  const HeightDemoCode = await usePrettier(HeightCode)
  const RoundedDemoCode = await usePrettier(RoundedCode)
  const BackgroundDemoCode = await usePrettier(BackgroundCode)

  return (
    <>
      <ScrollContainer id={contexts[0].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[0].title]} />
          <div className='component-demo-container items-start'>
            <Basic />
          </div>
          <DemoCode options={CodeTypeOptions} code={BasicDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[1].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[1].title]} />
          <div className='component-demo-container'>
            <Height />
          </div>
          <DemoCode options={CodeTypeOptions} code={HeightDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[2].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[2].title]} />
          <div className='component-demo-container items-start'>
            <Rounded />
          </div>
          <DemoCode options={CodeTypeOptions} code={RoundedDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[3].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[3].title]} />
          <div className='component-demo-container items-start'>
            <Background />
          </div>
          <DemoCode options={CodeTypeOptions} code={BackgroundDemoCode} />
        </div>
      </ScrollContainer>
    </>
  )
}

export default ProgressBar
