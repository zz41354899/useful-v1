import { NavBegin, NavItems, NavEnd } from '@/components/demo/navbar'

const WithColor = () => {
  return (
    <>
      <nav className='custom-navbar bg-us-blue600 text-white'>
        <NavBegin />
        <NavItems />
        <NavEnd />
      </nav>
      <nav className='custom-navbar bg-us-gray100'>
        <NavBegin logoColor='black' />
        <NavItems />
        <NavEnd />
      </nav>
      <nav className='custom-navbar bg-us-gray600 text-white'>
        <NavBegin />
        <NavItems />
        <NavEnd />
      </nav>
      <nav className='custom-navbar bg-us-gray1100 text-white'>
        <NavBegin />
        <NavItems />
        <NavEnd />
      </nav>
    </>
  )
}

export default WithColor
