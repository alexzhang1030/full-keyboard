import { resolve } from 'path'
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

export function execFnWithCatch(fn: Function) {
  try {
    fn()
  }
  catch (error) {
    console.error(error)
  }
}

export const types = ['vim', 'vscode']
