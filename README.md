# TypeScript Type Inference Issue in Array.sort() Comparison Function

This repository demonstrates a subtle type inference issue in TypeScript when using a custom comparison function with the `Array.sort()` method.  The issue arises when the types of array elements are not explicitly defined, leading to potential runtime errors or unexpected behavior.

## The Bug

The `bug.ts` file contains a simple `compare` function used to sort an array of numbers. However, without explicit type annotations, TypeScript's type inference might not correctly handle the types of `a` and `b`, particularly if the array contains elements of different types.

## The Solution

The `bugSolution.ts` file demonstrates how to fix this issue by explicitly specifying the types of `a` and `b` in the `compare` function using type annotations. This ensures that the comparison function correctly handles the expected data types and prevents unexpected behavior.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Compile and run `bug.ts` using the TypeScript compiler (tsc) and a Node.js runtime.
4. Observe the output and note any unexpected results.
5. Then, compile and run `bugSolution.ts`, compare outputs.
