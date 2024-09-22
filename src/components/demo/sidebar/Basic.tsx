import { Logo, SidebarEnd } from '@/components/demo/sidebar'

const Basic = () => {
  return (
    <>
      <div className='custom-sidebar-container w-60 h-screen rounded-lg'>
        <div className='custom-sidebar-begin gap-x-2'>
          <Logo />
          <p className='text-black custom-title3 custom-sidebar-item-content'>
            Useful
          </p>
        </div>
        <nav className='custom-sidebar-list'>
          <a
            href='#'
            className='custom-sidebar-item custom-sidebar-item-active'
          >
            <i className='us-icon us-home text-2xl' />
            <p className='custom-sidebar-item-content'>Dashboard</p>
          </a>
          <a href='#' className='custom-sidebar-item'>
            <i className='us-icon us-file text-2xl' />
            <p className='custom-sidebar-item-content'>Task</p>
          </a>
          <a href='#' className='custom-sidebar-item'>
            <i className='us-icon us-calendar text-2xl' />
            <p className='custom-sidebar-item-content'>Calendar</p>
          </a>
          <a href='#' className='custom-sidebar-item'>
            <i className='us-icon us-notification text-2xl' />
            <p className='custom-sidebar-item-content'>Notification</p>
          </a>
          <section className='custom-sidebar-end'>
            <SidebarEnd />
          </section>
        </nav>
      </div>
      <div className='custom-sidebar-container custom-sidebar-icons h-screen rounded-lg'>
        <div className='custom-sidebar-begin gap-x-2'>
          <Logo />
          <p className='text-black custom-title3 custom-sidebar-item-content'>
            Useful
          </p>
        </div>
        <nav className='custom-sidebar-list'>
          <a
            href='#'
            className='custom-sidebar-item custom-sidebar-item-active'
          >
            <i className='us-icon us-home text-2xl' />
            <p className='custom-sidebar-item-content'>Dashboard</p>
          </a>
          <a href='#' className='custom-sidebar-item'>
            <i className='us-icon us-file text-2xl' />
            <p className='custom-sidebar-item-content'>Task</p>
          </a>
          <a href='#' className='custom-sidebar-item'>
            <i className='us-icon us-calendar text-2xl' />
            <p className='custom-sidebar-item-content'>Calendar</p>
          </a>
          <a href='#' className='custom-sidebar-item'>
            <i className='us-icon us-notification text-2xl' />
            <p className='custom-sidebar-item-content'>Notification</p>
          </a>
          <section className='custom-sidebar-end'>
            <SidebarEnd />
          </section>
        </nav>
      </div>
      <div className='custom-sidebar-container w-60 h-screen rounded-lg bg-us-blue1100'>
        <div className='custom-sidebar-begin gap-x-2'>
          <Logo theme='dark' />
          <p className='text-white custom-title3 custom-sidebar-item-content'>
            Useful
          </p>
        </div>
        <nav className='custom-sidebar-list text-white'>
          <a
            href='#'
            className='custom-sidebar-item custom-sidebar-item-active text-white'
          >
            <i className='us-icon us-home text-2xl' />
            <p className='custom-sidebar-item-content'>Dashboard</p>
          </a>
          <a href='#' className='custom-sidebar-item'>
            <i className='us-icon us-file text-2xl' />
            <p className='custom-sidebar-item-content'>Task</p>
          </a>
          <a href='#' className='custom-sidebar-item'>
            <i className='us-icon us-calendar text-2xl' />
            <p className='custom-sidebar-item-content'>Calendar</p>
          </a>
          <a href='#' className='custom-sidebar-item'>
            <i className='us-icon us-notification text-2xl' />
            <p className='custom-sidebar-item-content'>Notification</p>
          </a>
          <section className='custom-sidebar-end'>
            <SidebarEnd />
          </section>
        </nav>
      </div>

      <div className='custom-sidebar-container custom-sidebar-icons h-screen  rounded-lg bg-us-blue1100'>
        <div className='custom-sidebar-begin gap-x-2'>
          <Logo theme='dark' />
          <p className='text-black custom-title3 custom-sidebar-item-content'>
            Useful
          </p>
        </div>
        <nav className='custom-sidebar-list text-white'>
          <a
            href='#'
            className='custom-sidebar-item custom-sidebar-item-active'
          >
            <i className='us-icon us-home text-2xl' />
            <p className='custom-sidebar-item-content'>Dashboard</p>
          </a>
          <a href='#' className='custom-sidebar-item'>
            <i className='us-icon us-file text-2xl' />
            <p className='custom-sidebar-item-content'>Task</p>
          </a>
          <a href='#' className='custom-sidebar-item'>
            <i className='us-icon us-calendar text-2xl' />
            <p className='custom-sidebar-item-content'>Calendar</p>
          </a>
          <a href='#' className='custom-sidebar-item'>
            <i className='us-icon us-notification text-2xl' />
            <p className='custom-sidebar-item-content'>Notification</p>
          </a>
          <section className='custom-sidebar-end'>
            <SidebarEnd />
          </section>
        </nav>
      </div>
    </>
  )
}

export default Basic
