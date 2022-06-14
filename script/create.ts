import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { envs, execFnWithCatch, getFileNames, root } from '../helper'

function main() {
  const filesNames = getFileNames()
  const fileName = envs.CREATE_FILE_PREFIX + (filesNames.length + 1)
  execFnWithCatch(() => {
    writeFileSync(resolve(root, envs.VALID_DOCS_NAME, `${fileName}.md`), `
    # ${envs.CREATE_FILE_PREFIX} ${filesNames.length + 1}
  `.trim())
    // eslint-disable-next-line no-console
    console.info('create file successfully')
  })
}

main()
