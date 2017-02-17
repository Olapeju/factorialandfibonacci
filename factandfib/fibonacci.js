function fibonacci(length) {
  var fibArray = [],
    i = 0,
    j = 1;
  fibArray.push(i);
  fibArray.push(j);
  while (fibArray.length <= length) {
    fibArray.push(fibArray[j] + fibArray[i]);
    j++;
    i++;
  }
  return fibArray;
}
