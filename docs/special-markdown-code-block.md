---
sidebar_position: 3
---

# 特殊 Markdown 代码块

在流程返回时，通过JSON代码块传递数据

## 规则

\`\`\`sparkai-data-[target]
\{\}
\`\`\`

以 `sparkai-data-` 开头，`[target]`标识特定目的的JSON数据。

## Target

### images

图片，sparkai-data-images

```json
[
    {url: "https://example.com/image1.jpg"},
    {url: "https://example.com/image2.jpg"}
]
```

### videos

视频，sparkai-data-videos

```json
[
    {url: "https://example.com/video1.mp4"},
    {url: "https://example.com/video2.mp4"}
]
```

### audios

音频，sparkai-data-audios

```json
[
    {url: "https://example.com/audio1.mp3"},
    {url: "https://example.com/audio2.mp3"}
]
```

### files

文件，sparkai-data-files

```json
[
    {url: "https://example.com/file1.pdf"},
    {url: "https://example.com/file2.pdf"}
]
```

### task

长时间运行的生成任务，sparkai-data-task

```json
{
    "taskId": "123", // 任务 ID
    "delay": 60, // 单位秒，定时请求任务执行结果，根据实际任务运行时长决定合适的时间间隔
}
```

一旦获取到以上数据，客户端就会按`delay`间隔定时请求流程执行，直到任务成功完成或失败，此两种状态都将终止继续请求。

定时请求的过程中，会自动填充工作流参数 `taskId`。此时工作流必须返回以下格式的普通文本数据。切记不要以Markdown的JSON格式包裹。

```text
{
    "status": "pending", // done | pending | error
    "type": "images", // images | videos | audios | files
    "data": "Markdown Text"
}
```

> `Markdown Text` 支持除 task 以外的所有 `spark-data-[target]` 特定代码块。