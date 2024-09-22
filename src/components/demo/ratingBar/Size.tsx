import { StarIconSvg } from '@/components/demo/ratingBar'

const Size = () => {
  return (
    <>
      <div className='custom-rating-items-sm custom-rating-items-primary'>
        <StarIconSvg className='custom-rating-item-active' />
        <StarIconSvg className='custom-rating-item-active' />
        <StarIconSvg className='custom-rating-item-active' />
        <StarIconSvg className='custom-rating-item' />
        <StarIconSvg className='custom-rating-item' />
      </div>
      <div className='custom-rating-items-base custom-rating-items-primary'>
        <StarIconSvg className='custom-rating-item-active' />
        <StarIconSvg className='custom-rating-item-active' />
        <StarIconSvg className='custom-rating-item-active' />
        <StarIconSvg className='custom-rating-item' />
        <StarIconSvg className='custom-rating-item' />
      </div>
      <div className='custom-rating-items-lg custom-rating-items-primary'>
        <StarIconSvg className='custom-rating-item-active' />
        <StarIconSvg className='custom-rating-item-active' />
        <StarIconSvg className='custom-rating-item-active' />
        <StarIconSvg className='custom-rating-item' />
        <StarIconSvg className='custom-rating-item' />
      </div>
    </>
  )
}

export default Size
