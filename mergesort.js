function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  let splitArr = Math.floor(wholeArray.length / 2)
  let firstHalf = wholeArray.slice(0, splitArr);
  let secondHalf = wholeArray.slice(splitArr);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  let newArr = []
  let arr1Index = 0
  let arr2Index = 0

  while(arr1Index < arr1.length && arr2Index < arr2.length){
    if(arr1[arr1Index] > arr2[arr2Index]){
      newArr.push(arr2[arr2Index])
      arr2Index++
    } else{
      newArr.push(arr1[arr1Index])
      arr1Index++
    }
  }
  return newArr.concat(arr1.slice(arr1Index)).concat(arr2.slice(arr2Index))
}

function mergeSort(array){
  if(array.length < 2){
    return array
  }

  let halves = split(array)

  return merge(mergeSort(halves[0]), mergeSort(halves[1]))

}

