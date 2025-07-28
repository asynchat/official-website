---
sidebar_position: 2
---
# 工作流参数

## 作用

工作流请求参数是工作流执行时的输入参数，用于传递数据、配置信息等。在Coze、Dify、LangFlow、N8N等工作流设计时只要定义下述固定参数中的同名参数名，即可在工作流中接收与使用。


## 结构

```typescript
{
    input: string,
    conversationId?: string,
    params?: Object,
    files?: string[],
    taskId?: string,
    user?: {
        email: string
        phone: string
    }
}
```

| 属性 | 说明 |
|------|------|
| input | 用户发送的消息 |
| conversationId | 会话 ID, 用于历史消息 |
| params | 在应用端聊天界面输入框左侧弹出的面板里设置参数值, `Object` 类型, 例如: `{genericImage: true}`，会一并请求给流程 |
| files | 上传的文件数组 |
| taskId | 任务 ID, 用于长时间生成任务状态查询 |
| user | 当前平台用户信息, 可用于其他业务需要 |

> 以上参数根据流程需要选取，没有用到在流程中可以不设置。