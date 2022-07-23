# iterm 3

Zellij 的高级用法

## session

可以理解为当前 zellij 的快照。我们可以保留当前 zellij 的布局。

### 创建

- `ctrl + o d`: 在 zellij 中使用，可以快速创建基于当前的 session，并退出 zellij，但是这种方式有一个很大的弊端，那就是 **名字是随机的**
- `zellij attach -c <session-name>`: 通过这种方式进入一个 zj 会话，再手动保存 session，那么名字就会被指定

### 使用

- `zj attach <session-name>`: attach alias `a`

### 查看

- `zj list-session`: alias `ls`

### 清空

- `kill-session <session-name>` alias `k`: 删除一个指定的 session
- `kill-all-session` alias `ka`: 清空所有 session

## sync

- `ctrl + t s`: 开启同步模式，当前 tab 的所有 panel 都会同步。应用场景：`cd`

## scroll

当命令较多时，如果需要滚动，可以使用 `ctrl + s` 进入滚动模式：

- `jk`: 滚动一行
- `ud`: 滚动半屏

## 修改配置

当你认为某些 Zellij 的快捷键不太好用，你可以自己创建配置。

```bash
# 1. 创建一个文件夹
mkdir ~/.config/zellij
# 2. 根据 zellij setup 将配置文件写入到指定文件中
zellij setup --dump-config > ~/.config/zellij/config.yaml
```

[文档](https://zellij.dev/documentation/)
