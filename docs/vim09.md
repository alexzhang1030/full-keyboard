# vim 9

掌握高效移动的方法

## easy-motion

通过 easy-motion 可以通过标注，然后快速移动到标注的位置

开启 `easy-motion` 插件： `vim.easymotion: true`

> 注意，下文中的 `<leader>` 指的是 vim 中的特指按键，默认情况下是 `\`, 可以配置为 `<space>` 即空格

- `<leader><leader>w`: start of word forward
- `<leader><leader>b`: start of word backward
- `<leader><leader>e`: end of word forward
- `<leader><leader>ge`: end of word backward
- `<leader><leader>j`: start of line forward
- `<leader><leader>k`: start of line backward
- `<leader><leader>I`: Matches beginning & ending of word, includes `camelCase`, `after _`, and after `#` forward
- `<leader><leader>L`: Matches beginning & ending of word, includes `camelCase`, `after _`, and after `#` backward

## sneck

开启 snack `vim.sneck: true`

- `s + 2个字符`: 向后搜索 
- `S + 2个字符`: 向前搜索
- 可以使用 `sneck` 来替换 `f`, 由于 s 还有其他的用途，所以我们可以将 `s` 映射为 `f`, 来释放 `s`

### 配置

```jsonc
// 在 normal 模式下改写，非递归
"vim.normalModeKeyBindingsNonRecursive": [
   {
      "before": ["f"],
      "after": ["s"]
    },
    {
      "before": ["F"],
      "after": ["S"]
    },
    {
      "before": ["s"],
      "after": ["c", "l"]
    },
    {
      "before": ["S"],
      "after": ["^", "C"]
    }
  ]
```

现在，你的 `f` 就是 `sneck` 的按键了, 当然，你可以让可视化模式与 normal 模式同步

```json
"vim.visualModeKeyBindingsNonRecursive": [
  {
    "before": ["f"],
    "after": ["s"]
  },
],
```

注意在 operation pending 的时候也要注意改键 
```json
"vim.operatorPendingModeKeyBindingsNonRecursive": [
 {
    "before": ["f"],
    "after": ["z"]
  },
  {
    "before": ["F"],
    "after": ["Z"]
  }
],
```