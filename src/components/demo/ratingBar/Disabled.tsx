import { StarIconSvg } from '@/components/demo/ratingBar'

const Disabled = () => {
  return (
    <div className='custom-rating-items-base custom-rating-items-primary'>
      <StarIconSvg className='custom-rating-item-active custom-rating-item-disabled' />
      <StarIconSvg className='custom-rating-item-active custom-rating-item-disabled' />
      <StarIconSvg className='custom-rating-item custom-rating-item-disabled' />
      <StarIconSvg className='custom-rating-item custom-rating-item-disabled' />
      <StarIconSvg className='custom-rating-item custom-rating-item-disabled' />
    </div>
  )
}

export default Disabled
