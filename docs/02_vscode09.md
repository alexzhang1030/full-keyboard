# vscode 9

VSpaceCode 插件

## VSpaceCode

这个插件和 `whichkey` 的作用基本一致，都是展示快捷键以及对应的指令

不同之处在于 `vspacecode` 更适合 vim 党

## 安装以及使用

`VSpaceCode.vspacecode`

默认快捷键是 `space`, 但是由于和之前配置的 vim 中的 `<leader>` 冲突了，所以我们可以将 normalModeKeyBindingsNonRecursive 中的 `vspacecode.space` 的映射替换为 `space + ;`

但是在非 vim 中，我们仍然可以通过 `space` 来快捷呼出菜单，这是因为在安装时我们已经自动让其注入了快捷键

## 重写配置


### 修改/增加配置

```json
{
  "vspacecode.bindingOverrides": [
    {
      "keys": "g.s",
      // or
      // "keys": ["g", "s"],
      "name": "go to line",
      "type": "command",
      "command": "workbench.action.gotoLine"
    }
  ]
}
```

### 删除配置

```json
{
  "vspacecode.bindingOverrides": [
    {
      "keys": "g.s",
      // or
      // "keys": ["g", "s"],
      "position": -1
    }
  ]
}
```

### 在原有的基础上进行修改 


下面的配置就直接重写了所有 `g` 的指令


```json
{
  "vspacecode.bindingOverrides": [
    {
      "keys": "g",
      "name": "Go...",
      "type": "bindings",
      "bindings": [
        {
          "key": "g",
          "name": "Go to",
          "type": "command",
          "command": "workbench.action.gotoLine"
        }
      ]
    }
  ]
}
```

## 定义自己的

```json
{
  // 在这个字段中进行配置
  "vspacecode.bindings": []
}
```