describe('Bubble Sort', function(){
  let arr = [3, 5, 7, 2]

  beforeAll( function (){
    spyOn(bubbleSort, 'sort').and.callThrough();
  })
  it('handles an empty array', function(){
    expect( bubbleSort.sort([]) ).toEqual( [] );
  });
  it('properly sorts an array', function(){
    expect( bubbleSort.sort(arr)).toEqual([2,3,5,7])
  })
  it('swapping involves exactly three times', function(){
    bubbleSort.sort(arr);
    expect(bubbleSort.sort.calls.count()).toEqual(3);
  })

});

