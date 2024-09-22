const Tabs = () => (
  <div className='custom-tab-list w-1/2'>
    <button className='custom-tab custom-tab-active'>Tab A</button>
    <button className='custom-tab'>Tab B</button>
    <button className='custom-tab'>Tab C</button>
  </div>
)

const Align = () => {
  return (
    <>
      <div className='flex justify-start w-full'>
        <Tabs />
      </div>
      <div className='flex justify-center w-full'>
        <Tabs />
      </div>
      <div className='flex justify-end w-full'>
        <Tabs />
      </div>
    </>
  )
}

export default Align
