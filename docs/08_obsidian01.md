# obsidian 1

配置 vim

## 配置 Vim

安装 `Vimrc Support` 插件来支持 Obsidian 读取 Vimrc（来支持改键）

## 按键映射

例子：`map H 0`

### 模式指定

- `map`: normal visual operator-pending 模式
- `map!`: insert 模式
- `nmap`: normal
- `imap`: insert
- `vmap`: visual
- `omap`: operator pending

### 非递归模式映射

- `noremap`: normal select visual operator-pending 模式
- `noremap!`: insert
- `nnoremap`: normal
- `inoremap`: insert
- `vnoremap`: visual
- `onoremap`: operator pending

### vimrc 常用配置

```
map H 0
map L $
map K 5k
map J 5j

# yank to system clipboard
set clipboard=unnamed
```

### 通过 vim 来调用 ob 的指令

> 需要注意的是，所有的指令都必须是驼峰格式
>
> 例如：`daily-notes` => `dailyNotes`

通过 `:obcommand` 即可在 console 中打印所有 ob 的指令（opt + shift + i）

接下来，就可以在 vimrc 中配置（以关闭左侧 sidebar 为例）

```
exmap toggleLeftSidebar obcommand app:toggle-left-sidebar

# ctrl + b 映射为 app:toggle-left-sidebar 指令
nmap <C-b> :toggleLeftSidebar
```

例子：

```
# set obisidan native command
exmap toggleLeftSidebar obcommand app:toggle-left-sidebar
exmap back obcommand app:go-back
exmap forward obcommand app:go-forward

# remap to vim
nmap <C-b> :toggleLeftSidebar
nmap <C-o> :back
nmap <C-i> :forward
```

### 可以使用 `<Space>` 来配置命令

配置示例：

```
# must unmap <Space> first
unmap <Space>

# then you can use <Space>
exmap toggleLeftSidebar obcommand app:toggle-left-sidebar

# 空格 + b 映射为 app:toggle-left-sidebar 指令
nmap <Space>b :toggleLeftSidebar
```
