import { IUiContext } from '@/type/common.type'
import { DesignType, UICategory } from '@/type/enum.type'

export const UI_CONTENT_LIST = {
  [UICategory.symbol]: [
    {
      title: 'Values',
      description: [
        'Intuitiveness - When designing icons, strive to maintain their intuitiveness by using relatively straightforward forms to convey information.',
        'Recognizability - When designing icons, pay attention to their recognizability to avoid causing difficulties for users in distinguishing them.',
      ],
    },
  ],
  [UICategory.typography]: [
    {
      title: 'Values',
      description: [
        'Conveying Messages - Organize textual content by prioritizing the sequence of information.',
        'Clarity of Expression - Utilize a font scheme that is clearer, maintaining a certain level of aesthetic appeal while avoiding readability obstacles for users.',
      ],
    },
    {
      title: 'Font Scale',
      description: [
        'Useful focuses on both engineers and user experience. The system is based on design language, incorporating grid systems, color schemes, and interface components. It prioritizes excellent user experience as its core while fostering optimal collaboration with engineers.',
        'Absolutely! Tailwind CSS provides a convenient way to set up font sizes using its default font scale. You can use Tailwind built-in utility classes to control the font sizes of elements on your webpage.',
      ],
    },
  ],
  [UICategory.layout]: [
    {
      title: 'Values',
      description: [
        'Layout planning - To ensure that they can be arranged or combined together in an orderly and reasonable manner.',
        'Adaptation - Adjusting or modifying the size and organization method to improve its efficiency, functionality, or appearance.',
      ],
    },
    {
      title: 'Adaptability',
      description: [
        'In the design process, designers typically consider common screen sizes such as 1920, 1600, and 1440 to ensure consistency across different devices. They use a grid system to make web pages more readable.',
        'Useful offers two common webpage layout schemes:',
      ],
    },
    {
      title: 'Sidebar Layout',
      description: [
        'Common design approach for using sidebars involves fixing the menu to the left-hand side as a navigation column, ensuring it collapses for mobile sizes to enhance user experience.',
      ],
    },
    {
      title: 'Top-Bottom layout',
      description: [
        'Common to have navigation placed at the top or bottom of a webpage. Additionally, important to ensure appropriate left and right margins for content blocks to avoid overcrowding and maintain design balance.',
      ],
    },
    {
      title: 'Attention',
      description: [
        'Utilizing tailwindcss a 4dp grid system as a tool for visual whitespace management,Considering whitespace is very important, maintaining a layout that is aesthetically pleasing and allows for clear reading is essential.',
        'We consider 2 design details you should pay attention to:',
      ],
    },
    {
      title: 'Inconsistent spacing units',
      description: [
        'Planning the layout according to multiples of 4 to ensure a comfortable arrangement.',
        'Do not adhering to the grid standards.',
      ],
    },
    {
      title: 'The font sizes and weights are not being used correctly',
      description: [
        "Correctly using font weights and sizes will enhance the layout's visual appeal.",
        'Do not arbitrarily change font sizes and weights.',
      ],
    },
  ],
} as {
  [key in UICategory]: {
    title: string
    description: string[]
  }[]
}

const UI_CONTEXT = {
  [DesignType.foundation]: {
    [UICategory.theme]: [
      {
        title: 'Usage',
        description:
          'The color palette is adaptable to various digital products, and utilizing it is very simple. Just prefix the “token name” with “us-” to invoke design token color anatomy.',
      },
      {
        title: 'Color anatomy',
        description:
          'Establishing a foundational color scheme encompassing four main tiers : Primary, Secondary, Neutral and Accent.',
      },
      {
        title: 'Primary palette',
        description:
          'The primary color serves as the brand color for Useful, while also unifying the colors for interactive elements.',
      },
      {
        title: 'Secondary palette',
        description:
          "The secondary colors in the design system should into a semantic color palette to inform users whether the device is in a fault state, maintenance notification, or seeking assistance. Further imbuing the secondary color palette with semantics is crucial, but it's important that the design not be confined solely to conveying meaning, but rather avoid restricting the design itself within the realm of meaning.",
      },
      {
        title: 'Neutrals palette',
        description:
          'The neutral color is applicable to most backgrounds, text, and shapes, commonly used in providing feedback states such as hover, disabled, active, etc., to assist users in navigating. Both light and dark modes have dedicated neutral colors.',
      },
      {
        title: 'Accent palette',
        description:
          "The accent color serves as a supplementary hue for components or data visualizations where multiple colors are needed to differentiate functions, aiding in the efficiency of the design team's development process.",
      },
    ],
    [UICategory.symbol]: [
      { title: UI_CONTENT_LIST[UICategory.symbol][0].title },
      {
        title: 'Usage',
        description:
          "Once the Useful UI package is installed, you can use any component of this system, themes, smybol, elevation, heroicons etc. If you haven't installed it yet, please go to [s0] page to install.",
      },
    ],
    [UICategory.typography]: [
      { title: UI_CONTENT_LIST[UICategory.typography][0].title },
      {
        title: 'Useful Typography',
        description:
          'Choosing Inter for its clarity and simplicity, its font characteristics serve as the standard font for a useful UI. This decision is made considering readability and clarity across various devices.',
      },
      {
        title: 'Local fonts on different platforms',
        description:
          'These are some of the commonly available fonts on each platform. However, Inter, as a web font, may not be pre-installed on all systems but can be easily integrated into web applications for consistent UI design across platforms.',
      },
      { title: UI_CONTENT_LIST[UICategory.typography][1].title },
    ],
    [UICategory.layout]: [
      { title: UI_CONTENT_LIST[UICategory.layout][0].title },
      { title: UI_CONTENT_LIST[UICategory.layout][1].title },
      { title: UI_CONTENT_LIST[UICategory.layout][4].title },
    ],
  },
  [DesignType.development]: {
    [UICategory.navigationBar]: [
      {
        title: 'Navbar',
        description: 'The Add your nav within an element with the [s0] class.',
      },
      {
        title: 'Navbar with image',
        description: 'You can also add the [s0] class to add [s1] tags.',
      },
      {
        title: 'Image and text',
        description: 'You can also add text and images to the navigation bar.',
      },
      {
        title: 'Nav and dropdown',
        description: 'You can also add Navbar with dropdown and submenu.',
      },
      {
        title: 'Navbar with colors',
        description:
          'You can also freely change the background color of the navbar class. If you are unsure about the available colors, please refer to themes the page.',
      },
      {
        title: 'Navbar responsive',
        description:
          'As long as you create the navbar class, it will automatically have a responsive.',
      },
    ],
    [UICategory.tabs]: [
      {
        title: 'Tab',
        description:
          'Tabs are a common element in web design used to organize and switch between different content areas.',
      },
      {
        title: 'Wrapped labels',
        description:
          'Avoid automatic line breaks for fields that are too long. If your label text is too long, it will overflow and be inconvenient to read.',
      },
      {
        title: 'Radio tabs boxed tab content',
        description:
          'You can also add fill-background tabs with [s0] class tabs.',
      },
      {
        title: 'Align',
        description:
          "You can using tailwind's justify-content classes to toggle alignment.",
      },
    ],
    [UICategory.buttons]: [
      {
        title: 'Button',
        description:
          'Multiple semantic button styles, each with its own specific semantic purpose, to achieve better control.',
      },
      {
        title: 'Outlines buttons state colors',
        description:
          'You can also turn the buttons into border-only style by simply using the [s0] class.',
      },
      {
        title: 'Button disabled',
        description:
          'Prevent user submission to avoid sending incorrect data by simply using the [s0] class.',
      },
      {
        title: 'Button icons',
        description:
          'You can add icons through classes.  just need to [s0] page copy the tags class to use them.',
      },
      {
        title: 'Button sizes',
        description:
          'Do you need other buttons? Add [s0] or [s1] to freely change the button size and replace the button class with [s2] for block-level buttons.',
      },
    ],
    [UICategory.sidebar]: [{ title: 'Sidebar', description: '' }],
    [UICategory.breadcrumb]: [
      { title: 'Breadcrumb', description: '' },
      {
        title: 'Breadcrumb last active',
        description: 'Keep the last breadcrumb for feedback interaction.',
      },
      { title: 'Breadcrumb with icons', description: '' },
      {
        title: 'Custom delimiter',
        description: 'In the following examples, we use string delimiters.',
      },
      { title: 'Collapsed breadcrumbs', description: '' },
      {
        title: 'Align',
        description:
          "You can using tailwind's justify-content classes to toggle alignment.",
      },
      {
        title: 'Customization',
        description:
          'The examples we provide allow users to freely customize, without limiting their usage.',
      },
    ],
    [UICategory.cards]: [
      { title: 'Card', description: '' },
      { title: 'Card with action', description: '' },
      { title: 'Card with badge', description: '' },
      { title: 'Card with avatar', description: '' },
    ],
    [UICategory.ratingBar]: [
      { title: 'Default rating', description: '' },
      { title: 'Feedback rating', description: '' },
      { title: 'Disabled rating', description: '' },
      { title: 'Customized ratings', description: '' },
      { title: 'Size', description: '' },
      { title: 'Half rating', description: '' },
    ],
    [UICategory.progressBar]: [
      {
        title: 'Default',
        description: '',
      },
      {
        title: 'Height',
        description: '',
      },
      {
        title: 'Rounded',
        description: '',
      },
      {
        title: 'Background',
        description: '',
      },
    ],
  },
} as {
  [design in DesignType]: {
    [ui in UICategory]: IUiContext[]
  }
}

export default UI_CONTEXT
