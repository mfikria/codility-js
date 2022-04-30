// https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/

function solution(A) {
  let currentSum = A[0] + A[1]
  let start = 0
  let currentAvg = currentSum / 2
  let minAvg = currentAvg
  for(let i = 2; i < A.length; i++) {
      currentSum += A[i]
      currentAvg = currentSum / 3
      if (currentAvg < minAvg) {
          minAvg = currentAvg
          start = i - 2
      }

      currentSum -= A[i - 2]
      currentAvg = currentSum / 2
      if (currentAvg < minAvg) {
          minAvg = currentAvg
          start = i - 1
      }

      if (minAvg === 1) {
          break
      }
  }

  return start
}