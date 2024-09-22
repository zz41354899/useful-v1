'use client'

import { ReactNode, useState } from 'react'
import clsx from 'clsx'

const TabSelector = ({
  methods,
  selectedComponent,
  children,
}: {
  methods: string[]
  selectedComponent: { [key: string]: ReactNode }
  children?: ReactNode
}) => {
  const [selectedTab, setSelectedTab] = useState<string>(methods[0])
  return (
    <>
      <ul className='custom-tab-list'>
        {methods.map((method) => (
          <li
            className={clsx(
              'custom-tab cursor-pointer',
              selectedTab === method && 'custom-tab-active'
            )}
            onClick={() => {
              setSelectedTab(method)
            }}
            key={method}
          >
            {method}
          </li>
        ))}
      </ul>
      {children}
      {selectedComponent[selectedTab]}
    </>
  )
}

export default TabSelector
