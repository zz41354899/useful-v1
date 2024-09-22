import { StarIconSvg } from '@/components/demo/ratingBar'

const Half = () => {
  return (
    <>
      <div className='custom-rating-items-base custom-rating-items-primary'>
        <StarIconSvg className='custom-rating-item-active' />
        <StarIconSvg className='custom-rating-item-active' />
        <div className='custom-rating-item-half'>
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item' />
        </div>
        <StarIconSvg className='custom-rating-item' />
        <StarIconSvg className='custom-rating-item' />
      </div>
      <div className='custom-rating-items-base custom-rating-items-primary'>
        <i className='us-icon us-battery custom-rating-item-active' />
        <i className='us-icon us-battery custom-rating-item-active' />
        <div className='custom-rating-item-half'>
          <i className='us-icon us-battery custom-rating-item-active' />
          <i className='us-icon us-battery custom-rating-item' />
        </div>
        <i className='us-icon us-battery custom-rating-item' />
        <i className='us-icon us-battery custom-rating-item' />
      </div>
    </>
  )
}

export default Half
