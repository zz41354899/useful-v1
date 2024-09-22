import {
  Breadcrumbs,
  Tabs,
  Typography,
  Themes,
  Layouts,
  NavigationBars,
  Symbols,
  Buttons,
  RatingBars,
  Sidebars,
  Cards,
} from '@/components/ui'
import ProgressBar from '@/components/ui/ProgressBar'
import UI_CONTEXT from '@/helper/config/uiContext'
import { IParams } from '@/type/common.type'
import { UICategory } from '@/type/enum.type'

interface IProps {
  params: Pick<IParams, 'lang' | 'design' | 'ui'>
}

const Page = ({ params }: IProps) => {
  const contexts = UI_CONTEXT?.[params.design]?.[params.ui]
  return (
    <>
      {params.ui === UICategory.theme && (
        <Themes params={params} contexts={contexts} />
      )}
      {params.ui === UICategory.symbol && (
        <Symbols params={params} contexts={contexts} />
      )}
      {params.ui === UICategory.typography && (
        <Typography params={params} contexts={contexts} />
      )}
      {params.ui === UICategory.layout && (
        <Layouts params={params} contexts={contexts} />
      )}
      {params.ui === UICategory.navigationBar && (
        <NavigationBars params={params} contexts={contexts} />
      )}
      {params.ui === UICategory.buttons && (
        <Buttons params={params} contexts={contexts} />
      )}
      {params.ui === UICategory.tabs && (
        <Tabs params={params} contexts={contexts} />
      )}
      {params.ui === UICategory.sidebar && (
        <Sidebars params={params} contexts={contexts} />
      )}
      {params.ui === UICategory.breadcrumb && (
        <Breadcrumbs params={params} contexts={contexts} />
      )}
      {params.ui === UICategory.cards && (
        <Cards params={params} contexts={contexts} />
      )}
      {params.ui === UICategory.ratingBar && (
        <RatingBars params={params} contexts={contexts} />
      )}
      {params.ui === UICategory.progressBar && (
        <ProgressBar params={params} contexts={contexts} />
      )}
    </>
  )
}

export default Page
