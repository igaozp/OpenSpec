export type SlashCommandId_zh = 'proposal' | 'apply' | 'archive';

const baseGuardrails_zh = `**防护措施**
- 首选简单、最小化的实现，仅在明确请求或要求时才增加复杂性。
- 将变更紧密限定在请求的结果范围内。
- 如果需要额外的 OpenSpec 约定或说明，请参考 \`openspec/AGENTS.md\`（位于 \`openspec/\` 目录内——如果看不到，请运行 \`ls openspec\` 或 \`openspec update\`）。`;

const proposalGuardrails_zh = `${baseGuardrails_zh}\n- 识别任何模糊或不明确的细节，并在编辑文件之前提出必要的后续问题。`;

const proposalSteps_zh = `**步骤**
1. 查看 \`openspec/project.md\`，运行 \`openspec list\` 和 \`openspec list --specs\`，并检查相关代码或文档（例如通过 \`rg\`/\`ls\`）以在当前行为的基础上制定提案；注意任何需要澄清的差距。
2. 选择唯一的动词开头的 \`change-id\`，并在 \`openspec/changes/<id>/\` 下搭建 \`proposal.md\`、\`tasks.md\` 和 \`design.md\`（在需要时）。
3. 将变更映射到具体的功能或需求，将多范围工作分解为具有明确关系和顺序的不同规范增量。
4. 当解决方案跨越多个系统、引入新模式或在提交规范之前需要进行权衡讨论时，在 \`design.md\` 中捕获架构推理。
5. 在 \`changes/<id>/specs/<capability>/spec.md\` 中起草规范增量（每个功能一个文件夹），使用 \`## ADDED|MODIFIED|REMOVED Requirements\`，每个需求至少包含一个 \`#### Scenario:\`，并在相关时交叉引用相关功能。
6. 将 \`tasks.md\` 起草为有序的小型可验证工作项列表，这些工作项可提供用户可见的进度，包括验证（测试、工具），并突出依赖关系或可并行化的工作。
7. 使用 \`openspec validate <id> --strict\` 进行验证，并在分享提案之前解决每个问题。`;

const proposalReferences_zh = `**参考**
- 当验证失败时，使用 \`openspec show <id> --json --deltas-only\` 或 \`openspec show <spec> --type spec\` 检查详细信息。
- 在编写新需求之前，使用 \`rg -n "Requirement:|Scenario:" openspec/specs\` 搜索现有需求。
- 使用 \`rg <keyword>\`、\`ls\` 或直接文件读取探索代码库，以便提案与当前实现实际情况保持一致。`;

const applySteps_zh = `**步骤**
将这些步骤作为待办事项跟踪，逐个完成。
1. 阅读 \`changes/<id>/proposal.md\`、\`design.md\`（如果存在）和 \`tasks.md\` 以确认范围和验收标准。
2. 按顺序完成任务，保持编辑最小化并专注于请求的变更。
3. 在更新状态之前确认完成——确保 \`tasks.md\` 中的每一项都已完成。
4. 所有工作完成后更新清单，以便每个任务都标记为 \`- [x]\` 并反映实际情况。
5. 需要额外上下文时，参考 \`openspec list\` 或 \`openspec show <item>\`。`;

const applyReferences_zh = `**参考**
- 如果在实施时需要提案的额外上下文，使用 \`openspec show <id> --json --deltas-only\`。`;

const archiveSteps_zh = `**步骤**
1. 确定要归档的变更 ID：
   - 如果此提示已经包含特定的变更 ID（例如在由斜杠命令参数填充的 \`<ChangeId>\` 块内），请在修剪空白后使用该值。
   - 如果对话中松散地引用了变更（例如通过标题或摘要），运行 \`openspec list\` 以显示可能的 ID，分享相关候选项，并确认用户想要的是哪一个。
   - 否则，查看对话，运行 \`openspec list\`，并询问用户要归档哪个变更；在继续之前等待确认的变更 ID。
   - 如果仍然无法识别单个变更 ID，请停止并告诉用户您还不能归档任何内容。
2. 通过运行 \`openspec list\`（或 \`openspec show <id>\`）验证变更 ID，如果变更缺失、已归档或其他方面未准备好归档，则停止。
3. 运行 \`openspec archive <id> --yes\`，以便 CLI 移动变更并应用规范更新而不提示（仅对仅工具工作使用 \`--skip-specs\`）。
4. 查看命令输出以确认目标规范已更新，变更已进入 \`changes/archive/\`。
5. 如果有任何异常，使用 \`openspec validate --strict\` 进行验证并使用 \`openspec show <id>\` 进行检查。`;

const archiveReferences_zh = `**参考**
- 在归档之前使用 \`openspec list\` 确认变更 ID。
- 使用 \`openspec list --specs\` 检查刷新的规范，并在移交之前解决任何验证问题。`;

export const slashCommandBodies_zh: Record<SlashCommandId_zh, string> = {
  proposal: [proposalGuardrails_zh, proposalSteps_zh, proposalReferences_zh].join('\n\n'),
  apply: [baseGuardrails_zh, applySteps_zh, applyReferences_zh].join('\n\n'),
  archive: [baseGuardrails_zh, archiveSteps_zh, archiveReferences_zh].join('\n\n')
};

export function getSlashCommandBody_zh(id: SlashCommandId_zh): string {
  return slashCommandBodies_zh[id];
}
