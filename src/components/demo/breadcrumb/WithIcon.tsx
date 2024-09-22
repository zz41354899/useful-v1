const WithIcon = () => {
  return (
    <div className='flex justify-center px-6 py-4'>
      <ol className='custom-breadcrumb small'>
        <li className='custom-breadcrumb-item custom-breadcrumb-item-with-delimiter flex items-center'>
          <a href='#' className='custom-breadcrumb-link'>
            <i className='us-icon us-home' />
            <span>Home</span>
          </a>
        </li>
        <li className='custom-breadcrumb-item custom-breadcrumb-item-with-delimiter'>
          <a href='#' className='custom-breadcrumb-link'>
            <i className='us-icon us-help' />
            <span>Development</span>
          </a>
        </li>
        <li className='custom-breadcrumb-item'>
          <i className='us-icon us-mic'></i>
          <span>Breadcrumbs</span>
        </li>
      </ol>
    </div>
  )
}

export default WithIcon
