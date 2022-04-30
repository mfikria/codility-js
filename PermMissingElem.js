// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

function solution(A) {
    const hash = {}
    let missingNum = null
    let pointer = 1
    A.forEach(num => {
        hash[num] = true
    })

    while(!missingNum) {
        const start = pointer
        const end = (A.length + 2 - pointer)
        if(!hash[start]) {
            missingNum = start
        } else if(!hash[end]) {
            missingNum = end
        }

        pointer++
    }

    return missingNum
}