import type { Config } from 'tailwindcss'
import usefulUiPlugin from './css-tailwind-component'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {},
  plugins: [usefulUiPlugin({ prefix: 'custom' })],
}
export default config
