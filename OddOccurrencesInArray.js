// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

function solution(A) {
    const hash = {}
    let unpaired = null
    A.forEach(num => {
        if (!hash[num]) {
            hash[num] = true
        } else {
            delete hash[num]
        }
    })

    return Number(Object.keys(hash)[0])
}