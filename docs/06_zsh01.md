# iterm 4

zsh-vi-mode

## Zsh-vi-mode

通过这个插件就可以在命令行中来使用 `vim` 的语法了。

[地址](https://github.com/jeffreytse/zsh-vi-mode)

安装完成之后，就可以使用 vim 语法来控制命令行了

插件支持三种模式，一些基本的 vim 用法都支持：

- `insert`
- `normal`
- `visual`

切换到原生的 vim：

- `vv`: 切换到原生的 vim 来输入指令

### History

#### insert 模式下

- `ctrl + p`: 历史记录上一个
- `ctrl + n`: 历史记录下一个
- `ctrl + r`: 搜索，搜索结果的上一个可以一直按 `ctrl + r`

#### normal 模式下

- `j/k`: NORMAL 模式下的上一个和下一个
- `/`: 开启历史记录搜索模式

### surround

zsh-vi-mode 提供了两种 surround 的方式：

通过环境变量 `ZSH-VI-SURROUND-BINDKEY` 来切换不同的模式

默认值就是经典值，还可以通过 `s-prefix` 来修改

#### Classical

- `S<symbol>`: 选中块添加符号
- `ys<symbol>`: 选中块添加符号
- `cs<symbol>`: 选中块修改符号
- `ds<symbol>`: 选中块删除符号

#### s-prefix

- `sa<symbol>`: 选中块添加符号
- `sd<symbol>`: 删除符号
- `sr<symbol>`: 修改符号

### 改键

在 `zsh-vi-mode` 中改键稍微有点复杂，根据[文档](https://github.com/jeffreytse/zsh-vi-mode#custom-widgets-and-keybindings) 所说，我们需要在其本体的 `zsh-vi-mode.zsh` 文件中加入自定义的函数即可。

### Increment/Decrement

[说明](https://github.com/jeffreytse/zsh-vi-mode#increment-and-decrement)

通过 `ctrl-a`/`ctrl-x` 来切换 increment/decrement 的值
