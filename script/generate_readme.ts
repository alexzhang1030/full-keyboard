import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { envs, execFnWithCatch, getFileNames, getSubTitle, root, types } from '../helper'

function write(type: string, index: number) {
  const filesNames = getFileNames(index)
  const content = generateContent(filesNames, type, index)
  return content
}

function generateContent(filesNames: string[], type: string, index: number) {
  const prefix = `### part ${index} ${type} \n`
  const list = filesNames.map((item) => {
    const name = /_(.*?).md/.exec(item)![1]
    const subTitle = getSubTitle(item)
    return `- [${name} - ${subTitle}](${envs!.VALID_DOCS_NAME}/0${index}_${name}.md)`
  }).join('\n')
  return prefix + list
}

function main() {
  execFnWithCatch(() => {
    let final_content = envs!.DOCS_PREFIX
    types.forEach((t, i) => {
      const content = write(t, i + 1)
      final_content += `\n\r ${content}\n`
    })
    writeFileSync(resolve(root, envs!.README_FILE_NAME), final_content)
    // eslint-disable-next-line no-console
    console.info('generate readme success')
  })
}

main()
