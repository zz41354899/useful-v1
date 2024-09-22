import Basic from '@/components/demo/button/Basic'
import BasicCode from '@/components/demo/button/Basic.tsx?raw'
import Outline from '@/components/demo/button/Outline'
import OutlineCode from '@/components/demo/button/Outline.tsx?raw'
import Disabled from '@/components/demo/button/Disabled'
import DisabledCode from '@/components/demo/button/Disabled.tsx?raw'
import Icon from '@/components/demo/button/Icon'
import IconCode from '@/components/demo/button/Icon.tsx?raw'
import Size from '@/components/demo/button/Size'
import SizeCode from '@/components/demo/button/Size.tsx?raw'
import { PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => (
  <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-4 p-4'>
    {children}
  </div>
)

export {
  Basic,
  BasicCode,
  Outline,
  OutlineCode,
  Disabled,
  DisabledCode,
  Icon,
  IconCode,
  Size,
  SizeCode,
}
