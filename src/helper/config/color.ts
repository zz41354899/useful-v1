import { ColorAnatomy } from '@/type/enum.type'
import usefulUIColor from '../../../css-tailwind-component/jss/base/all.mjs'

export const PRIMARY_PALETTE = [
  {
    prefix: 'blue',
    tokens: [
      '--us-blue100',
      '--us-blue200',
      '--us-blue300',
      '--us-blue400',
      '--us-blue500',
      '--us-blue600',
      '--us-blue700',
      '--us-blue800',
      '--us-blue900',
      '--us-blue1000',
      '--us-blue1100',
    ],
  },
]

export const SECONDARY_PALETTE = [
  {
    prefix: 'red',
    tokens: [
      '--us-red100',
      '--us-red200',
      '--us-red300',
      '--us-red400',
      '--us-red500',
      '--us-red600',
      '--us-red700',
      '--us-red800',
      '--us-red900',
      '--us-red1000',
      '--us-red1100',
    ],
  },
  {
    prefix: 'orange',
    tokens: [
      '--us-orange100',
      '--us-orange200',
      '--us-orange300',
      '--us-orange400',
      '--us-orange500',
      '--us-orange600',
      '--us-orange700',
      '--us-orange800',
      '--us-orange900',
      '--us-orange1000',
      '--us-orange1100',
    ],
  },
  {
    prefix: 'red',
    tokens: [
      '--us-green100',
      '--us-green200',
      '--us-green300',
      '--us-green400',
      '--us-green500',
      '--us-green600',
      '--us-green700',
      '--us-green800',
      '--us-green900',
      '--us-green1000',
      '--us-green1100',
    ],
  },
]

export const NEUTRAL_PALETTE = [
  {
    prefix: 'gray',
    tokens: [
      '--us-gray100',
      '--us-gray200',
      '--us-gray300',
      '--us-gray400',
      '--us-gray500',
      '--us-gray600',
      '--us-gray700',
      '--us-gray800',
      '--us-gray900',
      '--us-gray1000',
      '--us-gray1100',
    ],
  },
]

export const ACCENT_PALETTE = [
  {
    prefix: 'cyan',
    tokens: [
      '--us-cyan100',
      '--us-cyan200',
      '--us-cyan300',
      '--us-cyan400',
      '--us-cyan500',
      '--us-cyan600',
      '--us-cyan700',
      '--us-cyan800',
      '--us-cyan900',
      '--us-cyan1000',
      '--us-cyan1100',
    ],
  },
  {
    prefix: 'yellow',
    tokens: [
      '--us-yellow100',
      '--us-yellow200',
      '--us-yellow300',
      '--us-yellow400',
      '--us-yellow500',
      '--us-yellow600',
      '--us-yellow700',
      '--us-yellow800',
      '--us-yellow900',
      '--us-yellow1000',
      '--us-yellow1100',
    ],
  },
  {
    prefix: 'purple',
    tokens: [
      '--us-purple100',
      '--us-purple200',
      '--us-purple300',
      '--us-purple400',
      '--us-purple500',
      '--us-purple600',
      '--us-purple700',
      '--us-purple800',
      '--us-purple900',
      '--us-purple1000',
      '--us-purple1100',
    ],
  },
]

export const COLOR_ANATOMIES = [
  {
    anatomy: ColorAnatomy.primary,
    palette: PRIMARY_PALETTE,
  },
  {
    anatomy: ColorAnatomy.secondary,
    palette: SECONDARY_PALETTE,
  },
  {
    anatomy: ColorAnatomy.neutral,
    palette: NEUTRAL_PALETTE,
  },
  {
    anatomy: ColorAnatomy.accent,
    palette: ACCENT_PALETTE,
  },
]

export const COLOR_TOKEN = usefulUIColor[':root'] as Record<string, any>
