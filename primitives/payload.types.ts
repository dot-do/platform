/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    functions: Function;
    workflows: Workflow;
    nouns: Noun;
    things: Thing;
    events: Event;
    projects: Project;
    users: User;
    roles: Role;
    webhooks: Webhook;
    settings: Setting;
    'payload-jobs': PayloadJob;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {
    functions: {
      executions: 'events';
    };
    workflows: {
      executions: 'events';
    };
    nouns: {
      related: 'nouns';
      things: 'things';
    };
    things: {
      events: 'events';
    };
  };
  collectionsSelect: {
    functions: FunctionsSelect<false> | FunctionsSelect<true>;
    workflows: WorkflowsSelect<false> | WorkflowsSelect<true>;
    nouns: NounsSelect<false> | NounsSelect<true>;
    things: ThingsSelect<false> | ThingsSelect<true>;
    events: EventsSelect<false> | EventsSelect<true>;
    projects: ProjectsSelect<false> | ProjectsSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    roles: RolesSelect<false> | RolesSelect<true>;
    webhooks: WebhooksSelect<false> | WebhooksSelect<true>;
    settings: SettingsSelect<false> | SettingsSelect<true>;
    'payload-jobs': PayloadJobsSelect<false> | PayloadJobsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: {
      generate: TaskGenerate;
      inline: {
        input: unknown;
        output: unknown;
      };
    };
    workflows: {
      embedData: WorkflowEmbedData;
      executeFunction: WorkflowExecuteFunction;
      executeWorkflow: WorkflowExecuteWorkflow;
      generateDatabase: WorkflowGenerateDatabase;
      generateNoun: WorkflowGenerateNoun;
      generateThing: WorkflowGenerateThing;
    };
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "functions".
 */
export interface Function {
  id: string;
  project?: (string | null) | Project;
  name: string;
  output?: ('Text' | 'Object' | 'Code' | 'List') | null;
  object?: (string | null) | Noun;
  model?:
    | (
        | 'thedrummer/valkyrie-49b-v1'
        | 'anthropic/claude-opus-4'
        | 'anthropic/claude-sonnet-4'
        | 'mistralai/devstral-small'
        | 'mistralai/devstral-small'
        | 'google/gemma-3n-e4b-it'
        | 'google/gemini-2.5-flash-preview-05-20'
        | 'google/gemini-2.5-flash-preview-05-20'
        | 'openai/codex-mini'
        | 'meta-llama/llama-3.3-8b-instruct'
        | 'nousresearch/deephermes-3-mistral-24b-preview'
        | 'mistralai/mistral-medium-3'
        | 'google/gemini-2.5-pro-preview'
        | 'arcee-ai/caller-large'
        | 'arcee-ai/spotlight'
        | 'arcee-ai/maestro-reasoning'
        | 'arcee-ai/virtuoso-large'
        | 'arcee-ai/coder-large'
        | 'arcee-ai/virtuoso-medium-v2'
        | 'arcee-ai/arcee-blitz'
        | 'microsoft/phi-4-reasoning-plus'
        | 'microsoft/phi-4-reasoning-plus'
        | 'microsoft/phi-4-reasoning'
        | 'inception/mercury-coder-small-beta'
        | 'opengvlab/internvl3-14b'
        | 'opengvlab/internvl3-2b'
        | 'deepseek/deepseek-prover-v2'
        | 'deepseek/deepseek-prover-v2'
        | 'meta-llama/llama-guard-4-12b'
        | 'qwen/qwen3-30b-a3b'
        | 'qwen/qwen3-30b-a3b'
        | 'qwen/qwen3-8b'
        | 'qwen/qwen3-8b'
        | 'qwen/qwen3-14b'
        | 'qwen/qwen3-14b'
        | 'qwen/qwen3-32b'
        | 'qwen/qwen3-32b'
        | 'qwen/qwen3-235b-a22b'
        | 'qwen/qwen3-235b-a22b'
        | 'tngtech/deepseek-r1t-chimera'
        | 'thudm/glm-z1-rumination-32b'
        | 'microsoft/mai-ds-r1'
        | 'thudm/glm-z1-32b'
        | 'thudm/glm-z1-32b'
        | 'thudm/glm-4-32b'
        | 'thudm/glm-4-32b'
        | 'google/gemini-2.5-flash-preview'
        | 'google/gemini-2.5-flash-preview'
        | 'openai/o4-mini-high'
        | 'openai/o3'
        | 'openai/o4-mini'
        | 'shisa-ai/shisa-v2-llama3.3-70b'
        | 'qwen/qwen2.5-coder-7b-instruct'
        | 'openai/gpt-4.1'
        | 'openai/gpt-4.1-mini'
        | 'openai/gpt-4.1-nano'
        | 'eleutherai/llemma_7b'
        | 'alfredpros/codellama-7b-instruct-solidity'
        | 'arliai/qwq-32b-arliai-rpr-v1'
        | 'agentica-org/deepcoder-14b-preview'
        | 'moonshotai/kimi-vl-a3b-thinking'
        | 'x-ai/grok-3-mini-beta'
        | 'x-ai/grok-3-beta'
        | 'nvidia/llama-3.3-nemotron-super-49b-v1'
        | 'nvidia/llama-3.3-nemotron-super-49b-v1'
        | 'nvidia/llama-3.1-nemotron-ultra-253b-v1'
        | 'meta-llama/llama-4-maverick'
        | 'meta-llama/llama-4-maverick'
        | 'meta-llama/llama-4-scout'
        | 'meta-llama/llama-4-scout'
        | 'all-hands/openhands-lm-32b-v0.1'
        | 'deepseek/deepseek-v3-base'
        | 'scb10x/llama3.1-typhoon2-8b-instruct'
        | 'scb10x/llama3.1-typhoon2-70b-instruct'
        | 'qwen/qwen2.5-vl-3b-instruct'
        | 'google/gemini-2.5-pro-exp-03-25'
        | 'qwen/qwen2.5-vl-32b-instruct'
        | 'qwen/qwen2.5-vl-32b-instruct'
        | 'deepseek/deepseek-chat-v3-0324'
        | 'deepseek/deepseek-chat-v3-0324'
        | 'featherless/qwerky-72b'
        | 'openai/o1-pro'
        | 'mistralai/mistral-small-3.1-24b-instruct'
        | 'mistralai/mistral-small-3.1-24b-instruct'
        | 'open-r1/olympiccoder-32b'
        | 'google/gemma-3-1b-it'
        | 'google/gemma-3-4b-it'
        | 'google/gemma-3-4b-it'
        | 'ai21/jamba-1.6-large'
        | 'ai21/jamba-1.6-mini'
        | 'google/gemma-3-12b-it'
        | 'google/gemma-3-12b-it'
        | 'cohere/command-a'
        | 'openai/gpt-4o-mini-search-preview'
        | 'openai/gpt-4o-search-preview'
        | 'rekaai/reka-flash-3'
        | 'google/gemma-3-27b-it'
        | 'google/gemma-3-27b-it'
        | 'thedrummer/anubis-pro-105b-v1'
        | 'thedrummer/skyfall-36b-v2'
        | 'microsoft/phi-4-multimodal-instruct'
        | 'perplexity/sonar-reasoning-pro'
        | 'perplexity/sonar-pro'
        | 'perplexity/sonar-deep-research'
        | 'deepseek/deepseek-r1-zero'
        | 'qwen/qwq-32b'
        | 'qwen/qwq-32b'
        | 'moonshotai/moonlight-16b-a3b-instruct'
        | 'nousresearch/deephermes-3-llama-3-8b-preview'
        | 'openai/gpt-4.5-preview'
        | 'google/gemini-2.0-flash-lite-001'
        | 'anthropic/claude-3.7-sonnet'
        | 'anthropic/claude-3.7-sonnet'
        | 'anthropic/claude-3.7-sonnet'
        | 'perplexity/r1-1776'
        | 'mistralai/mistral-saba'
        | 'cognitivecomputations/dolphin3.0-r1-mistral-24b'
        | 'cognitivecomputations/dolphin3.0-mistral-24b'
        | 'meta-llama/llama-guard-3-8b'
        | 'openai/o3-mini-high'
        | 'deepseek/deepseek-r1-distill-llama-8b'
        | 'google/gemini-2.0-flash-001'
        | 'qwen/qwen-vl-plus'
        | 'aion-labs/aion-1.0'
        | 'aion-labs/aion-1.0-mini'
        | 'aion-labs/aion-rp-llama-3.1-8b'
        | 'qwen/qwen-vl-max'
        | 'qwen/qwen-turbo'
        | 'qwen/qwen2.5-vl-72b-instruct'
        | 'qwen/qwen2.5-vl-72b-instruct'
        | 'qwen/qwen-plus'
        | 'qwen/qwen-max'
        | 'openai/o3-mini'
        | 'deepseek/deepseek-r1-distill-qwen-1.5b'
        | 'mistralai/mistral-small-24b-instruct-2501'
        | 'mistralai/mistral-small-24b-instruct-2501'
        | 'deepseek/deepseek-r1-distill-qwen-32b'
        | 'deepseek/deepseek-r1-distill-qwen-32b'
        | 'deepseek/deepseek-r1-distill-qwen-14b'
        | 'deepseek/deepseek-r1-distill-qwen-14b'
        | 'perplexity/sonar-reasoning'
        | 'perplexity/sonar'
        | 'liquid/lfm-7b'
        | 'liquid/lfm-3b'
        | 'deepseek/deepseek-r1-distill-llama-70b'
        | 'deepseek/deepseek-r1-distill-llama-70b'
        | 'deepseek/deepseek-r1'
        | 'deepseek/deepseek-r1'
        | 'minimax/minimax-01'
        | 'mistralai/codestral-2501'
        | 'microsoft/phi-4'
        | 'deepseek/deepseek-chat'
        | 'deepseek/deepseek-chat'
        | 'sao10k/l3.3-euryale-70b'
        | 'openai/o1'
        | 'eva-unit-01/eva-llama-3.33-70b'
        | 'x-ai/grok-2-vision-1212'
        | 'x-ai/grok-2-1212'
        | 'cohere/command-r7b-12-2024'
        | 'google/gemini-2.0-flash-exp'
        | 'meta-llama/llama-3.3-70b-instruct'
        | 'meta-llama/llama-3.3-70b-instruct'
        | 'amazon/nova-lite-v1'
        | 'amazon/nova-micro-v1'
        | 'amazon/nova-pro-v1'
        | 'qwen/qwq-32b-preview'
        | 'eva-unit-01/eva-qwen-2.5-72b'
        | 'openai/gpt-4o-2024-11-20'
        | 'mistralai/mistral-large-2411'
        | 'mistralai/mistral-large-2407'
        | 'mistralai/pixtral-large-2411'
        | 'x-ai/grok-vision-beta'
        | 'infermatic/mn-inferor-12b'
        | 'qwen/qwen-2.5-coder-32b-instruct'
        | 'qwen/qwen-2.5-coder-32b-instruct'
        | 'raifle/sorcererlm-8x22b'
        | 'eva-unit-01/eva-qwen-2.5-32b'
        | 'thedrummer/unslopnemo-12b'
        | 'anthropic/claude-3.5-haiku'
        | 'anthropic/claude-3.5-haiku'
        | 'anthropic/claude-3.5-haiku-20241022'
        | 'anthropic/claude-3.5-haiku-20241022'
        | 'neversleep/llama-3.1-lumimaid-70b'
        | 'anthracite-org/magnum-v4-72b'
        | 'anthropic/claude-3.5-sonnet'
        | 'anthropic/claude-3.5-sonnet'
        | 'x-ai/grok-beta'
        | 'mistralai/ministral-8b'
        | 'mistralai/ministral-3b'
        | 'qwen/qwen-2.5-7b-instruct'
        | 'qwen/qwen-2.5-7b-instruct'
        | 'nvidia/llama-3.1-nemotron-70b-instruct'
        | 'inflection/inflection-3-pi'
        | 'inflection/inflection-3-productivity'
        | 'google/gemini-flash-1.5-8b'
        | 'anthracite-org/magnum-v2-72b'
        | 'thedrummer/rocinante-12b'
        | 'liquid/lfm-40b'
        | 'meta-llama/llama-3.2-1b-instruct'
        | 'meta-llama/llama-3.2-1b-instruct'
        | 'meta-llama/llama-3.2-90b-vision-instruct'
        | 'meta-llama/llama-3.2-3b-instruct'
        | 'meta-llama/llama-3.2-3b-instruct'
        | 'meta-llama/llama-3.2-11b-vision-instruct'
        | 'meta-llama/llama-3.2-11b-vision-instruct'
        | 'qwen/qwen-2.5-72b-instruct'
        | 'qwen/qwen-2.5-72b-instruct'
        | 'neversleep/llama-3.1-lumimaid-8b'
        | 'openai/o1-preview-2024-09-12'
        | 'openai/o1-preview'
        | 'openai/o1-mini-2024-09-12'
        | 'openai/o1-mini'
        | 'mistralai/pixtral-12b'
        | 'cohere/command-r-plus-08-2024'
        | 'cohere/command-r-08-2024'
        | 'qwen/qwen-2.5-vl-7b-instruct'
        | 'qwen/qwen-2.5-vl-7b-instruct'
        | 'sao10k/l3.1-euryale-70b'
        | 'microsoft/phi-3.5-mini-128k-instruct'
        | 'nousresearch/hermes-3-llama-3.1-70b'
        | 'nousresearch/hermes-3-llama-3.1-405b'
        | 'openai/chatgpt-4o-latest'
        | 'aetherwiing/mn-starcannon-12b'
        | 'sao10k/l3-lunaris-8b'
        | 'openai/gpt-4o-2024-08-06'
        | 'nothingiisreal/mn-celeste-12b'
        | 'meta-llama/llama-3.1-405b'
        | 'meta-llama/llama-3.1-405b'
        | 'perplexity/llama-3.1-sonar-small-128k-online'
        | 'perplexity/llama-3.1-sonar-large-128k-online'
        | 'meta-llama/llama-3.1-70b-instruct'
        | 'meta-llama/llama-3.1-8b-instruct'
        | 'meta-llama/llama-3.1-8b-instruct'
        | 'meta-llama/llama-3.1-405b-instruct'
        | 'mistralai/mistral-nemo'
        | 'mistralai/mistral-nemo'
        | 'mistralai/codestral-mamba'
        | 'openai/gpt-4o-mini'
        | 'openai/gpt-4o-mini-2024-07-18'
        | 'google/gemma-2-27b-it'
        | 'alpindale/magnum-72b'
        | 'google/gemma-2-9b-it'
        | 'google/gemma-2-9b-it'
        | '01-ai/yi-large'
        | 'anthropic/claude-3.5-sonnet-20240620'
        | 'anthropic/claude-3.5-sonnet-20240620'
        | 'sao10k/l3-euryale-70b'
        | 'cognitivecomputations/dolphin-mixtral-8x22b'
        | 'qwen/qwen-2-72b-instruct'
        | 'nousresearch/hermes-2-pro-llama-3-8b'
        | 'mistralai/mistral-7b-instruct'
        | 'mistralai/mistral-7b-instruct'
        | 'mistralai/mistral-7b-instruct-v0.3'
        | 'microsoft/phi-3-mini-128k-instruct'
        | 'microsoft/phi-3-medium-128k-instruct'
        | 'neversleep/llama-3-lumimaid-70b'
        | 'deepseek/deepseek-coder'
        | 'google/gemini-flash-1.5'
        | 'openai/gpt-4o-2024-05-13'
        | 'openai/gpt-4o'
        | 'openai/gpt-4o'
        | 'meta-llama/llama-guard-2-8b'
        | 'allenai/olmo-7b-instruct'
        | 'neversleep/llama-3-lumimaid-8b'
        | 'neversleep/llama-3-lumimaid-8b'
        | 'sao10k/fimbulvetr-11b-v2'
        | 'meta-llama/llama-3-8b-instruct'
        | 'meta-llama/llama-3-70b-instruct'
        | 'mistralai/mixtral-8x22b-instruct'
        | 'microsoft/wizardlm-2-8x22b'
        | 'openai/gpt-4-turbo'
        | 'google/gemini-pro-1.5'
        | 'cohere/command-r-plus'
        | 'cohere/command-r-plus-04-2024'
        | 'sophosympatheia/midnight-rose-70b'
        | 'cohere/command'
        | 'cohere/command-r'
        | 'anthropic/claude-3-haiku'
        | 'anthropic/claude-3-haiku'
        | 'anthropic/claude-3-opus'
        | 'anthropic/claude-3-opus'
        | 'anthropic/claude-3-sonnet'
        | 'anthropic/claude-3-sonnet'
        | 'cohere/command-r-03-2024'
        | 'mistralai/mistral-large'
        | 'openai/gpt-3.5-turbo-0613'
        | 'openai/gpt-4-turbo-preview'
        | 'nousresearch/nous-hermes-2-mixtral-8x7b-dpo'
        | 'mistralai/mistral-tiny'
        | 'mistralai/mistral-medium'
        | 'mistralai/mistral-small'
        | 'mistralai/mistral-7b-instruct-v0.2'
        | 'mistralai/mixtral-8x7b-instruct'
        | 'neversleep/noromaid-20b'
        | 'anthropic/claude-2.1'
        | 'anthropic/claude-2.1'
        | 'anthropic/claude-2'
        | 'anthropic/claude-2'
        | 'alpindale/goliath-120b'
        | 'undi95/toppy-m-7b'
        | 'openai/gpt-3.5-turbo-1106'
        | 'openai/gpt-4-1106-preview'
        | 'mistralai/mistral-7b-instruct-v0.1'
        | 'openai/gpt-3.5-turbo-instruct'
        | 'pygmalionai/mythalion-13b'
        | 'openai/gpt-4-32k-0314'
        | 'openai/gpt-3.5-turbo-16k'
        | 'openai/gpt-4-32k'
        | 'mancer/weaver'
        | 'anthropic/claude-2.0'
        | 'anthropic/claude-2.0'
        | 'undi95/remm-slerp-l2-13b'
        | 'gryphe/mythomax-l2-13b'
        | 'meta-llama/llama-2-70b-chat'
        | 'openai/gpt-3.5-turbo'
        | 'openai/gpt-4'
        | 'openai/gpt-3.5-turbo-0125'
        | 'openai/gpt-4-0314'
        | 'qwen/qwen3-0.6b-04-28'
        | 'qwen/qwen3-1.7b'
        | 'qwen/qwen3-4b'
        | 'thudm/glm-z1-9b'
        | 'thudm/glm-4-9b'
        | 'openrouter/optimus-alpha'
        | 'nvidia/llama-3.1-nemotron-nano-8b-v1'
        | 'tokyotech-llm/llama-3.1-swallow-8b-instruct-v0.3'
        | 'openrouter/quasar-alpha'
        | 'allenai/molmo-7b-d'
        | 'bytedance-research/ui-tars-72b'
        | 'steelskull/l3.3-electra-r1-70b'
        | 'allenai/olmo-2-0325-32b-instruct'
        | 'latitudegames/wayfarer-large-70b-llama-3.3'
        | 'qwen/qwen2.5-32b-instruct'
        | 'allenai/llama-3.1-tulu-3-405b'
        | 'sao10k/l3.1-70b-hanami-x1'
        | 'inflatebot/mn-mag-mell-r1'
        | 'google/gemini-exp-1121'
        | 'google/gemini-exp-1114'
        | 'x-ai/grok-2-mini'
        | 'x-ai/grok-2'
        | 'eva-unit-01/eva-qwen-2.5-14b'
        | 'mattshumer/reflection-70b'
        | 'google/gemini-flash-1.5-exp'
        | 'lynn/soliloquy-v3'
        | 'ai21/jamba-1-5-large'
        | '01-ai/yi-1.5-34b-chat'
        | 'ai21/jamba-1-5-mini'
        | '01-ai/yi-large-fc'
        | '01-ai/yi-vision'
        | '01-ai/yi-large-turbo'
        | 'google/gemini-pro-1.5-exp'
        | 'cognitivecomputations/dolphin-llama-3-70b'
        | 'qwen/qwen-2-7b-instruct'
        | 'nousresearch/hermes-2-theta-llama-3-8b'
        | 'sao10k/l3-stheno-8b'
        | 'ai21/jamba-instruct'
        | 'nvidia/nemotron-4-340b-instruct'
        | 'microsoft/phi-3-medium-4k-instruct'
        | 'bigcode/starcoder2-15b-instruct'
        | 'openchat/openchat-8b'
        | 'deepseek/deepseek-chat-v2.5'
        | 'perplexity/llama-3-sonar-small-32k-chat'
        | 'perplexity/llama-3-sonar-large-32k-online'
        | 'perplexity/llama-3-sonar-small-32k-online'
        | 'perplexity/llama-3-sonar-large-32k-chat'
        | 'meta-llama/llama-3-70b'
        | 'meta-llama/llama-3-8b'
        | 'liuhaotian/llava-yi-34b'
        | 'qwen/qwen-4b-chat'
        | 'qwen/qwen-32b-chat'
        | 'qwen/qwen-7b-chat'
        | 'qwen/qwen-110b-chat'
        | 'qwen/qwen-72b-chat'
        | 'qwen/qwen-14b-chat'
        | 'snowflake/snowflake-arctic-instruct'
        | 'fireworks/firellava-13b'
        | 'lynn/soliloquy-l3'
        | 'microsoft/wizardlm-2-7b'
        | 'huggingfaceh4/zephyr-orpo-141b-a35b'
        | 'mistralai/mixtral-8x22b'
        | 'databricks/dbrx-instruct'
        | 'google/gemma-7b-it'
        | 'nousresearch/nous-hermes-2-mistral-7b-dpo'
        | 'meta-llama/codellama-70b-instruct'
        | 'recursal/eagle-7b'
        | '01-ai/yi-34b-200k'
        | 'nousresearch/nous-hermes-2-mixtral-8x7b-sft'
        | 'austism/chronos-hermes-13b'
        | 'jondurbin/bagel-34b'
        | 'nousresearch/nous-hermes-yi-34b'
        | 'neversleep/noromaid-mixtral-8x7b-instruct'
        | 'cognitivecomputations/dolphin-mixtral-8x7b'
        | 'rwkv/rwkv-5-world-3b'
        | 'recursal/rwkv-5-3b-ai-town'
        | 'togethercomputer/stripedhyena-nous-7b'
        | 'togethercomputer/stripedhyena-hessian-7b'
        | 'koboldai/psyfighter-13b-2'
        | '01-ai/yi-34b'
        | 'gryphe/mythomist-7b'
        | '01-ai/yi-6b'
        | '01-ai/yi-34b-chat'
        | 'nousresearch/nous-hermes-2-vision-7b'
        | 'openrouter/cinematika-7b'
        | 'nousresearch/nous-capybara-7b'
        | 'jebcarter/psyfighter-13b'
        | 'openchat/openchat-7b'
        | 'intel/neural-chat-7b'
        | 'anthropic/claude-instant-1.1'
        | 'teknium/openhermes-2.5-mistral-7b'
        | 'liuhaotian/llava-13b'
        | 'nousresearch/nous-capybara-34b'
        | 'openai/gpt-4-vision-preview'
        | 'lizpreciatior/lzlv-70b-fp16-hf'
        | 'openrouter/auto'
        | 'google/palm-2-codechat-bison-32k'
        | 'google/palm-2-chat-bison-32k'
        | 'teknium/openhermes-2-mistral-7b'
        | 'open-orca/mistral-7b-openorca'
        | 'jondurbin/airoboros-l2-70b'
        | 'nousresearch/nous-hermes-llama2-70b'
        | 'xwin-lm/xwin-lm-70b'
        | 'migtissera/synthia-70b'
        | 'nousresearch/nous-hermes-llama2-13b'
        | 'meta-llama/codellama-34b-instruct'
        | 'phind/phind-codellama-34b'
        | 'huggingfaceh4/zephyr-7b-beta'
        | 'anthropic/claude-instant-1'
        | 'anthropic/claude-1.2'
        | 'anthropic/claude-1'
        | 'anthropic/claude-instant-1.0'
        | 'google/palm-2-chat-bison'
        | 'google/palm-2-codechat-bison'
        | 'meta-llama/llama-2-13b-chat'
        | 'openai/gpt-3.5-turbo-0301'
      )
    | null;
  system?: string | null;
  prompt?: string | null;
  schema?: string | null;
  settings?: string | null;
  executions?: {
    docs?: (string | Event)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: string;
  name?: string | null;
  domain?: string | null;
  context?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nouns".
 */
export interface Noun {
  id: string;
  project?: (string | null) | Project;
  name: string;
  generate?: (string | null) | Function;
  context?: string | null;
  relationships?:
    | {
        predicate?: string | null;
        object?:
          | ({
              relationTo: 'nouns';
              value: string | Noun;
            } | null)
          | ({
              relationTo: 'things';
              value: string | Thing;
            } | null);
        id?: string | null;
      }[]
    | null;
  related?: {
    docs?: (string | Noun)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  things?: {
    docs?: (string | Thing)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "things".
 */
export interface Thing {
  id: string;
  project?: (string | null) | Project;
  name?: string | null;
  type: string | Noun;
  context?: string | null;
  content?: string | null;
  data?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  reasoning?: string | null;
  citations?: string | null;
  relationships?:
    | {
        predicate?: string | null;
        object?: (string | null) | Thing;
        id?: string | null;
      }[]
    | null;
  events?: {
    docs?: (string | Event)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events".
 */
export interface Event {
  id: string;
  project?: (string | null) | Project;
  status?: ('Pending' | 'Processing' | 'Success' | 'Error') | null;
  execution?: (string | null) | Function;
  workflow?: (string | null) | Workflow;
  noun?: (string | null) | Noun;
  thing?: (string | null) | Thing;
  input?: string | null;
  content?: string | null;
  reasoning?: string | null;
  citations?: string | null;
  data?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  error?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "workflows".
 */
export interface Workflow {
  id: string;
  project?: (string | null) | Project;
  name: string;
  code?: string | null;
  executions?: {
    docs?: (string | Event)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  tenants?:
    | {
        tenant: string | Project;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  enableAPIKey?: boolean | null;
  apiKey?: string | null;
  apiKeyIndex?: string | null;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "roles".
 */
export interface Role {
  project?: (string | null) | Project;
  id: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "webhooks".
 */
export interface Webhook {
  id: string;
  project?: (string | null) | Project;
  type?: ('Incoming' | 'Outgoing') | null;
  events?: ('Create' | 'Update' | 'Delete')[] | null;
  nouns?: (string | Noun)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Setting {
  id: string;
  project?: (string | null) | Project;
  name?: string | null;
  domain?: string | null;
  path?: string | null;
  defaultModel?: string | null;
  context?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-jobs".
 */
export interface PayloadJob {
  id: string;
  /**
   * Input data provided to the job
   */
  input?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  taskStatus?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  completedAt?: string | null;
  totalTried?: number | null;
  /**
   * If hasError is true this job will not be retried
   */
  hasError?: boolean | null;
  /**
   * If hasError is true, this is the error that caused it
   */
  error?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  /**
   * Task execution log
   */
  log?:
    | {
        executedAt: string;
        completedAt: string;
        taskSlug: 'inline' | 'generate';
        taskID: string;
        input?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        output?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        state: 'failed' | 'succeeded';
        error?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        parent?: {
          taskSlug?: ('inline' | 'generate') | null;
          taskID?: string | null;
        };
        id?: string | null;
      }[]
    | null;
  workflowSlug?:
    | ('embedData' | 'executeFunction' | 'executeWorkflow' | 'generateDatabase' | 'generateNoun' | 'generateThing')
    | null;
  taskSlug?: ('inline' | 'generate') | null;
  queue?: string | null;
  waitUntil?: string | null;
  processing?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'functions';
        value: string | Function;
      } | null)
    | ({
        relationTo: 'workflows';
        value: string | Workflow;
      } | null)
    | ({
        relationTo: 'nouns';
        value: string | Noun;
      } | null)
    | ({
        relationTo: 'things';
        value: string | Thing;
      } | null)
    | ({
        relationTo: 'events';
        value: string | Event;
      } | null)
    | ({
        relationTo: 'projects';
        value: string | Project;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'roles';
        value: string | Role;
      } | null)
    | ({
        relationTo: 'webhooks';
        value: string | Webhook;
      } | null)
    | ({
        relationTo: 'settings';
        value: string | Setting;
      } | null)
    | ({
        relationTo: 'payload-jobs';
        value: string | PayloadJob;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "functions_select".
 */
export interface FunctionsSelect<T extends boolean = true> {
  project?: T;
  name?: T;
  output?: T;
  object?: T;
  model?: T;
  system?: T;
  prompt?: T;
  schema?: T;
  settings?: T;
  executions?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "workflows_select".
 */
export interface WorkflowsSelect<T extends boolean = true> {
  project?: T;
  name?: T;
  code?: T;
  executions?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nouns_select".
 */
export interface NounsSelect<T extends boolean = true> {
  project?: T;
  name?: T;
  generate?: T;
  context?: T;
  relationships?:
    | T
    | {
        predicate?: T;
        object?: T;
        id?: T;
      };
  related?: T;
  things?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "things_select".
 */
export interface ThingsSelect<T extends boolean = true> {
  project?: T;
  name?: T;
  type?: T;
  context?: T;
  content?: T;
  data?: T;
  reasoning?: T;
  citations?: T;
  relationships?:
    | T
    | {
        predicate?: T;
        object?: T;
        id?: T;
      };
  events?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events_select".
 */
export interface EventsSelect<T extends boolean = true> {
  project?: T;
  status?: T;
  execution?: T;
  workflow?: T;
  noun?: T;
  thing?: T;
  input?: T;
  content?: T;
  reasoning?: T;
  citations?: T;
  data?: T;
  error?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects_select".
 */
export interface ProjectsSelect<T extends boolean = true> {
  name?: T;
  domain?: T;
  context?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  tenants?:
    | T
    | {
        tenant?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  enableAPIKey?: T;
  apiKey?: T;
  apiKeyIndex?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "roles_select".
 */
export interface RolesSelect<T extends boolean = true> {
  project?: T;
  id?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "webhooks_select".
 */
export interface WebhooksSelect<T extends boolean = true> {
  project?: T;
  type?: T;
  events?: T;
  nouns?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings_select".
 */
export interface SettingsSelect<T extends boolean = true> {
  project?: T;
  name?: T;
  domain?: T;
  path?: T;
  defaultModel?: T;
  context?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-jobs_select".
 */
export interface PayloadJobsSelect<T extends boolean = true> {
  input?: T;
  taskStatus?: T;
  completedAt?: T;
  totalTried?: T;
  hasError?: T;
  error?: T;
  log?:
    | T
    | {
        executedAt?: T;
        completedAt?: T;
        taskSlug?: T;
        taskID?: T;
        input?: T;
        output?: T;
        state?: T;
        error?: T;
        parent?:
          | T
          | {
              taskSlug?: T;
              taskID?: T;
            };
        id?: T;
      };
  workflowSlug?: T;
  taskSlug?: T;
  queue?: T;
  waitUntil?: T;
  processing?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskGenerate".
 */
export interface TaskGenerate {
  input: {
    prompt: string;
    model?: string | null;
    system?: string | null;
    format: 'Text' | 'Object' | 'Code' | 'List';
    schema?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    settings?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    context?: string | null;
    event?: (string | null) | Event;
    object?: (string | null) | Noun;
    project?: (string | null) | Project;
  };
  output: {
    content?: string | null;
    data?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    citations?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    reasoning?: string | null;
    headers?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    body?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    latency?: number | null;
    status?: number | null;
    statusText?: string | null;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "WorkflowEmbedData".
 */
export interface WorkflowEmbedData {
  input?: unknown;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "WorkflowExecuteFunction".
 */
export interface WorkflowExecuteFunction {
  input: {
    status?: ('Pending' | 'Processing' | 'Success' | 'Error') | null;
    execution?: (string | null) | Function;
    workflow?: (string | null) | Workflow;
    noun?: (string | null) | Noun;
    thing?: (string | null) | Thing;
    input?: string | null;
    content?: string | null;
    reasoning?: string | null;
    citations?: string | null;
    data?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    error?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    id: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "WorkflowExecuteWorkflow".
 */
export interface WorkflowExecuteWorkflow {
  input: {
    workflowId: string;
    input:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    timeout: number;
    memoryLimit: number;
    eventId?: string | null;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "WorkflowGenerateDatabase".
 */
export interface WorkflowGenerateDatabase {
  input?: unknown;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "WorkflowGenerateNoun".
 */
export interface WorkflowGenerateNoun {
  input: {
    id: string;
    queryContext?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "WorkflowGenerateThing".
 */
export interface WorkflowGenerateThing {
  input: {
    project?: (string | null) | Project;
    name?: string | null;
    type: string | Noun;
    context?: string | null;
    content?: string | null;
    data?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    reasoning?: string | null;
    citations?: string | null;
    relationships?:
      | {
          predicate?: string | null;
          object?: (string | null) | Thing;
          id?: string | null;
        }[]
      | null;
    events?: {
      docs?: (string | Event)[];
      hasNextPage?: boolean;
      totalDocs?: number;
    };
    updatedAt?: string | null;
    createdAt?: string | null;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}
