describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1,2,3,4])).toEqual([[1,2], [3,4]]),
    expect(split([1,2,3,4,5])).toEqual([[1,2], [3,4, 5]])
  });
});

describe('Merge function', function(){
  let arr1 = [3, 8, 9];
  let arr2 = [4, 6, 7, 10];
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge(arr1, arr2)).toEqual(([3,4,6,7,8,9,10]))
  });
});

describe('Merge Sort function', function(){
  let arr = [5,6,2,3,1,4]
  it('is able to sort an array recursively', function(){
    // test the merging algorithm
    expect(mergeSort(arr)).toEqual(([1,2,3,4,5,6]))
  });
});
