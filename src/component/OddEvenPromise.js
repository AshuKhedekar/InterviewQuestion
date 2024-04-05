function separateEvenOdd(numbers) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(numbers)) {
        reject(new Error('Input must be an array'));
      } else {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        const oddNumbers = numbers.filter(num => num % 2 !== 0);
        resolve({ even: evenNumbers, odd: oddNumbers });
      }
    });
  }
  
  // Example usage:
  const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  separateEvenOdd(inputNumbers)
    .then(result => {
      console.log('Even numbers:', result.even);
      console.log('Odd numbers:', result.odd);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  