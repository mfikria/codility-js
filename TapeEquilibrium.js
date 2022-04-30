// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium

function solution(A) {
    let leftSum = 0
    let rightSum = 0
    let min = 100000
    const left = []
    const right = []
    for(let i = 0; i < A.length - 1; i++) {
        leftSum += A[i]
        left.push(leftSum)
    }

    for(let j = A.length - 1; j > 0; j--) {
        rightSum += A[j]
        right.push(rightSum)
    }

    for (let k = 0; k < left.length; k++) {
        const diff = Math.abs(right[left.length - 1 - k] - left[k])
        if (diff === 0) return 0
        min = Math.min(min, diff)
    }

    return min
}