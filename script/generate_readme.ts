import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { envs, execFnWithCatch, getFileNames, root } from '../helper'

function main() {
  const filesNames = getFileNames()
  const content = generateContent(filesNames)
  execFnWithCatch(() => {
    writeFileSync(resolve(root, envs!.README_FILE_NAME), content)
    // eslint-disable-next-line no-console
    console.info('generate readme success')
  })
}

function generateContent(filesNames: string[]) {
  const list = filesNames.map(item => `- [${item}](${envs!.VALID_DOCS_NAME}/${item})`).join('\n')
  return `${envs!.DOCS_PREFIX}\n${list}`
}

main()
