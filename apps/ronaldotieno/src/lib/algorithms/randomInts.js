export function randomIntegers(length) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 100); // Change 100 to set the range of random numbers
    randomArray.push(randomNumber);
  }
  return randomArray;
}
