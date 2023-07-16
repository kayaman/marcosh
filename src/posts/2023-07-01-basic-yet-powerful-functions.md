```ts
const numbers = [1, 2, 3, 4]

function sum(numbers: number[]): number {
  return numbers.reduce((total, current) => {
    return total + current
  }, 0)
}

const sumNumbers = sum(numbers)

console.log(sumNumbers)
```
