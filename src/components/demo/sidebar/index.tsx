import Basic from '@/components/demo/sidebar/Basic'
import BasicCode from '@/components/demo/sidebar/Basic.tsx?raw'

export { Basic, BasicCode }

export const Logo = ({ theme = 'light' }: { theme?: string }) => (
  <img
    src={`https://useful-ui.huang-design.work/component-demo-assets/navigation-bar/${theme === 'dark' ? 'logo-white' : 'logo'}.svg`}
    width={32}
    height={36}
    alt='icon'
  />
)

export const SidebarEnd = () => (
  <a href='#' className='flex items-center gap-x-4 py-4 pl-4'>
    <img
      src='https://useful-ui.huang-design.work/component-demo-assets/sidebar/avatar.jpeg'
      className='size-7 shrink-0 rounded-full object-cover'
      alt='icon'
    />
    <p className='custom-sidebar-item-content flex flex-col'>
      <span className='custom-body-content'>Useful Design</span>
      <span className='text-us-gray600 custom-small'>us3840506@gmail.com</span>
    </p>
  </a>
)
