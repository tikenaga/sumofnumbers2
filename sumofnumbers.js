const nums = [1, 2, 3, 4, 5];
function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}
console.log(sumFor(nums));

function sumWhile(list) {
  let sum = 0;
  let loop = 0;
  while (loop < list.length) {
    sum += list[loop];
    loop++;
  }
  return sum;
}
console.log(sumWhile(nums));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, nums.length));
}
console.log(sumRecursion(nums));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay(nums));
