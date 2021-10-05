const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

test("sum 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("2-2 should equal 0", ()=>{
  const result = subtract(2,2); 
  expect(result).toBe(0); 
}); 

test("2/-1 should be -2", ()=>{
  const result = divide(2,-1); 
  expect(result).toBe(-2); 
});

test("10/3 should be 1", ()=>{
  const result = modulus(10,3);
  expect(result).toBe(1); 
})

test("multiply 2 * 2 should equal 4", () => {
  const result = multiply(2,2);
  expect(result).toBe(4);
});

test("1024 should be true", () => {
  const result = even(1024);
  expect(result).toBe(true);
})

test("1024 should be false", ()=> {
  const result = odd(1024);
  expect(result).toBe(false);
});