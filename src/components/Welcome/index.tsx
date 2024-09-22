import { IParams } from '@/type/common.type'
import TabSelector from '@/components/TabSelector'
import { INSTALL_METHODS } from '@/helper/config/index'
import { Install } from '@/type/enum.type'
import Cdn from '@/components/Welcome/Cdn'
import { getDictionary } from '@/i18n/dictionaries'
import Npm from '@/components/Welcome/Npm'

const Welcome = async ({
  params,
}: {
  params: Pick<IParams, 'lang' | 'design'>
}) => {
  const dict = await getDictionary(params.lang)

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-us-blue600 custom-large-text sm:custom-display break-all'>
        {dict['Welcome Useful UI']}
      </h1>
      <TabSelector
        methods={INSTALL_METHODS}
        selectedComponent={{
          [Install.cdn]: <Cdn params={params} />,
          [Install.npm]: <Npm params={params} />,
        }}
      >
        <p className='body-content'>
          {dict['How to install Useful UI as a Tailwind CSS plugin?']}
        </p>
      </TabSelector>
    </div>
  )
}

export default Welcome
