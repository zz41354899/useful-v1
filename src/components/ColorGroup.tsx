import { COLOR_TOKEN } from '@/helper/config/color'

const ColorGroup = ({
  palette,
}: {
  palette: {
    prefix: string
    tokens: string[]
  }[]
}) => {
  return (
    <div className='flex flex-col gap-10'>
      {palette.map(({ prefix, tokens }, index, array) => (
        <>
          {array.length > 1 && <hr className='border border-gray-200' />}
          <div
            className='flex overflow-x-auto scrollbar pb-2 max-w-[1178px] gap-3'
            key={prefix}
          >
            {tokens.map((token) => (
              <div className='flex flex-col gap-2' key={token}>
                <div
                  style={{ backgroundColor: COLOR_TOKEN[token] }}
                  className='w-[132px] h-[80px]'
                ></div>
                <p className='custom-subtitle2'>{token.replace('--us-', '')}</p>
                <p className='custom-body-content'>
                  {COLOR_TOKEN[token].toUpperCase()}
                </p>
              </div>
            ))}
          </div>
          {index === array.length - 1 && array.length > 1 && (
            <hr className='border border-gray-200' />
          )}
        </>
      ))}
    </div>
  )
}

export default ColorGroup
