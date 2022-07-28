# tools 6

alfred 掌握搜索

## Alfred

[官网](https://alfredapp.com)

### 快捷键

- `cmd + space`: 打开
- `esc`: 关闭
- actions
  - `->`: 下一层
  - `esc`: 上一层
- 进入到文件夹内：
  - `cmd + ↑/↓`
  - `enter` 可以配置为打开
- search
  - `find <name>`: 进入搜索模式，选择会通过 finder 打开
  - `open <name>`: 进入搜索模式，选择就会立即打开文件
  - `in <keyword>`: 搜索包含此关键词的文件
  - `tags <tag-name>`: 基于标签搜索
- web search
  - 输入内容后，按下 ctrl + enter，那么就会调用默认的搜索引擎
- bookmarks
  - `bm <bookmark-name>`: 需要手动配置，记得配置为通过关键词来搜索

### 多文件操作(buffer)

- `opt + ↑`: 从上到下选择
- `opt + ←`: 取消选择
- `opt + ↓`: 从上到下取消
- `opt + →`: 打开 action

### web search

这个可以手动来配置触发关键词

例如你可以配置一个：

URL：`https://github.com/search?q={query}`

Keyword：`ghs`

这样你输入 `ghs <keyword>` 就会跳转到 github 的 search 界面

- github search
- npm search
