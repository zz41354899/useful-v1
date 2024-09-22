import { CodeType } from '@/type/enum.type'
import prettier from 'prettier'

const prettierOption = {
  parser: 'babel',
  semi: false,
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
}

const stringTrimSpace = (str: string, space: number) => {
  const regex = new RegExp(`^\\s{${space}}`)
  return str
    .split('\n')
    .map((line) => line.replace(regex, ''))
    .join('\n')
    .trim()
}

const toJSX = (code: string) => {
  const startIndex = code.indexOf('return (') + 'return ('.length
  const endIndex = code.lastIndexOf(')')

  if (startIndex > -1 && endIndex > -1) {
    let content = code.slice(startIndex, endIndex).trim()

    content = stringTrimSpace(content, 4)

    if (content.startsWith('<>') && content.endsWith('</>')) {
      content = stringTrimSpace(content.slice(2, -3).trim(), 2)
    }

    return content
  }
  return ''
}

const toVue = (jsx: string) =>
  jsx
    .replace(/className=/g, 'class=')
    .replace(/<(\w+)([^>]*)\/>/g, '<$1$2></$1>')
    .replace(/"/g, "'")
    .replace(/\{(.+?)\}/g, "'$1'")
    .replace(
      /on([A-Z][a-zA-Z]+)=/g,
      (_, p1) => `@${p1.charAt(0).toLowerCase() + p1.slice(1)}=`
    )

const usePrettier = async (code: string) => {
  const prettierCode = await prettier.format(code, prettierOption)
  const jsx = toJSX(prettierCode)
  const html = toVue(jsx)

  return {
    [CodeType.html]: html,
    [CodeType.jsx]: jsx,
  }
}

export default usePrettier
