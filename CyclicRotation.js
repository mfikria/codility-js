// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

function solution(A, K) {
  const length = A.length
  const rotationCount = K % length
  const newArray = A.slice(length - rotationCount).concat(A)
  newArray.length = length

  return newArray
}