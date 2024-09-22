import { CodeTypeOptions } from '@/helper/constants'
import { getDictionary } from '@/i18n/dictionaries'
import { IUIProps } from '@/type/common.type'
import { Level } from '@/type/enum.type'
import {
  BasicCode,
  Basic,
  WithAction,
  WithActionCode,
  WithBadge,
  WithBadgeCode,
  WithAvatar,
  WithAvatarCode,
} from '@/components/demo/card'
import DemoCode from '@/components/DemoCode'
import Intro from '@/components/Intro'
import ScrollContainer from '@/components/ScrollContainer'
import usePrettier from '@/util/hook/usePrettier'

interface IProps extends IUIProps {}

const Cards = async ({ params, contexts }: IProps) => {
  const dict = await getDictionary(params.lang)

  const BasicDemoCode = await usePrettier(BasicCode)
  const WithActionDemoCode = await usePrettier(WithActionCode)
  const WithBadgeDemoCode = await usePrettier(WithBadgeCode)
  const WithAvatarDemoCode = await usePrettier(WithAvatarCode)

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
          <div className='component-demo-container'>
            <WithAction />
          </div>
          <DemoCode options={CodeTypeOptions} code={WithActionDemoCode} />
        </div>
      </ScrollContainer>

      <ScrollContainer id={contexts[2].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[2].title]} />
          <div className='component-demo-container'>
            <WithBadge />
          </div>
          <DemoCode options={CodeTypeOptions} code={WithBadgeDemoCode} />
        </div>
      </ScrollContainer>

      <ScrollContainer id={contexts[3].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[3].title]} />
          <div className='component-demo-container'>
            <WithAvatar />
          </div>
          <DemoCode options={CodeTypeOptions} code={WithAvatarDemoCode} />
        </div>
      </ScrollContainer>
    </>
  )
}

export default Cards
