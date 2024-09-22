const Breadcrumb = () => (
  <ol className='custom-breadcrumb small'>
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

const Align = () => {
  return (
    <>
      <div className='flex justify-start'>
        <Breadcrumb />
      </div>
      <div className='flex justify-center'>
        <Breadcrumb />
      </div>
      <div className='flex justify-end'>
        <Breadcrumb />
      </div>
    </>
  )
}

export default Align
