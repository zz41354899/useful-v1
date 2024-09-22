import { IUIProps } from '@/type/common.type'
import ScrollContainer from '@/components/ScrollContainer'
import { getDictionary } from '@/i18n/dictionaries'
import { Level } from '@/type/enum.type'
import Intro from '@/components/Intro'
import { CodeTypeOptions } from '@/helper/constants'
import { Basic, BasicCode } from '@/components/demo/sidebar'
import DemoCode from '@/components/DemoCode'
import usePrettier from '@/util/hook/usePrettier'

interface IProps extends IUIProps {}

const Sidebars = async ({ params, contexts }: IProps) => {
  const dict = await getDictionary(params.lang)
  const BasicDemoCode = await usePrettier(BasicCode)
  return (
    <>
      <ScrollContainer id={contexts[0].title}>
        <div className='flex flex-col gap-4'>
          <Intro level={Level.second} name={dict[contexts[0].title]}>
            {/* TODO: 請 PM 重新制定文案 */}
            使用 .sidebar-container, .sidebar-begin, .sidebar-end,
            .sidebar-list, .sidebar-item, .sidebar-item-active 作側邊欄。 使用
            .sidebar-icons, .sidebar-content 作只有 icon 顯示的側邊欄。
          </Intro>
          <div className='component-demo-container custom-subtitle2 flex-row'>
            <Basic />
          </div>
          <DemoCode options={CodeTypeOptions} code={BasicDemoCode} />
        </div>
      </ScrollContainer>
    </>
  )
}

export default Sidebars
