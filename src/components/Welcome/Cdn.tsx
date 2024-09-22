import { getDictionary } from '@/i18n/dictionaries'
import { IParams } from '@/type/common.type'
import DemoCode from '@/components/DemoCode'

const Cdn = async ({ params }: { params: Pick<IParams, 'lang'> }) => {
  const dict = await getDictionary(params.lang)
  const warning =
    'Avoid recommending CDN installation, especially when it comes to controlling styles and file size. This may not be the best option for projects that require maximum customization and control.'

  const intro = `You don${"'"}t need to install anything. You just need to add one of these to the ${'<head>'} tag of your HTML.`
  return (
    <>
      <section className='rounded-lg bg-us-orange100 px-6 py-5 text-us-orange1100'>
        <div className='flex items-center gap-2'>
          <span className='rounded-full w-5 h-5 bg-us-orange600 text-white flex items-center justify-center'>
            !
          </span>
          <h2 className='custom-subtitle1'>{dict['Warning']}</h2>
        </div>
        <p className='mt-2 body-content'>{dict[warning]}</p>
      </section>
      <p className='body-content'>{dict[intro]}</p>
      <DemoCode
        code={`<link href="https://useful-ui.huang-design.work/useful-ui.css" rel="stylesheet" />`}
      />
    </>
  )
}

export default Cdn
