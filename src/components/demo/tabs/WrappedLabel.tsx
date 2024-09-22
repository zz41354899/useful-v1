const WrappedLabel = () => {
  return (
    <div className='custom-tab-list w-full sm:w-1/2'>
      <button className='custom-tab custom-tab-active'>
        The label length should be kept under 20 characters; otherwise, it will
        be difficult to read and will be automatically wrapped.
      </button>
      <button className='custom-tab'>Tab B</button>
      <button className='custom-tab'>Tab C</button>
    </div>
  )
}

export default WrappedLabel
