export function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // If the array has 0 or 1 elements, it's already sorted
  }

  const delay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };
  const pivot = arr[0]; // Choose the first element as the pivot
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elements smaller than the pivot go to the left
    } else {
      right.push(arr[i]); // Elements greater than or equal to the pivot go to the right
    }
  }
  // Code to be executed after a delay of 500ms

  return [...quickSort(left), pivot, ...quickSort(right)]; // Recursively sort left and right subarrays
}
