# vim 18

vim 调用 vscode 的命令

## 通过 vim 去调用 vscode 的指令

例如我们都知道，`shift + alt + f` 是 vscode 格式化文档的方式，但实质上这个快捷键最终是调用了一个指令 `editor.action.formatDocument`，所以我们就可以快速配置一下了：

```json
{
  "vim.normalModeKeyBindingsNonRecursive": [
  {
      "before": [
        "<Leader>",
        "f",
        "d"
      ],
      "commands": [
        "editor.action.formatDocument"
      ]
    }
  ]
}
```

现在我们使用 `<Leader> + f + d` 一样可以来格式化文档了

## 如何去找这个快捷键

当你想看某个快捷键对应的指令的时候，你可以切换到 `Keyboard Shortcuts` 查看对应的指令

## 推荐配置的快捷键

```json
{
  "vim.normalModeKeyBindingsNonRecursive": [
  {
      "before": [
        "<Leader>",
        "f",
        "d"
      ],
      "commands": [
        // 格式化文档
        "editor.action.formatDocument"
      ]
    }, {
      "before": [
        "<Leader>",
        "r",
        "n"
      ],
      "commands": [
        // 重命名
        "editor.action.rename"
      ]
    },
    {
      "before": [
        "<Leader>",
        "["
      ],
      "commands": [
        // 折叠代码
        {
          "command": "editor.fold"
        },
        {
          // 配置一下这个指令，用于折叠后跳转到折叠完的位置
          "command": "vim.remap",
          "args": {
            "after": [
              "$",
              "%"
            ]
          }
        }
      ]
    }
  ]
}
```