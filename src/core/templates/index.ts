import { agentsTemplate } from './agents-template.js';
import { projectTemplate, ProjectContext } from './project-template.js';
import { claudeTemplate } from './claude-template.js';
import { clineTemplate } from './cline-template.js';
import { costrictTemplate } from './costrict-template.js';
import { agentsRootStubTemplate } from './agents-root-stub.js';
import { getSlashCommandBody, SlashCommandId } from './slash-command-templates.js';
import { agentsTemplate_zh } from './agents-template_zh.js';
import { projectTemplate_zh, ProjectContext_zh } from './project-template_zh.js';
import { claudeTemplate_zh } from './claude-template_zh.js';
import { clineTemplate_zh } from './cline-template_zh.js';
import { costrictTemplate_zh } from './costrict-template_zh.js';
import { agentsRootStubTemplate_zh } from './agents-root-stub_zh.js';
import { getSlashCommandBody_zh, SlashCommandId_zh } from './slash-command-templates_zh.js';

export interface Template {
  path: string;
  content: string | ((context: ProjectContext) => string);
}

export class TemplateManager {
  static getTemplates(context: ProjectContext = {}): Template[] {
    return [
      {
        path: 'AGENTS.md',
        content: agentsTemplate
      },
      {
        path: 'project.md',
        content: projectTemplate(context)
      }
    ];
  }

  static getClaudeTemplate(): string {
    return claudeTemplate;
  }

  static getClineTemplate(): string {
    return clineTemplate;
  }

  static getCostrictTemplate(): string {
    return costrictTemplate;
  }

  static getAgentsStandardTemplate(): string {
    return agentsRootStubTemplate;
  }

  static getSlashCommandBody(id: SlashCommandId): string {
    return getSlashCommandBody(id);
  }

  // Chinese templates
  static getTemplates_zh(context: ProjectContext_zh = {}): Template[] {
    return [
      {
        path: 'AGENTS_zh.md',
        content: agentsTemplate_zh
      },
      {
        path: 'project_zh.md',
        content: projectTemplate_zh(context)
      }
    ];
  }

  static getClaudeTemplate_zh(): string {
    return claudeTemplate_zh;
  }

  static getClineTemplate_zh(): string {
    return clineTemplate_zh;
  }

  static getCostrictTemplate_zh(): string {
    return costrictTemplate_zh;
  }

  static getAgentsStandardTemplate_zh(): string {
    return agentsRootStubTemplate_zh;
  }

  static getSlashCommandBody_zh(id: SlashCommandId_zh): string {
    return getSlashCommandBody_zh(id);
  }
}

export { ProjectContext } from './project-template.js';
export type { SlashCommandId } from './slash-command-templates.js';
export { ProjectContext_zh } from './project-template_zh.js';
export type { SlashCommandId_zh } from './slash-command-templates_zh.js';
