# `.do` Platform

This repository contains the SDKs, primitives and example workflows that power [workflows.do](https://workflows.do). When designing new types, keep them clean and simple both in the implementation, tests, as well as examples in READMEs and documentations.

For example, look at how clean and simple the `ai` and `db` functions are in the following example:

```ts
import { ai, db } from 'workflows.do'

await db.ideas.create({ concept: 'Digital AI Workers' })
await db.ideas.create({ concept: 'Agentic Workflow Platform' })

const ideas = await db.ideas.search('AI Agents')

ideas.forEach(async (idea) => {
  idea.status = 'Evaluating market potential'
  const leanCanvas = await ai.defineLeanCanvas({ idea })
  const marketResearch = await ai.research({ idea, leanCanvas })
  await db.ideas.update({ ...idea, leanCanvas, marketResearch })
})
```

We also have a convention that the upper-case versions of dynamic objects/functions (like `AI` and `DB`) are to be used for explicit definitions. For example:

```ts
import { AI } from 'workflows.do'

const ai = AI({

  // Specify a strongly-typed schema for the AI to generate a structured output
  defineLeanCanvas: {
    productName: 'name of the product or service',
    problem: ['top 3 problems the product solves'],
    solution: ['top 3 solutions the product offers'],
    uniqueValueProposition: 'clear message that states the benefit of your product',
    unfairAdvantage: 'something that cannot be easily copied or bought',
    customerSegments: ['list of target customer segments'],
    keyMetrics: ['list of key numbers that tell you how your business is doing'],
    channels: ['path to acquire customers'],
    costStructure: ['list of operational costs'],
    revenueStreams: ['list of revenue sources'],
  },

  // The type can also be a string array
  brainstormIdeas: ['List 25 startup ideas leveraging AI Agents, Agentic Workflows, and/or Services delivered by AI Agents']

  // Explicitly define the AI model, prompt, and output type
  research: {
    model: 'perplexity/sonar-deep-research',
    prompt: 'Research {input}',
    output: 'markdown',
  },

  // Define functions that will be durably executed with automatic retries
  ideate: async (args, { ai, db }) => {
    const ideas = await ai.brainstormIdeas(args)

    const results = Promise.all(ideas.map(async (idea) => {
      idea.status = 'Evaluating market potential'
      idea.leanCanvas = await ai.defineLeanCanvas({ idea })
      idea.marketResearch = await ai.research({ idea, leanCanvas: idea.leanCanvas })
      db.ideas.update(idea)
      return idea
    }))

    return results
  }

})

const ideas = await ai.ideate({ icp: 'Early-stage Startup Founders' })

```

## Definition of Done

For a feature to be considered **done**, it must meet the following criteria.
These checklist items ensure new code is well documented, typed and tested.

### SDK

- [ ] `sdks/[sdk]/README.md` with simple and intuitive examples similar to the ones shown in the root `README.md`
- [ ] `sdks/[sdk]/types.ts` with JSDoc for all exported types
- [ ] `sdks/[sdk]/*.test.ts` without mocks for all functionality

### Primitive

- [ ] `primitives/*.ts` with simple and intuitive examples
- [ ] `primitives/*.test.ts` without mocks for all functionality

### API

- [ ] `(apis)/[api]/README.md` with simple and intuitive examples
- [ ] `(apis)/[api]/types.ts` with JSDoc for all exported types
- [ ] `(apis)/[api]/*.test.ts` without mocks for all functionality
- [ ] Documentation references the primitives that power the API

### Tests

- [ ] `tests/*.test.ts` for end-to-end tests from the SDK, primitives, APIs, and backend
- [ ] `pnpm test` runs without errors
- [ ] `pnpm lint` and `pnpm check-types` run without errors

### General Guidelines

- Keep TypeScript interfaces lightweight and easy to understand.
- Provide end-to-end tests demonstrating how the primitives work together.
- All tests must pass when run with `pnpm test`.
- Code should pass `pnpm lint` and `pnpm check-types` without errors
- Code should be formatted with `pnpm format` before committing.
