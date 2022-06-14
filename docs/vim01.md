# vim 1

## 1. vscode 插件

- [Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vimvscodevim.vim)

## 2. 模式

> 这里先写常用的两种还是，还存在一个 `--VISUAL--` 模式，后文将会介绍

- `--NORMAL--`: 移动模式 通过 `i` 或 `a` 切换到 `--INSERT--` 模式，区别在于 `i` 是在当前光标前插入，`a` 是在光标后插入 
- `--INSERT--`: 插入模式 通过 `esc`、`CONTROL + C`、`CONTROL + [` 切换到 `--NORMAL--` 模式

在插入结束后，应回到移动模式下

## 3. 移动

> 所有移动应在 `--NORMAL--` 模式下执行

记忆点：右手食指在开始打字时，应在 `j` 的位置，`j` 就是向下移动，左边的 `h` 就是向左移动，右边的 `k` 就是向下移动，那么最后最右面的 `l` 就是向右移动了

- `h`: 向左移动
- `j`: 向下移动
- `k`: 向上移动
- `l`: 向右移动

## 4. 在终端中使用 vim

若使用的是 unix 系统，直接安装 `vim` 即可。若你使用的是 `windows`，推荐你安装 `wsl`。

安装完成后，可以在 terminal 中输入 `vim` 即可。

退出使用 `esc + :wq/:q` 即可退出

- `wq`: write quit
- `q`: quit
- `q!`: quit without saving

## 5. 修改键盘布局

让 caps lock 修改为：

- 单独按时是 `esc`
- 组合按时时 `ctrl`
- 并将 `ctrl` 键改为 `caps lock`

- [`windows`](https://docs.microsoft.com/zh-cn/windows/powertoys/keyboard-manager)
- [`mac`](https://blog.csdn.net/xjc2998310890/article/details/116356978)