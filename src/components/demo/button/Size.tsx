import { Container } from '@/components/demo/button'

const Size = () => {
  return (
    <>
      <Container>
        <button className='custom-btn custom-btn-primary custom-subtitle2'>
          Larger
        </button>
        <button className='custom-btn custom-btn-md custom-btn-primary custom-body-content'>
          Medium
        </button>
        <button className='custom-btn custom-btn-sm custom-btn-primary custom-small'>
          Small
        </button>
      </Container>

      <Container>
        <button className='custom-btn custom-btn-dark custom-subtitle2'>
          Larger
        </button>
        <button className='custom-btn custom-btn-md custom-btn-dark custom-body-content'>
          Medium
        </button>
        <button className='custom-btn custom-btn-sm custom-btn-dark custom-small'>
          Small
        </button>
      </Container>

      <Container>
        <button className='custom-btn custom-btn-border custom-btn-primary custom-subtitle2'>
          Larger
        </button>
        <button className='custom-btn custom-btn-md custom-btn-border custom-btn-primary custom-body-content'>
          Medium
        </button>
        <button className='custom-btn custom-btn-sm custom-btn-border custom-btn-primary custom-small'>
          Small
        </button>
      </Container>

      <Container>
        <button className='custom-btn custom-btn-primary custom-btn-disabled custom-subtitle2'>
          Disabled
        </button>
        <button className='custom-btn custom-btn-md custom-btn-primary custom-btn-disabled custom-body-content'>
          Disabled
        </button>
        <button className='custom-btn custom-btn-sm custom-btn-primary custom-btn-disabled custom-small'>
          Disabled
        </button>
      </Container>

      <Container>
        <button className='custom-btn custom-btn-primary custom-subtitle2'>
          <span className='us-icon us-download mr-1'></span>
          Download
        </button>
        <button className='custom-btn custom-btn-md custom-btn-primary custom-body-content'>
          <span className='us-icon us-download mr-1'></span>
          Download
        </button>
        <button className='custom-btn custom-btn-sm custom-btn-primary custom-small'>
          <span className='us-icon us-download mr-1'></span>
          Download
        </button>
      </Container>

      <Container>
        <button className='custom-btn custom-btn-error custom-subtitle2'>
          Error
        </button>
        <button className='custom-btn custom-btn-md custom-btn-error custom-body-content'>
          Error
        </button>
        <button className='custom-btn custom-btn-sm custom-btn-error custom-small'>
          Error
        </button>
      </Container>

      <Container>
        <button className='custom-btn custom-btn-primary custom-btn-disabled custom-subtitle2'>
          Loading...
        </button>
        <button className='custom-btn custom-btn-md custom-btn-primary custom-btn-disabled custom-body-content'>
          Loading...
        </button>
        <button className='custom-btn custom-btn-sm custom-btn-primary custom-btn-disabled custom-small'>
          Loading...
        </button>
      </Container>

      <Container>
        <button className='custom-btn custom-btn-block custom-btn-primary custom-subtitle2'>
          Block Button
        </button>
        <button className='custom-btn custom-btn-block custom-btn-dark custom-subtitle2'>
          Block Button
        </button>
      </Container>
    </>
  )
}

export default Size
