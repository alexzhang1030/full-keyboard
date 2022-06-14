#!/usr/bin/env zx
import { echo } from 'zx/experimental'

await $`git add .`
await $`git commit -m ${process.argv[3]}`
await $`git push`

echo`=== finished push ===`
