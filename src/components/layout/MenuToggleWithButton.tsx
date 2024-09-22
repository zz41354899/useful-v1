'use client'
import { ReactNode, useEffect, useState } from 'react'
import MenuToggleIcon from '/public/img/icons/MenuToggle.svg'
import Image from 'next/image'
import useViewport from '@/util/hook/useViewport'
import CloseIcon from '/public/img/icons/Close.svg'

interface IProps {
  children: ReactNode
}

const MenuToggleWithButton = ({ children }: IProps) => {
  const [isMenuShown, setIsMenuShown] = useState<Boolean>(false)
  const { device } = useViewport()

  useEffect(() => {
    setIsMenuShown(false)
  }, [device])

  return (
    <>
      <Image
        onClick={() => {
          setIsMenuShown((prev) => !prev)
        }}
        className='block sm:hidden cursor-pointer'
        src={MenuToggleIcon}
        width={24}
        height={24}
        alt='toggle Menu'
      />

      {isMenuShown && (
        <div className='fixed w-full top-0 left-0'>
          <Image
            onClick={() => {
              setIsMenuShown((prev) => !prev)
            }}
            className='cursor-pointer absolute top-11 right-6'
            src={CloseIcon}
            width={24}
            height={24}
            alt='close menu'
          />

          {children}
        </div>
      )}
    </>
  )
}

export default MenuToggleWithButton
