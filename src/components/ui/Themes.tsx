import { IUIProps } from '@/type/common.type'
import Intro from '@/components/Intro'
import { Level } from '@/type/enum.type'
import { getDictionary } from '@/i18n/dictionaries'
import FilledText from '@/components/FilledText'
import Sentence from '@/components/Sentence'
import ScrollContainer from '@/components/ScrollContainer'
import {
  ACCENT_PALETTE,
  COLOR_ANATOMIES,
  COLOR_TOKEN,
  NEUTRAL_PALETTE,
  PRIMARY_PALETTE,
  SECONDARY_PALETTE,
} from '@/helper/config/color'
import ColorGroup from '@/components/ColorGroup'

interface IProps extends IUIProps {}

const Themes = async ({ params, contexts }: IProps) => {
  const dict = await getDictionary(params.lang)
  const fillings = [dict['token name'], ['us-']].map((item) => (
    <span className='text-us-blue600' key={item}>
      {item}
    </span>
  ))

  return (
    <>
      <ScrollContainer id={contexts[0].title}>
        <Intro name={dict[contexts[0].title]} level={Level.second}>
          <FilledText
            textKey={dict[contexts[0].description]}
            fillings={fillings}
          />
        </Intro>
      </ScrollContainer>
      <ScrollContainer id={contexts[1].title}>
        <Sentence
          name={dict[contexts[1].title]}
          description={dict[contexts[1].description]}
        >
          <div className='grid grid-cols-4 sm:grid-cols-6 gap-3'>
            {COLOR_ANATOMIES.map(({ palette }) =>
              palette.map(({ tokens, prefix }) => (
                <div key={prefix}>
                  {tokens.map((token) => (
                    <div
                      key={token}
                      className='h-6'
                      style={{ backgroundColor: COLOR_TOKEN[token] }}
                    />
                  ))}
                </div>
              ))
            )}
          </div>
        </Sentence>
      </ScrollContainer>

      <ScrollContainer id={contexts[2].title}>
        <Sentence
          name={dict[contexts[2].title]}
          description={dict[contexts[2].description]}
        >
          <ColorGroup palette={PRIMARY_PALETTE} />
        </Sentence>
      </ScrollContainer>
      <ScrollContainer id={contexts[3].title}>
        <Sentence
          name={dict[contexts[3].title]}
          description={dict[contexts[3].description]}
        >
          <ColorGroup palette={SECONDARY_PALETTE} />
        </Sentence>
      </ScrollContainer>
      <ScrollContainer id={contexts[4].title}>
        <Sentence
          name={dict[contexts[4].title]}
          description={dict[contexts[4].description]}
        >
          <ColorGroup palette={NEUTRAL_PALETTE} />
        </Sentence>
      </ScrollContainer>
      <ScrollContainer id={contexts[5].title}>
        <Sentence
          name={dict[contexts[5].title]}
          description={dict[contexts[5].description]}
        >
          <ColorGroup palette={ACCENT_PALETTE} />
        </Sentence>
      </ScrollContainer>
    </>
  )
}

export default Themes
