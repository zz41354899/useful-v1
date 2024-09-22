import {
  DesignType,
  HeaderAction,
  Install,
  Lang,
  UICategory,
} from '@/type/enum.type'
import {
  ThemesIcon,
  LayoutIcon,
  TypographyIcon,
  SymbolIcon,
  ElevationIcon,
  NavigationBarIcon,
  TabsIcon,
  ButtonIcon,
  SidebarIcon,
  RatingBarIcon,
  HeroIcon,
  BreadcrumbIcon,
  AlertIcon,
  TimelineIcon,
  TagsIcon,
  ProgressBarIcon,
  AvatarIcon,
  BadgeIcon,
  FooterIcon,
  SkeletonIcon,
  SpinnerIcon,
  StepperIcon,
  ListIcon,
  CardIcon,
  FormsIcon,
  ModalIcon,
  DropdownIcon,
  DisclosureIcon,
  PopoverIcon,
  CarouselIcon,
  TooltipIcon,
  PaginationIcon,
  ToastIcon,
  YoutubeIcon,
  TranslateIcon,
  ThemeModeIcon,
} from '@/util/icon'
import {
  AltersImg,
  AvatarImg,
  BadgeImg,
  BreadcrumbImg,
  ButtonsImg,
  CardsImg,
  CarouselImg,
  DisclosureImg,
  DropdownImg,
  ElevationImg,
  LayoutImg,
  SymbolImg,
  ThemesImg,
  TypographyImg,
  FooterImg,
  FormsImg,
  HeroImg,
  ListImg,
  ModalImg,
  NavigationBarImg,
  PaginationBarImg,
  PopoverImg,
  ProgressBarImg,
  RatingBarImg,
  SidebarImg,
  SkeletonImg,
  SpinnerImg,
  StepperImg,
  TabsImg,
  TagsImg,
  TimelineImg,
  ToastImg,
  TooltipImg,
} from '@/util/showcase'

export const META_DATA = {
  icons: { icon: './icon.ico' },
  title: 'Useful UI',
  description: 'Useful UI 設計系統',
}

/**
 * @description 目前預計顯示的語言
 */
export const LOCALES = [Lang.en_US, Lang.zh_TW]

export const ICON_PAIR = {
  [UICategory.theme]: ThemesIcon,
}

/**
 * @description 所有的 UI 元件類型
 */
export const UIS = [
  {
    typeKey: DesignType.foundation,
    href: `/${DesignType.foundation}`,
    categories: [
      {
        key: UICategory.theme,
        icon: ICON_PAIR[UICategory.theme],
        isFinished: true,
      },
      { key: UICategory.layout, icon: LayoutIcon, isFinished: true },
      { key: UICategory.typography, icon: TypographyIcon, isFinished: true },
      { key: UICategory.symbol, icon: SymbolIcon, isFinished: true },
      { key: UICategory.elevation, icon: ElevationIcon, isFinished: false },
    ],
  },
  {
    typeKey: DesignType.development,
    href: `/${DesignType.development}`,
    categories: [
      {
        key: UICategory.navigationBar,
        icon: NavigationBarIcon,
        isFinished: true,
      },
      { key: UICategory.tabs, icon: TabsIcon, isFinished: true },
      { key: UICategory.buttons, icon: ButtonIcon, isFinished: true },
      { key: UICategory.sidebar, icon: SidebarIcon, isFinished: true },
      { key: UICategory.ratingBar, icon: RatingBarIcon, isFinished: true },
      { key: UICategory.hero, icon: HeroIcon, isFinished: false },
      { key: UICategory.breadcrumb, icon: BreadcrumbIcon, isFinished: true },
      { key: UICategory.alerts, icon: AlertIcon, isFinished: false },
      { key: UICategory.timeline, icon: TimelineIcon, isFinished: false },
      { key: UICategory.tags, icon: TagsIcon, isFinished: false },
      { key: UICategory.progressBar, icon: ProgressBarIcon, isFinished: true },
      { key: UICategory.avatar, icon: AvatarIcon, isFinished: false },
      { key: UICategory.badge, icon: BadgeIcon, isFinished: false },
      { key: UICategory.footer, icon: FooterIcon, isFinished: false },
      { key: UICategory.skeleton, icon: SkeletonIcon, isFinished: false },
      { key: UICategory.spinner, icon: SpinnerIcon, isFinished: false },
      { key: UICategory.stepper, icon: StepperIcon, isFinished: false },
      { key: UICategory.list, icon: ListIcon, isFinished: false },
      { key: UICategory.cards, icon: CardIcon, isFinished: true },
      { key: UICategory.forms, icon: FormsIcon, isFinished: false },
      { key: UICategory.modal, icon: ModalIcon, isFinished: false },
      { key: UICategory.dropdown, icon: DropdownIcon, isFinished: false },
      { key: UICategory.disclosure, icon: DisclosureIcon, isFinished: false },
      { key: UICategory.popover, icon: PopoverIcon, isFinished: false },
      { key: UICategory.carousel, icon: CarouselIcon, isFinished: false },
      { key: UICategory.tooltip, icon: TooltipIcon, isFinished: false },
      { key: UICategory.pagination, icon: PaginationIcon, isFinished: false },
      { key: UICategory.toast, icon: ToastIcon, isFinished: false },
    ],
  },
]

export const HEADER_ACTIONS = [
  { icon: YoutubeIcon, key: HeaderAction.youtube },
  { icon: TranslateIcon, key: HeaderAction.translate },
  { icon: ThemeModeIcon, key: HeaderAction.theme },
]

export const DESIGN_INTRO_KEY_PAIR = {
  [DesignType.development]:
    'Useful UI Provide developers with a set of pre-designed components to help you quickly complete the project.',
  [DesignType.foundation]:
    'Useful UI fundamentals can help you lay a solid foundation of knowledge.',
}

export const IMG_PAIR = {
  [UICategory.theme]: ThemesImg,
  [UICategory.layout]: LayoutImg,
  [UICategory.typography]: TypographyImg,
  [UICategory.symbol]: SymbolImg,
  [UICategory.elevation]: ElevationImg,
  [UICategory.alerts]: AltersImg,
  [UICategory.avatar]: AvatarImg,
  [UICategory.badge]: BadgeImg,
  [UICategory.breadcrumb]: BreadcrumbImg,
  [UICategory.buttons]: ButtonsImg,
  [UICategory.cards]: CardsImg,
  [UICategory.carousel]: CarouselImg,
  [UICategory.disclosure]: DisclosureImg,
  [UICategory.dropdown]: DropdownImg,
  [UICategory.footer]: FooterImg,
  [UICategory.forms]: FormsImg,
  [UICategory.hero]: HeroImg,
  [UICategory.list]: ListImg,
  [UICategory.modal]: ModalImg,
  [UICategory.navigationBar]: NavigationBarImg,
  [UICategory.pagination]: PaginationBarImg,
  [UICategory.popover]: PopoverImg,
  [UICategory.progressBar]: ProgressBarImg,
  [UICategory.ratingBar]: RatingBarImg,
  [UICategory.sidebar]: SidebarImg,
  [UICategory.skeleton]: SkeletonImg,
  [UICategory.spinner]: SpinnerImg,
  [UICategory.stepper]: StepperImg,
  [UICategory.tabs]: TabsImg,
  [UICategory.tags]: TagsImg,
  [UICategory.timeline]: TimelineImg,
  [UICategory.toast]: ToastImg,
  [UICategory.tooltip]: TooltipImg,
}

export const UI_SHOWCASE = {
  [DesignType.foundation]: [
    { key: UICategory.theme, img: IMG_PAIR[UICategory.theme] },
    { key: UICategory.layout, img: IMG_PAIR[UICategory.layout] },
    { key: UICategory.typography, img: IMG_PAIR[UICategory.typography] },
    { key: UICategory.symbol, img: IMG_PAIR[UICategory.symbol] },
    { key: UICategory.elevation, img: IMG_PAIR[UICategory.elevation] },
  ],
  [DesignType.development]: [
    { key: UICategory.alerts, img: IMG_PAIR[UICategory.alerts] },
    { key: UICategory.avatar, img: IMG_PAIR[UICategory.avatar] },
    { key: UICategory.badge, img: IMG_PAIR[UICategory.badge] },
    { key: UICategory.breadcrumb, img: IMG_PAIR[UICategory.breadcrumb] },
    { key: UICategory.buttons, img: IMG_PAIR[UICategory.buttons] },
    { key: UICategory.cards, img: IMG_PAIR[UICategory.cards] },
    { key: UICategory.carousel, img: IMG_PAIR[UICategory.carousel] },
    { key: UICategory.disclosure, img: IMG_PAIR[UICategory.disclosure] },
    { key: UICategory.dropdown, img: IMG_PAIR[UICategory.dropdown] },
    { key: UICategory.footer, img: IMG_PAIR[UICategory.footer] },
    { key: UICategory.forms, img: IMG_PAIR[UICategory.forms] },
    { key: UICategory.hero, img: IMG_PAIR[UICategory.hero] },
    { key: UICategory.list, img: IMG_PAIR[UICategory.list] },
    { key: UICategory.modal, img: IMG_PAIR[UICategory.modal] },
    { key: UICategory.navigationBar, img: IMG_PAIR[UICategory.navigationBar] },
    { key: UICategory.pagination, img: IMG_PAIR[UICategory.pagination] },
    { key: UICategory.popover, img: IMG_PAIR[UICategory.popover] },
    { key: UICategory.progressBar, img: IMG_PAIR[UICategory.progressBar] },
    { key: UICategory.ratingBar, img: IMG_PAIR[UICategory.ratingBar] },
    { key: UICategory.sidebar, img: IMG_PAIR[UICategory.sidebar] },
    { key: UICategory.skeleton, img: IMG_PAIR[UICategory.skeleton] },
    { key: UICategory.spinner, img: IMG_PAIR[UICategory.spinner] },
    { key: UICategory.stepper, img: IMG_PAIR[UICategory.stepper] },
    { key: UICategory.tabs, img: IMG_PAIR[UICategory.tabs] },
    { key: UICategory.tags, img: IMG_PAIR[UICategory.tags] },
    { key: UICategory.timeline, img: IMG_PAIR[UICategory.timeline] },
    { key: UICategory.toast, img: IMG_PAIR[UICategory.toast] },
    { key: UICategory.tooltip, img: IMG_PAIR[UICategory.tooltip] },
  ],
}

export const INSTALL_METHODS = [Install.npm, Install.cdn]

export const REQUIRED_PACKAGES = [
  { href: 'https://nodejs.org', name: 'Node.js' },
  { href: 'https://tailwindcss.com/', name: 'Tailwind CSS' },
]
