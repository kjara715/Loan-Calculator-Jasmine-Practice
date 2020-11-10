
describe('Calculate the loan amount', () => {
  it('should calculate the monthly rate correctly', function () {
    let testValues={
      amount: 40000,
      years: 5, 
      rate: 5,
    }
    expect(calculateMonthlyPayment(testValues)).toEqual("754.85")
  });
  
  
  it("should return a result with 2 decimal places", function() {
    let testValues = {
      amount: 15000,
      years: 5,
      rate: 5,
    }
    
    expect(calculateMonthlyPayment(testValues).split(".")[1].length).toEqual(2)
  });

  
  /// etc
})

