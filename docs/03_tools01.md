# tools 1

lazy git

## Install

推荐使用 `brew`

```bash
brew install lazygit
```

## Usage

LazyGit 是一个管理 Git 的工具，对 vim 党非常友好

可以为 `lasygit` 配置一个 alias `lg`

敲击 `lg` 即可进入 `lazygit` 页面。整个页面分为了几个大块

- 通过 `h` `l` 进行切换多个面板
- 通过 `j` `k` 上下切换面板中的各项文件
- 通过 `?` 查看命令面板

### 状态之间的切换

进入第二个面板，可以通过 `space` 切换未暂存和已暂存功能

按 `c` 可以进入 `commit` 阶段

当然，你可以切换到 `commits` 面板，选择你想要回退到的 commit ，按下 `g` 可以将此 commit 回退，如果遇到选项，直接使用第一个就好了。 

总结一下：

- `unstaged` -> `staged`: `<space>`
- `staged` -> `committed`: `c`
- `committed` -> `staged`: `g`
- `committed` -> `pushed`: `p`
- all switch `staged` and `unstaged`: `a`
- discard this change: `d`
- discard multiple file change: `D`
 