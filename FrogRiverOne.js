// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/

function solution(X, A) {
  const hash = {}
  let sum = 0
  const target = (X * (X+1)) / 2  // Sum of 1..X
  
  for(let i = 0; i < A.length; i++) {
      if (!hash[A[i]]) {
          hash[A[i]] = true
          sum += A[i]
      }
      if (target === sum) {
          return i
      }
  }

  return -1
}
