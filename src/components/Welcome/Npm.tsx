import { IParams } from '@/type/common.type'
import { getDictionary } from '@/i18n/dictionaries'
import FilledText from '@/components/FilledText'
import { REQUIRED_PACKAGES } from '@/helper/config/index'
import DemoCode from '@/components/DemoCode'

const Npm = async ({ params }: { params: Pick<IParams, 'lang'> }) => {
  const dict = await getDictionary(params.lang)

  const fillings = REQUIRED_PACKAGES.map(({ href, name }) => (
    <a
      key={name}
      href={href}
      target='__blank'
      className='text-us-blue600 cursor-pointer'
    >
      {name}
    </a>
  ))

  return (
    <>
      <p>1. {dict['Install usefulUI as a Node package']}</p>
      <DemoCode code={`npm i @useful.ui.design/usefului`} />
      <p>
        2.
        {
          dict[
            'Add usefulUI as a plugin to tailwind.config.js with a specific prefix, e.g.'
          ]
        }
        <span className='text-us-blue600'>custom</span>
      </p>
      <DemoCode
        code={`import usefulUiPlugin from '@useful.ui.design/usefului'\nconst config = {\n\t// ...\n\tplugins: [usefulUiPlugin({ prefix: 'custom' })]\n}`}
      />
      <p>
        <FilledText
          textKey={
            dict['You need Node.js and Tailwind CSS installed.'] as string
          }
          fillings={fillings}
        />
      </p>
    </>
  )
}

export default Npm
