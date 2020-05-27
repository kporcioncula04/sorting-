describe('Bubble Sort', function(){
  let arr = [3, 5, 7, 2]

  // beforeAll( function (){
  //   spyOn(bubbleSort, 'swap').and.callThrough();
  // })
  // it('swapping involves exactly three times', function(){
  //   bubbleSort.sort();
  //   expect(bubbleSort.swap.calls.count()).toEqual(3);
  // })
  it('handles an empty array', function(){
    expect( bubbleSort.sort([]) ).toEqual( [] );
  });
  it('properly sorts an array', function(){
    expect( bubbleSort.sort(arr)).toEqual([2,3,5,7])
  })
});

