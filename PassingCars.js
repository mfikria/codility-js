// https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/

function solution(A) {
  let total = 0
  let zeros = 0
  for (let i = 0; i < A.length; i++) {
      if (A[i] === 0) {
        zeros++
      } else if (A[i] === 1) {
        total += zeros
        if (total > 1000000000) {
          return -1
        }
      }
  }

  return total
}
