// function bubbleSort(array){
//   let sortedArr = array
//   for(let i = 0; i < sortedArr.length; i++){
//     let currElem = sortedArr[i];
//     let nextElem = sortedArr[i + 1]

//     if(currElem > nextElem){
//       let swapVar = swap(currElem, nextElem)
//       sortedArr.splice(i, 2,...swapVar)
//     }
//   }
//   console.log(sortedArr)
//   return sortedArr
// }

// function swap(a, b){
//   return [b, a]
// }


const bubbleSort = {};
bubbleSort.swap = function (a, b){
  return [b, a]
};

bubbleSort.sort = function (array){
  let sortedArr = array
  for(let i = 0; i < sortedArr.length; i++){
    let currElem = sortedArr[i];
    let nextElem = sortedArr[i + 1]

    if(currElem > nextElem){
      let swapVar = this.swap(currElem, nextElem)
      sortedArr.splice(i, 2,...swapVar)
    }
  }
  console.log(sortedArr)
  return sortedArr
};
