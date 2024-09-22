
const WithDropdown = () => {
  return (
    <nav className='custom-navbar bg-us-gray100'>
      <div className='custom-navbar-begin flex items-center gap-x-2.5'>
        <img
          src='https://useful-ui.huang-design.work/component-demo-assets/navigation-bar/logo.svg'
          width={32}
          height={36}
          alt='icon'
        />
        <span className='custom-title3'>Useful</span>
      </div>
      <ul className='custom-navbar-items flex items-center gap-x-3 custom-body-content'>
        <li>
          <a href='#'>About</a>
        </li>
        <li className="">
          <a href='#'>Contact</a>
        </li>
      </ul>
      <section className='custom-navbar-end flex custom-navbar-item-with-dropdown'>
        <img
          src='https://useful-ui.huang-design.work/component-demo-assets/navigation-bar/avatar.jpeg'
          className='size-8 rounded-full object-cover'
          alt=''
        />
      </section>
    </nav>
  )
}

export default WithDropdown
