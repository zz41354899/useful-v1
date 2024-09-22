import { ReactNode } from 'react'

interface IProps {
  textKey: string
  fillings: ReactNode[]
}

const FilledText = ({ textKey, fillings }: IProps) => {
  const parts = textKey.split(/(\[s\d+\])/)

  return parts.map((part) => {
    const match = part.match(/\[s(\d+)\]/)
    if (match) {
      const placeholderIndex = parseInt(match[1], 10)
      return fillings[placeholderIndex]
    } else {
      return part
    }
  })
}

export default FilledText
