export interface ProjectContext_zh {
  projectName?: string;
  description?: string;
  techStack?: string[];
  conventions?: string;
}

export const projectTemplate_zh = (context: ProjectContext_zh = {}) => `# ${context.projectName || '项目'} 上下文

## 目的
${context.description || '[描述项目的目的和目标]'}

## 技术栈
${context.techStack?.length ? context.techStack.map(tech => `- ${tech}`).join('\n') : '- [列出主要技术]\n- [例如：TypeScript、React、Node.js]'}

## 项目约定

### 代码风格
[描述代码风格偏好、格式规则和命名约定]

### 架构模式
[记录架构决策和模式]

### 测试策略
[说明测试方法和要求]

### Git 工作流
[描述分支策略和提交约定]

## 领域上下文
[添加 AI 助手需要了解的领域特定知识]

## 重要约束
[列出任何技术、业务或监管约束]

## 外部依赖
[记录关键的外部服务、API 或系统]
`;
