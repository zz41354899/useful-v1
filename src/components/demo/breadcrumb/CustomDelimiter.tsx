const CustomDelimiter = () => {
  return (
    <>
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
        <li className='custom-breadcrumb-item'>Breadcrumbs</li>
      </ol>

      <ol className='custom-breadcrumb'>
        <li className='custom-breadcrumb-item'>
          <a href='#' className='custom-breadcrumb-link'>
            Home
          </a>
          <span className='ml-[--gap]'>-</span>
        </li>
        <li className='custom-breadcrumb-item'>
          <a href='#' className='custom-breadcrumb-link'>
            Development
          </a>
          <span className='ml-[--gap]'>-</span>
        </li>
        <li className='custom-breadcrumb-item'>Breadcrumbs</li>
      </ol>

      <ol className='custom-breadcrumb'>
        <li className='custom-breadcrumb-item'>
          <a href='#' className='custom-breadcrumb-link'>
            Home
          </a>
          <span className='ml-[--gap]'>{'›'}</span>
        </li>
        <li className='custom-breadcrumb-item'>
          <a href='#' className='custom-breadcrumb-link'>
            Development
          </a>
          <span className='ml-[--gap]'>{'›'}</span>
        </li>
        <li className='custom-breadcrumb-item'>Breadcrumbs</li>
      </ol>
    </>
  )
}

export default CustomDelimiter
