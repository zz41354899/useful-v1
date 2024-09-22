import { Lang } from '@/type/enum.type'
import 'server-only'

const dictionaries = {
  [Lang.en_US]: () =>
    import(`./dictionaries/${Lang.en_US}.json`).then(
      (module) => module.default
    ),
  [Lang.zh_TW]: () =>
    import(`./dictionaries/${Lang.zh_TW}.json`).then(
      (module) => module.default
    ),
}

export const getDictionary = async (locale: Lang) => dictionaries[locale]()