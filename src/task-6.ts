function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]); // 1
getFirstElement<string>(["a", "b", "c"]); // "a"
getFirstElement<boolean>([true, false, true]); // true

// Control check: this call is a TypeScript error, so it stays commented out.
// getFirstElement<number>([1, 2, "3"]);
