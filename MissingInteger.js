// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

function solution(A) {
    const hash = {}
    let smallestPositiveNumber = 1
    A.forEach(n => {
        if (n > 0) {
            hash[n] = true
        }
    })

    while(hash[smallestPositiveNumber]) {
        smallestPositiveNumber++
    }

    return smallestPositiveNumber
}
