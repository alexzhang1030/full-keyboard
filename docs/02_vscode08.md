# vscode 8

掌握重构相关的功能

## VSCode 内建的重构命令

选中代码可以使用 `ctrl + .` 或者 `ctrl + shift + r`(只调出与重构相关指令) 来调出重构指令

一般来说分为下面几种：

- 提炼函数
- 提炼变量
- 提炼代码块
- 重命名一个符号（这个前文中已经说到了，并且已经配置成了 `<leader>rn`

## 使用插件增强 VSCode 的重构功能

### 推荐的重构插件

- `Abracadabra`
- `Hocus Pocus`
- `javascript booster`

### Abracadabra

- `rename symbol`
- `extract variables`
- `inline variables`
- `to template string`

### Hocus Pocus

以下是一些常用的命令，可以配成相关的 vim 指令

- `create a function`: `<leader>ff`
- `create a variable`: `<leader>vv`

照例还是配置在 `normal` 模式下

```json
[
      {
      "before": [
        "<Leader>",
        "v",
        "v"
      ],
      "commands": [
        {
          "command": "hocusPocus.createVariable"
        }
      ]
    },
    {
      "before": [
        "<Leader>",
        "f",
        "f"
      ],
      "commands": [
        {
          "command": "hocusPocus.createFunction"
        }
      ]
    }
]
```


### javascript booster

- `extend selection`：扩大选择区域
- `shrink selection`：缩小选择区域

不过 vim 党其实 vim 自身就带这个能力：敲击 `v` 进入可视化模式：

- `af`：扩大
