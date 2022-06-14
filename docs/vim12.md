# vim 12

处理包裹字符的符号

## vim-surround

通过这个插件来处理

### 使用方法

- 改变当前字符的符号 `cs<存在的符号><新的符号>`
- 添加包裹的符号 `ys<范围><符号>`
- 删除包裹的符号 `ds<符号>`
- 可视化模式下选中后，添加符号 `S<符号>`


### 练习场

```js
// 删除 remove 的 {}
import { remove } from '.'
// 为 add 添加 {} ysiw{
import add from ''

// 使用 cs"' 将单引号修改为双引号
const str = 'hello world'

// 可视化模式下为下面的文字选中后添加单引号
const a = b
```