import { getDictionary } from '@/i18n/dictionaries'
import { IParams } from '@/type/common.type'
import { useParams } from 'next/navigation'
import { ReactNode } from 'react'

// TODO: 後續結合 Redux 做字典檔
const useTranslate = async (key: string, fillings: ReactNode[]) => {
  const params = useParams<Pick<IParams, 'lang'>>()
  const dictionary = await getDictionary(params.lang)

  const value = dictionary[key] as string

  if (!value) return key

  if (fillings.length > 0) {
    const parts = value.split(/(\[s\d+\])/)

    const filledValue = parts.map((part) => {
      const match = part.match(/\[s(\d+)\]/)
      if (match) {
        const placeholderIndex = parseInt(match[1], 10)
        return fillings[placeholderIndex]
      } else {
        return part
      }
    })

    return filledValue
  }

  return value
}

export default useTranslate
