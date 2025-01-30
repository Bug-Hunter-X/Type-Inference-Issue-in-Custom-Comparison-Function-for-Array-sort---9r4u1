function compare(a: number, b: number): number {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0; 
  }
}

let arr: number[] = [1, 2, 3, 4, 5];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5]

let arr2: (number | string)[] = [1, '2', 3, 4, 5];
arr2.sort( (a,b) => String(a).localeCompare(String(b)) );
console.log(arr2); // Output: ['2', 1, 3, 4, 5] 