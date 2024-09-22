import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath, pathToFileURL } from 'node:url'
import postcss from 'postcss'
import postcssJs from 'postcss-js'
import tailwindcss from 'tailwindcss'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
process.chdir(__dirname)

/** @param {Buffer} cssFileBuffer */
async function resolveTailwindApply(cssFileBuffer) {
  const applyStatementResolved = await postcss([tailwindcss]).process(
    cssFileBuffer,
    {
      parser: postcss.parse,
      from: undefined,
    }
  )
  return applyStatementResolved.css
}

/** @param {string} cssAsString */
async function cssStringToJssObject(cssAsString) {
  const jss = postcssJs.objectify(postcss.parse(cssAsString))
  return jss
}

async function main() {
  await compileCssDirToJssDir(
    path.resolve(__dirname, './css/base'),
    path.resolve(__dirname, './jss/base')
  )
  await compileCssDirToJssDir(
    path.resolve(__dirname, './css/components'),
    path.resolve(__dirname, './jss/components')
  )
  await compileCssDirToJssDir(
    path.resolve(__dirname, './css/utilities'),
    path.resolve(__dirname, './jss/utilities')
  )

  const root = new postcss.Root().append(
    postcssJs.parse((await import('./jss/base/all.mjs')).default),
    postcssJs.parse((await import('./jss/components/all.mjs')).default),
    postcssJs.parse((await import('./jss/utilities/all.mjs')).default)
  )
  await fs.writeFile(
    path.resolve(__dirname, './useful-ui.css'),
    postcss().process(root, { parser: postcss.parse, from: undefined }).css
  )
}

/**
 * No recursion support, cssDir must not contain any sub directory
 * @param {string} cssDir
 * @param {string} jssDir
 */
async function compileCssDirToJssDir(cssDir, jssDir) {

  const files = await fs
    .readdir(cssDir)
    .then((files) => files.map((file) => path.join(cssDir, file)))

  if (files.length === 0) {
    return
  }


  try {
    await fs.rm(jssDir, { recursive: true })
  } catch {

  }
  await fs.mkdir(jssDir)

  await Promise.all(
    files.map(async (f) => {
      await fs
        .readFile(f)
        .then(resolveTailwindApply)
        .then(cssStringToJssObject)
        .then((jss) => {
          const dest = path.join(jssDir, path.basename(f))
          return fs.writeFile(
            dest + '.mjs',
            'export default ' + JSON.stringify(jss, null, 2)
          )
        })
    })
  )

  const jssFiles = await fs
    .readdir(jssDir)
    .then((files) => files.map((file) => path.join(jssDir, file)))
  const allJss = await Promise.all(
    jssFiles.map(async (f) => import(pathToFileURL(f).href))
  )
  const mergedJss = allJss.reduce((acc, jss) => {
    return Object.assign(acc, jss.default)
  }, {})
  await fs.writeFile(
    `${jssDir}/all.mjs`,
    'export default ' + JSON.stringify(mergedJss, null, 2)
  )
}

await main()