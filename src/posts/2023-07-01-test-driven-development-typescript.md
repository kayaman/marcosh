---
title: TDD Fundamentals with TypeScript
description: Study notes for Test Driven Design Fundamentals with TypeScript
date: '2023-07-20'
categories:
  - tdd
  - typescript
  - learning
  - study-notes
published: true
---

## Introduction

"If one's first ask yourself what the structure of convincing proof would be and, having found this, then constructs a program satisfying this proof's requirements.."  
~~The Humble Programmer, Edsger W. Dijkstra (1972)

   
"It is necessary to have a hand calculated check case with which to compare the answers which will later be calculated by the machine."  
~~Digital Computer Programming, D.D McCracken (1957)


"The first step is to write a test that fails."  
~~ Test Driven Development by Example, Kent Beck (2002)

## Why TDD?

1. Fast feedback

- Reduces risk
- More deploys

2. Higher confidence

- Testable code
- Enables refactoring
- Higher quality code

3. Thinking tool

- Less debugging
- More coding time

4. Documentation

- Living documentation
- Examples
- Specifications

## Setup

```sh
npm i -g jest

mkdir tdd-ts && $_
npm i -D jest typescript ts-jest @types/jest
npx ts-jest config:init
# test installation:
jest
```
## TypeScript setup

```sh
npx tsc --init
```

Basic configuration:

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "strict": true
  }
}
```

## Usage

```sh
jest --watchAll
```

## The Anatomy of a Test

### Naming

```ts
import { greeter } from './greeter';

describe('greeter', () => { // same as production code file name
  test('helloWorld given default should return `Hello world!`', () => { // given then when
    const sut = greeter(); // subject under test
    const expected = 'Hello world!'; // expected outcome

    const actual = sut.helloWorld(); // actual outcome

    expect(actual).toBe(expected) // assertion: expect actual outcome 
                                  // to be equal to expected outcome
  })
})
```

### Structure

![Four-Phase Test](/ts-tdd/four_phase_method.png)

1. Setup
2. Exercise
3. Verify
4. Tear down

There is no repetition in the phases.

## Notes

- `sut` stands for **System Under Test**.

## References

- [TDD Fundamentals with TypeScript](/ts-tdd/TDD_FundamentalsInTypeScript.pdf)
- [Test-Driven Development : The Practical Guide with Typescript](https://1kevinson.com/test-driven-development-for-the-rest-of-us/)
