import { IUIProps } from '@/type/common.type'
import ScrollContainer from '@/components/ScrollContainer'
import { getDictionary } from '@/i18n/dictionaries'
import { UI_CONTENT_LIST } from '@/helper/config/uiContext'
import { Level } from '@/type/enum.type'
import Intro from '@/components/Intro'
import FontSizeErrorImg from '/public/img/layout/font_size_error.jpg'
import FontSizeCorrectImg from '/public/img/layout/font_size_correct.jpg'
import SidebarLayoutImg from '/public/img/layout/sidebar_layout.jpg'
import SpacingUnitsCorrectImg from '/public/img/layout/spacing_units_correct.jpg'
import SpacingUnitsErrorImg from '/public/img/layout/spacing_units_error.jpg'
import TopBottomLayoutImg from '/public/img/layout/top_bottom_layout.jpg'
import Image from 'next/image'
import ErrorIcon from '/public/img/icons/Error.svg'
import DoneIcon from '/public/img/icons/Done.svg'

interface IProps extends IUIProps {}
const Layouts = async ({ params, contexts }: IProps) => {
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
      <ScrollContainer id={contexts[1].title}>
        <Intro level={Level.second} name={dict[contexts[1].title]}>
          <ul className='flex flex-col gap-4'>
            {UI_CONTENT_LIST[params.ui][1].description.map((text) => (
              <li key={text}>{dict[text]}</li>
            ))}
          </ul>
        </Intro>
      </ScrollContainer>
      <Intro
        level={Level.third}
        name={`1. ${dict[UI_CONTENT_LIST[params.ui][2].title]}`}
      >
        {dict[UI_CONTENT_LIST[params.ui][2].description[0]]}
      </Intro>
      <Image
        src={SidebarLayoutImg}
        width={0}
        height={0}
        className='w-full sm:w-1/2'
        alt={dict[UI_CONTENT_LIST[params.ui][2].title]}
      />
      <Intro
        level={Level.third}
        name={`2. ${dict[UI_CONTENT_LIST[params.ui][3].title]}`}
      >
        {dict[UI_CONTENT_LIST[params.ui][3].description[0]]}
      </Intro>
      <Image
        src={TopBottomLayoutImg}
        width={0}
        height={0}
        className='w-full sm:w-1/2'
        alt={dict[UI_CONTENT_LIST[params.ui][3].title]}
      />

      <p className='custom-body-content'>
        {
          dict[
            'Above are two common webpage layout approaches, providing inspiration for engineers or developers in their designs to create a beautiful webpage.'
          ]
        }
      </p>
      <ScrollContainer id={contexts[2].title}>
        <Intro level={Level.second} name={dict[contexts[2].title]}>
          <ul className='flex flex-col gap-4'>
            {UI_CONTENT_LIST[params.ui][4].description.map((text) => (
              <li key={text}>{dict[text]}</li>
            ))}
          </ul>
        </Intro>
      </ScrollContainer>
      <Intro
        level={Level.third}
        name={`1. ${dict[UI_CONTENT_LIST[params.ui][5].title]}`}
      >
        <div className='flex gap-10 custom-small'>
          <div className='w-1/2 sm:w-1/4 flex flex-col gap-5'>
            <Image
              src={SpacingUnitsCorrectImg}
              width={0}
              height={0}
              className='w-full'
              alt={dict[UI_CONTENT_LIST[params.ui][5].description[0]]}
            />
            <p className='flex gap-2 items-center'>
              <Image src={DoneIcon} alt='done' width={33} height={33} />
              {dict[UI_CONTENT_LIST[params.ui][5].description[0]]}
            </p>
          </div>
          <div className='w-1/2 sm:w-1/4 flex flex-col gap-5'>
            <Image
              src={SpacingUnitsErrorImg}
              width={0}
              height={0}
              className='w-full'
              alt={dict[UI_CONTENT_LIST[params.ui][5].description[1]]}
            />
            <p className='flex gap-2 items-center'>
              <Image src={ErrorIcon} alt='done' width={33} height={33} />
              {dict[UI_CONTENT_LIST[params.ui][5].description[1]]}
            </p>
          </div>
        </div>
      </Intro>
      <Intro
        level={Level.third}
        name={`2. ${dict[UI_CONTENT_LIST[params.ui][6].title]}`}
      >
        <div className='flex gap-10 custom-small'>
          <div className='w-1/2 sm:w-1/4 flex flex-col gap-5'>
            <Image
              src={FontSizeCorrectImg}
              width={0}
              height={0}
              className='w-full'
              alt={dict[UI_CONTENT_LIST[params.ui][6].description[0]]}
            />
            <p className='flex gap-2 items-center'>
              <Image src={DoneIcon} alt='done' width={33} height={33} />
              {dict[UI_CONTENT_LIST[params.ui][6].description[0]]}
            </p>
          </div>
          <div className='w-1/2 sm:w-1/4 flex flex-col gap-5'>
            <Image
              src={FontSizeErrorImg}
              width={0}
              height={0}
              className='w-full'
              alt={dict[UI_CONTENT_LIST[params.ui][6].description[1]]}
            />
            <p className='flex gap-2 items-center'>
              <Image src={ErrorIcon} alt='done' width={33} height={33} />
              {dict[UI_CONTENT_LIST[params.ui][6].description[1]]}
            </p>
          </div>
        </div>
      </Intro>
    </>
  )
}

export default Layouts
