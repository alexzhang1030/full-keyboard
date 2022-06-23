# vscode 1

如何在 VSCode 中操作文件

## 切换到 file explorer

我们知道在 vim 环境中，可以使用 `ctrl + w` + `hjkl` 来进行窗口的切换，但是要想在所有环境下都可以切换到 file explorer，并不是一件很容易的事情。

所以可以使用 VSCode 的快捷键，

- `workbench.files.action.focusFilesExplorer`: VSCode 指令

推荐改为 `ctrl + ;`

## 切换到编辑区

- `workbench.action.focusFirstEditorGroup`: 切换到第一个打开的编辑区

推荐改为 `ctrl + '`

## 在 file explorer 中移动光标、折叠、展开

- `jk` 移动
- `l` 折叠/展开

## 创建文件

- 配置 `explorer.newFile` 为 `a`，然后把 `when` 修改为 `filesExplorerFocus && !inputFocus` 就可以在聚焦文件管理器的时候直接通过键入 `a` 创建文件了
- 在 editor 中想直接在当前文件夹中创建一个文件，这里推荐使用 `vim` 中的配置，见 `.1`

你也可以按照同样的思路去配一下 `newFolder`
- vscode 配置为 `f`
- vim 配置为 `<Leader>nd`

## 重命名与删除文件

删除 `keybinding`
```json
{
  "key": "d",
  "command": "deleteFile",
  "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus"
}
```

重命名 `keybinding`

```json
{
  "key": "r",
  "command": "renameFile",
  "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
}
```

## 附录

### .1

配置在 `vim.normalModeKeyBindingsNonRecursive` 中

```json
 {
  "before": [
    "<Leader>",
    "n",
    "f"
  ],
  "commands": [
    {
      "command": "explorer.newFile"
    }
  ]
}
```