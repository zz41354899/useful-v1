import { IUIProps } from '@/type/common.type'
import ScrollContainer from '@/components/ScrollContainer'
import { Level } from '@/type/enum.type'
import Intro from '@/components/Intro'
import { getDictionary } from '@/i18n/dictionaries'
import FilledText from '@/components/FilledText'
import DemoCode from '@/components/DemoCode'
import { CodeTypeOptions } from '@/helper/constants'
import {
  Basic,
  BasicCode,
  ImageAndText,
  ImageAndTextCode,
  WithColorCode,
  WithColor,
  WithImage,
  WithImageCode,
} from '@/components/demo/navbar'
import usePrettier from '@/util/hook/usePrettier'

interface IProps extends IUIProps {}

const NavigationBars = async ({ params, contexts }: IProps) => {
  const dict = await getDictionary(params.lang)

  const BasicDemoCode = await usePrettier(BasicCode)
  const ImageAndTextDemoCode = await usePrettier(ImageAndTextCode)
  const WithColorDemoCode = await usePrettier(WithColorCode)
  const WithImageDemoCode = await usePrettier(WithImageCode)

  return (
    <>
      <ScrollContainer id={contexts[0].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[0].title]}>
            <FilledText
              textKey={dict[contexts[0].description]}
              fillings={[
                <span key='.navbar' className='text-us-blue600'>
                  .navbar
                </span>,
              ]}
            />
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
            <FilledText
              textKey={dict[contexts[1].description]}
              fillings={['.navbar-begin', '<img>'].map((item) => (
                <span key={item} className='text-us-blue600'>
                  {item}
                </span>
              ))}
            />
          </Intro>
          <div className='component-demo-container'>
            <WithImage />
          </div>
          <DemoCode options={CodeTypeOptions} code={WithImageDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[2].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[2].title]}>
            {dict[contexts[2].description]}
          </Intro>
          <div className='overflow-x-auto'>
            <ImageAndText />
          </div>
          <DemoCode options={CodeTypeOptions} code={ImageAndTextDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[3].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[3].title]}>
            {dict[contexts[3].description]}
          </Intro>
          <div className='p-6 custom-body-content bg-us-orange100 rounded-lg'>
            {
              dict[
                'Sorry, this component is under construction and the functionality is not yet available.'
              ]
            }
            {/* TODO: 待 dropdown 完成後補上 */}
          </div>
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[4].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[4].title]}>
            {dict[contexts[4].description]}
          </Intro>
          <div className='component-demo-container'>
            <WithColor />
          </div>
          <DemoCode options={CodeTypeOptions} code={WithColorDemoCode} />
        </div>
      </ScrollContainer>
      <ScrollContainer id={contexts[5].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[5].title]}>
            {dict[contexts[5].description]}
          </Intro>
          <div className='p-6 custom-body-content bg-us-orange100 rounded-lg'>
            {
              dict[
                'Sorry, this component is under construction and the functionality is not yet available.'
              ]
            }
          </div>
        </div>
      </ScrollContainer>
    </>
  )
}

export default NavigationBars
