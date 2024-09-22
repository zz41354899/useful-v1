import { DesignType, Lang, UICategory } from '@/type/enum.type'

export interface IParams {
  lang: Lang
  design: DesignType
  ui: UICategory
}

export interface IUiContext {
  title: string
  description: string
}

export interface IUIProps {
  params: Pick<IParams, 'lang' | 'design' | 'ui'>
  contexts: IUiContext[]
}
