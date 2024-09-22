import { DesignType, UICategory } from '@/type/enum.type'

const UI_DESCRIPTION = {
  [DesignType.foundation]: {
    [UICategory.theme]:
      'In order to ensure consistent color representation and imbue brand identity, it is essential to adhere to a color usage guideline across both application interfaces and web pages.',
    [UICategory.layout]:
      'Useful meticulously crafts and maintains a set of interface style guidelines, offering a primary grid reference for layout adjustments.',
    [UICategory.symbol]:
      'Icons should be scaled in multiples of  4dp according to the size specifications, with 24x24 as the standard unit. Each icon should incorporate rounded corners to achieve design consistency.',
    [UICategory.typography]:
      'Good typography system can effectively convey content and hierarchical structure, allowing people to enjoy reading with ease and pleasure.',
  },
  [DesignType.development]: {
    [UICategory.alerts]: '',
    [UICategory.avatar]: '',
    [UICategory.navigationBar]:
      'Providing multiple styles navbar and dropdown menu functionality, user-friendly and easily customizable for added convenience.',
    [UICategory.buttons]:
      'Well-designed buttons encourage users to easily tap, considering the touch area regardless of screen size.',
    [UICategory.tabs]:
      'Tabs correspond to different screens, links, and other interactive content, effectively enhancing user browsing experience.',
    [UICategory.sidebar]:
      'The sidebar aids users in navigating through the application, making vertical navigation particularly useful for large-scale project websites.',
    [UICategory.breadcrumb]:
      'Breadcrumb helps users clearly indicate the webpage location, allowing them to quickly return to the previous page and navigate other pages efficiently.',
    [UICategory.cards]:
      'Cards contain content and actions about a single subject.',
  },
} as {
  [design in DesignType]: { [key in UICategory]: string }
}

export default UI_DESCRIPTION
