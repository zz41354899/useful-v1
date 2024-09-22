'use client'

interface IProps {
  error: Error & { digest?: string }
  reset: () => void
}

const GlobalError = ({ error, reset }: IProps) => {
  console.log(error)

  return (
    <html>
      <body>
        <h2>Something Wrong</h2>
        <button onClick={reset}>Try Again</button>
      </body>
    </html>
  )
}

export default GlobalError
