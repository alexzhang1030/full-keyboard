# vim7

如何在文件中移动的更快

## 滚动

- `ctrl + f` forward 向下滚动一屏
- `ctrl + b` backward 向上滚动一屏
- `ctrl + d` 向下滚动半屏
- `ctrl + u` 向上滚动半屏
- `ctrl + e` 向下滚动一行
- `ctrl + y` 向上滚动一行

推荐在 `--NORMAL--` 和 `--VISUAL--` 模式下配置滚动指令

- `shift` + `k` 向上滚动 5 行
- `shift` + `j` 向下滚动 5 行

```json
  "vim.visualModeKeyBindings": [
    {
      "before": ["J"],
      "after": [5, "j"]
    },
    {
      "before": ["K"],
      "after": [5, "k"]
    }
  ],
 
```

## 基于行

- `zz` 居中
- `zt` 居上
- `zb` 居下

## 跳转文件

- `gg` 跳转到文件头
- `G` 跳转到文件尾
- `行数` + `gg` / `G` 跳转到指定行数