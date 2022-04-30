// https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/

function solution(A, B, K) {
  const x = Math.floor(B / K)
  const y = Math.floor((A - 1) / K)
  return x - y
}