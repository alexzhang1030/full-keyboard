# vim 14

掌握悬浮显示/大小写/注释

## 悬浮显示

- `gh`: hover

你可以让你的光标悬浮到某个 js 文件中的变量，然后在 normal 模式下键入 `gh`

## 大小写

### normal 模式

先选择一个范围

- `gu` 小写
- `gU` 大写

### 可视化模式

可视化模式下可以省略一个 `g`

- `u`
- `U`

### 大小写互换 

`~`

### 练习
```js
// 将 user 进行大小写互换
const user = 'name'
```

## 注释

- `gc` 单行注释
- `gC` 多行注释


normal 模式和可视化模式通用