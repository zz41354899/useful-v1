'use client'

import { useState } from 'react'

const Collapsed = () => {
  const [expanded, setExpanded] = useState(false)

  const handleExpanded = () => {
    setExpanded(false)
  }

  const handleNotExpanded = () => {
    setExpanded(true)
  }

  return (
    <ol className='custom-breadcrumb' onMouseLeave={handleExpanded}>
      <li className='custom-breadcrumb-item custom-breadcrumb-item-with-delimiter'>
        <a href='#' className='custom-breadcrumb-link'>
          Home
        </a>
      </li>
      {expanded ? (
        <>
          <li className='custom-breadcrumb-item custom-breadcrumb-item-with-delimiter'>
            <a href='#' className='custom-breadcrumb-link'>
              Product
            </a>
          </li>
          <li className='custom-breadcrumb-item custom-breadcrumb-item-with-delimiter'>
            <a href='#' className='custom-breadcrumb-link'>
              Info
            </a>
          </li>
        </>
      ) : (
        <button
          className='custom-breadcrumb-item custom-breadcrumb-item-with-delimiter'
          onMouseEnter={handleNotExpanded}
        >
          <i className='us-icon us-more' />
        </button>
      )}
      <li className='custom-breadcrumb-item custom-breadcrumb-item-active'>
        Done
      </li>
    </ol>
  )
}

export default Collapsed
