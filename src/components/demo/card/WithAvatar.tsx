const WithAvatar = () => {
  return (
    <article className='custom-card w-[375px]'>
      <div className='flex items-center px-6 py-5'>
        <img
          src='https://useful-ui.huang-design.work/component-demo-assets/sidebar/avatar.jpeg'
          className='size-7 shrink-0 rounded-full object-cover'
          alt=''
        />
        <h2 className='ml-3 subtitle1'>Title</h2>
      </div>
      <img
        src='https://picsum.photos/375/200'
        className=''
        width={375}
        height={200}
        alt=''
      />
      <section className='custom-card-body'>
        <h2 className='custom-card-title'>Heading</h2>
        <p className='custom-card-description'>
          Lorem ipsum dolor sit amet consectetur. Nam consectetur facilisis
          vulputate aliquam.
        </p>
        <div className='custom-card-actions'>
          <button className='custom-btn custom-btn-md custom-btn-block custom-btn-primary'>Action</button>
          <button className='custom-btn custom-btn-md custom-btn-block'>Cancel</button>
        </div>
      </section>
    </article>
  )
}

export default WithAvatar
