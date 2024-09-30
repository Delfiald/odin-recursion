// Iterations
function fibs(n) {
  let fibsList = [];
  for(let i = 0; i < n; i++) {
    let temp = 0;

    if(i == 0){
      temp = 0;
    }else if(i == 1) {
      temp = 1;
    }else {
      temp = fibsList[i - 1] + fibsList[i - 2];
    }

    fibsList = [...fibsList, temp];
  }

  return fibsList;
}

console.log(fibs(8))

// Recursions
function fibsRec(n, fibsList = [0, 1]) {
  if(fibsList.length >= n) {
    return fibsList.slice(0, n)
  }

  const nextFibs = fibsList[fibsList.length - 1] + fibsList[fibsList.length - 2];

  return fibsRec(n, [...fibsList, nextFibs])
}

console.log(fibsRec(8))