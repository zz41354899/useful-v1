import Basic from '@/components/demo/navbar/Basic'
import BasicCode from '@/components/demo/navbar/Basic.tsx?raw'
import WithImage from '@/components/demo/navbar/WithImage'
import WithImageCode from '@/components/demo/navbar/WithImage.tsx?raw'
import ImageAndText from '@/components/demo/navbar/ImageAndText'
import ImageAndTextCode from '@/components/demo/navbar/ImageAndText.tsx?raw'
import WithDropdown from '@/components/demo/navbar/WithDropdown'
import WithDropdownCode from '@/components/demo/navbar/WithDropdown.tsx?raw'
import WithColor from '@/components/demo/navbar/WithColor'
import WithColorCode from '@/components/demo/navbar/WithColor.tsx?raw'

export const NavBegin = ({ logoColor = 'white' }: { logoColor?: string }) => (
  <div className='custom-navbar-begin flex items-center gap-x-2.5'>
    <img
      src={`https://useful-ui.huang-design.work/component-demo-assets/navigation-bar/logo${logoColor === 'white' ? '-white' : ''}.svg`}
      alt='icon'
    />
    <span className='custom-title3'>Useful</span>
  </div>
)

export const NavItems = () => (
  <ul className='custom-navbar-items flex items-center gap-x-8 custom-body-content'>
    <li>
      <a href='#'>Home</a>
    </li>
    <li>
      <a href='#'>About</a>
    </li>
    <li>
      <a href='#'>Product</a>
    </li>
    <li>
      <a href='#'>Contact</a>
    </li>
  </ul>
)

export const NavEnd = () => (
  <section className='custom-navbar-end'>
    <img
      src='https://useful-ui.huang-design.work/component-demo-assets/navigation-bar/avatar.jpeg'
      className='size-8 rounded-full object-cover'
      alt=''
    />
  </section>
)

export {
  Basic,
  BasicCode,
  WithImage,
  WithImageCode,
  ImageAndText,
  ImageAndTextCode,
  WithDropdown,
  WithDropdownCode,
  WithColor,
  WithColorCode,
}
