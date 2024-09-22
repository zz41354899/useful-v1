const Basic = () => {
  return (
    <article className='custom-card w-[375px]'>
      <img
        src='https://picsum.photos/375/200'
        className='custom-card-img'
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
      </section>
    </article>
  )
}

export default Basic
