import plugin from 'tailwindcss/plugin'
import allBaseJss from './jss/base/all.mjs'
import allComponentsJss from './jss/components/all.mjs'
import allUtilitiesJss from './jss/utilities/all.mjs'
import { config } from './tailwind.config'

export type TUpdatedStyles = (styles: TStyles, prefix?: string) => TStyles

export type TStyles = Record<string, any>

export interface IPluginOptions {
  prefix?: string
}

const updatedStyles: TUpdatedStyles = (styles, prefix) =>
  prefix
    ? Object.keys(styles).reduce((acc, key) => {
        const updatedKey = key.replace(
          /(\.\w+)/g,
          (match) => `.${prefix}-${match.slice(1)}`
        )
        acc[updatedKey] = styles[key]
        return acc
      }, {} as TStyles)
    : styles

const usefulUiPlugin = plugin.withOptions<IPluginOptions>(
  ({ prefix }) =>
    ({ addBase, addComponents, addUtilities }) => {
      addBase(allBaseJss as any)
      const components = updatedStyles(allComponentsJss, prefix)
      addComponents(components)
      const utilities = updatedStyles(allUtilitiesJss, prefix)
      addUtilities(utilities)
    },
  (_) => config
)

export default usefulUiPlugin
