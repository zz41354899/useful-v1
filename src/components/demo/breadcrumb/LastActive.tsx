const LastActive = () => {
  return (
    <ol className='custom-breadcrumb'>
      <li className='custom-breadcrumb-item custom-breadcrumb-item-with-delimiter'>
        <a href='#' className='custom-breadcrumb-link'>
          Home
        </a>
      </li>
      <li className='custom-breadcrumb-item custom-breadcrumb-item-with-delimiter'>
        <a href='#' className='custom-breadcrumb-link'>
          Development
        </a>
      </li>
      <li className='custom-breadcrumb-item custom-breadcrumb-item-active'>Breadcrumbs</li>
    </ol>
  )
}

export default LastActive
