import { writeFileSync } from 'fs'
import { resolve } from 'path'
import inquirer from 'inquirer'
import { envs, execFnWithCatch, getFileNames, root, types } from '../helper'

const question = [
  {
    name: 'type',
    message: 'choose a type',
    type: 'list',
    choices: types,
  },
] as inquirer.QuestionCollection

async function main() {
  const { type } = await inquirer.prompt(question)
  const index = types.findIndex(t => t === type) + 1
  const fileNames = getFileNames(index)
  const len = fileNames.length
  const name = (len < 9 ? `0${len + 1}` : `${len + 1}`)
  const fileName = `${index > 10 ? index : `0${index}`}_${type}${name}`
  execFnWithCatch(() => {
    writeFileSync(resolve(root, envs!.VALID_DOCS_NAME, `${fileName}.md`), `
    # ${type} ${fileNames.length + 1}
  `.trim())
    // eslint-disable-next-line no-console
    console.info('create file successfully')
  })
}

main()
