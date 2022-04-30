// https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/

function solution(S, P, Q) {
  const hash = {
      A: 1,
      C: 2,
      G: 3,
      T: 4,
  }

  const nums =  []
  let beforeChar
  S.split('').forEach((c, i) => {
    if (beforeChar === c) {
      nums[nums.length - 1].end++
    } else if (['A', 'C', 'G', 'T'].includes(c)) {
      nums.push({
        val: hash[c],
        start: i,
        end: i
      })

      beforeChar = c
    }
  })

  const result = []

  for(let i = 0; i < P.length; i++) {
      const start = P[i]
      const end = Q[i]

      const arr = nums
        .filter(num => (num.start >= start && num.start <= end) || (num.end >= start && num.end <= end))
        .sort((a,b) => a.val - b.val)

      result.push(arr[0].val)
  }

  return result
}