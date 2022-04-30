// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

function solution(A) {
  const hash = {}
  const N = A.length
  const target = (N * (N+1)) / 2  // Sum of 1..N
  const sum = A.reduce((acc, num) => {
      if (hash[num] || num > N) {
        return acc
      }
      hash[num] = true
      return acc + num
  }, 0)

  return target === sum ? 1 : 0
}