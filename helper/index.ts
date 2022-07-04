import { resolve } from 'path'
import { readFileSync } from 'fs'
import env from 'dotenv'
import fg from 'fast-glob'

const config = env.config()
export const envs = config.parsed
export const root = process.cwd()

export function getFileNames(index: number) {
  let filesNames: string[] = []
  execFnWithCatch(() => {
    const dirname = resolve(process.cwd(), envs!.VALID_DOCS_NAME)
    filesNames = fg.sync([`${dirname}/${index < 10 ? '0' : ''}${index}_*.md`], { dot: true })
  })
  return filesNames
}

const subTitleReg = /^#.+\n+(.+)/

export function getSubTitle(fullPath: string) {
  const content = readFileSync(fullPath, 'utf8').replaceAll('\r', '')
  const matched = subTitleReg.exec(content)
  return matched ? matched[1] : ''
}

export function execFnWithCatch(fn: Function) {
  try {
    fn()
  }
  catch (error) {
    console.error(error)
  }
}

export const types = ['vim', 'vscode', 'tools']
