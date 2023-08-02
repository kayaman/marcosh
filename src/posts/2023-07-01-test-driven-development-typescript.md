---
title: TDD Fundamentals with TypeScript
description: Study notes for Test Driven Design Fundamentals with TypeScript
date: '2023-08-02'
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
jest --watchAll --verbose --coverage
```

## The Anatomy of a Test

### Naming and Arranging

```ts
import { greeter } from './greeter'

describe('greeter', () => {
  // same as production code file name
  test('helloWorld given default should return `Hello world!`', () => {
    // Arrange (harnessing)
    // State, services or SUT (in this order)
    const expected = 'Hello world!' // expected outcome
    const sut = greeter() // subject under test

    // Act (preferrably one line)
    const actual = sut.helloWorld() // actual outcome

    // Assert (one assertion per test)
    expect(actual).toBe(expected) // assertion: expect actual outcome
    // to be equal to expected outcome
  })
})
```

- To skip a test, prefix it with a `x` (e.g. `xtest('should skip this test', () => {})`). Also `xdescribe`, `xit`, or `xtest`.
- To run only one test, use `test.only` (e.g. `test.only('should run only this test', () => {})`).

### Structure

![Four-Phase Test](/ts-tdd/four_phase_method.png)

1. Setup
2. Exercise
3. Verify
4. Tear down

There is no repetition in the phases.

### F.I.R.S.T. Principles

- Fast

  - Tests should be fast to run
  - Tests should be fast to write

- Independent

  - Tests should not depend on each other
  - Tests should not depend on external resources

- Repeatable

  - Tests should be repeatable in any environment
  - Tests should be repeatable at any time
  - Deterministic

- Self-validating

  - Tests either pass or fail
  - The test runner reports the result

- Thorough

  - Tests should cover all scenarios
  - Raw coverage numbers are not enough

  Number of tests:

  (less) Acceptance -> Integration -> Unit (more)

  F.I.R.S.T. Principles are more important than other principles like DRY, SOLID, etc. for TEST CODE.

### The 3 "laws" of TDD

1. You are not allowed to write any production code unless it is to make a failing unit test pass.
2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

### Green Bar Pattern: Fake It

Pattern: A known way to solve a known problem.

Fake it till you make it: do a fake implementation to get the current test to pass.

### Equivalence Partitions and Boundaries

A group of values for which the behavior of the code is the same. A partition is a set of inputs that produce the same output.

Boundary: where two equivalence partitions meet.

### Triangulation Green Bar Pattern

Fake it, Fake it, Make it (triangulate).

## Notes

## Show me the code

- [TypeScript TDD Template](https://github.com/kayaman/ts-tdd)
- [Rock, Paper, Scissors Kata](https://github.com/kayaman/rps-tdd)

## References

- [TDD Fundamentals with TypeScript](/ts-tdd/TDD_FundamentalsInTypeScript.pdf)
- [Test-Driven Development : The Practical Guide with Typescript](https://1kevinson.com/test-driven-development-for-the-rest-of-us/)
