import SegoeFontImg from '/public/img/fonts/segoeWindow.png'
import RobotFontImg from '/public/img/fonts/robotoAndriod.png'
import SfFontImg from '/public/img/fonts/sfProIos.png'

export const Typographies = [
  {
    name: 'note',
    weight: 'Regular',
    size: '10px / 15px',
    className: 'custom-note',
  },
  { name: 'small', weight: 'Regular', size: '12px / 18px' },
  {
    name: 'body-content',
    weight: 'Regular',
    size: '14px / 21px',
    className: 'custom-body-content',
  },
  {
    name: 'subtitle2',
    weight: 'semi bold',
    size: '16px / 24px',
    className: 'custom-subtitle2',
  },
  {
    name: 'subtitle1',
    weight: 'semi bold',
    size: '20px / 30px',
    className: 'custom-subtitle1',
  },
  {
    name: 'title3',
    weight: 'semi bold',
    size: '24px / 36px',
    className: 'custom-title3',
  },
  {
    name: 'title2',
    weight: 'semi bold',
    size: '28px / 42px',
    className: 'custom-title2',
  },
  {
    name: 'title1',
    weight: 'semi bold',
    size: '32px / 48px',
    className: 'custom-title1',
  },
  {
    name: 'large-text',
    weight: 'semi bold',
    size: '48px / 72px',
    className: 'custom-large-text',
  },
  {
    name: 'display',
    weight: 'bold',
    size: '68px / 102px',
    className: 'custom-display',
  },
]

export const Fonts = [
  { src: SegoeFontImg, title: 'segoe' },
  { src: RobotFontImg, title: 'roboto' },
  { src: SfFontImg, title: 'sf' },
]
