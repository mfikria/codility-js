// https://app.codility.com/programmers/lessons/1-iterations/binary_gap

function solution(N) {
    const binary = (N >>> 0).toString(2)
    let maxBinaryGap = 0
    let binaryGap = 0

    for(let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            binaryGap++

            if (i < binary.length - 1 && binary[i+1] === '1') {          
                 maxBinaryGap = Math.max(maxBinaryGap, binaryGap)
                binaryGap = 0
            }
        }
    }

    return maxBinaryGap
}