import { StarIconSvg } from '@/components/demo/ratingBar'
const Feedback = () => {
  return (
    <>
      <div className='custom-rating'>
        <p className='custom-rating-feedback'>Worst</p>
        <div className='custom-rating-items-base custom-rating-items-primary'>
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item' />
          <StarIconSvg className='custom-rating-item' />
          <StarIconSvg className='custom-rating-item' />
          <StarIconSvg className='custom-rating-item' />
        </div>
      </div>

      <div className='custom-rating'>
        <p className='custom-rating-feedback'>Poor</p>
        <div className='custom-rating-items-base custom-rating-items-primary'>
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item' />
          <StarIconSvg className='custom-rating-item' />
          <StarIconSvg className='custom-rating-item' />
        </div>
      </div>

      <div className='custom-rating'>
        <p className='custom-rating-feedback'>Good</p>
        <div className='custom-rating-items-base custom-rating-items-primary'>
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item' />
          <StarIconSvg className='custom-rating-item' />
        </div>
      </div>

      <div className='custom-rating'>
        <p className='custom-rating-feedback'>Great</p>
        <div className='custom-rating-items-base custom-rating-items-primary'>
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item' />
        </div>
      </div>

      <div className='custom-rating'>
        <p className='custom-rating-feedback'>Perfect</p>
        <div className='custom-rating-items-base custom-rating-items-primary'>
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item-active' />
          <StarIconSvg className='custom-rating-item-active' />
        </div>
      </div>
    </>
  )
}

export default Feedback
