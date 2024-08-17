const add = (numbers: string): number => {
  if (numbers === '') {
    return 0;
  }

  let delimiter = /[\n,]/;
  if (numbers.startsWith('//')) {
    const parts = numbers.split('\n');
    delimiter = new RegExp(parts[0].substring(2));
    numbers = parts.slice(1).join('\n');
  }

  const numArray = numbers.split(delimiter);

  let sum = 0;
  const negativeNumbers = [];

  for (const num of numArray) {
    const number = parseInt(num, 10);
    if (isNaN(number)) {
      continue;
    }
    if (number < 0) {
      negativeNumbers.push(number);
    } else {
      sum += number;
    }
  }

  if (negativeNumbers.length > 0) {
    throw new Error('negative numbers not allowed ' + negativeNumbers.join(','));
  }

  return sum;
};

export default add;
