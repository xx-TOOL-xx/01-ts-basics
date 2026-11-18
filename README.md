# 01-ts-basics

Homework 1 for the "React and client-side SPA architecture" course: TypeScript
basics. Each task lives in its own file in `src`.

| File        | Topic                                            |
| ----------- | ------------------------------------------------ |
| `task-1.ts` | Primitive types: `string`, `number`, `boolean`   |
| `task-2.ts` | Interfaces, `readonly` and optional properties   |
| `task-3.ts` | Typed arrays of values and of objects            |
| `task-4.ts` | Function parameters, optional parameters, `void` |
| `task-5.ts` | Union types built from string literals           |
| `task-6.ts` | Generic functions                                |
| `task-7.ts` | `Promise<T>`                                     |
| `task-8.ts` | Typed HTTP requests with Axios                   |

## Running

```bash
npm install
npm run dev
```

Open the page and look at the browser console: every task logs its result
there.

## Checks

```bash
npm run build    # type-checks with tsc, then builds with Vite
npm run format   # formats the code with Prettier
```
