// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

function solution(N, A) {
  const counters = new Array(N).fill(0)
  let max = 0
  let maxAll = 0
  A.forEach(c => {
      if (c === N+1) {
          // max counter
          maxAll = max
      } else {
          // increase(X)
          if (counters[c-1] < maxAll) counters[c-1] = maxAll

          max = Math.max(++counters[c-1], max)
      }
  })

  return counters.map(c => c < maxAll ? maxAll : c)
}