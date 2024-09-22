import Link from 'next/link'

const ErrorRedirect = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col gap-4 border'>
      <h1 className='custom-title1'>Something Error</h1>
      <Link className='custom-btn custom-btn-primary' href='/'>
        Redirect
      </Link>
    </div>
  )
}
export default ErrorRedirect
