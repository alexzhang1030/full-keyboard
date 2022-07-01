# vscode 7

使用 snippets 代码片段

## 什么是 snippets

代码片段是 VSCode 提供的能力，可以通过部分唤醒词来选择一个代码片段，然后插入到当前光标处。

## 配置 snippets

你可以选择很多预设好的 snippets 插件。当然你还可以自定义自己的 snippets。在 `xabikos.JavaScriptSnippets` 这个插件中有一些好用的 snippets。

你可以在 VSCode Command 中键入 `snippets` 选择 `configure user snippets` 来配置用户的代码片段。

你可以在不同的语言中配置代码片段，以下是一个示例：

```json
{
"Print to console": {
  "prefix": "log",
  "body": [
    "console.log('$1');",
    "$2"
  ],
  "description": "Log output to console"
  }
}
```

在下面的示例中，snippet 的名字是 `Print to console`，触发指令是 `log`。

生成的代码是 `console.log('$1');\n $2`，`$1` 是第一个 tab ，在敲击一次 `tab` 光标就到 `$2` 的位置

## 一些高级的使用

### 使用默认值

`console.log("${1:我是默认值}")`

### 选项

`console.${2|选项1|选项2|}("${1:我是默认值}")`

## 内置变量

VSCode 同时还内置了变量：

[完整的变量列表](https://code.visualstudio.com/docs/getstarted/settings#_variables)

示例：

`console.log("$TM_FILENAME")`
