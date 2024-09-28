function mergeSort(arr){
  if(arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right);
}

function merge(left, right) {
  const sorted = []
  let i = 0;
  let j = 0;

  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      sorted.push(left[i])
      i++
    }else {
      sorted.push(right[j])
      j++
    }
  }

  while(i < left.length) {
    sorted.push(left[i])
    i++;
  }

  while(j < right.length) {
    sorted.push(right[j])
    j++
  }

  return sorted;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))