import { readdirSync } from 'fs'
import { resolve } from 'path'
import env from 'dotenv'

const config = env.config()
export const envs = config.parsed
const VALID_FILE_NAME = /^vim\d+.md$/
export const root = process.cwd()

export function getFileNames() {
  let filesNames: string[] = []
  execFnWithCatch(() => {
    filesNames = readdirSync(resolve(root, envs!.VALID_DOCS_NAME)).filter(item => VALID_FILE_NAME.test(item))
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
