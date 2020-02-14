// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.
describe("addThemUp", () => {
  test ("takes two numbers as arguments and returns sum", () => {
    expect(addThemUp(1,2)).toEqual(3);
  })
})

// --------------------1b) See the test fail. THEN write the code to make the test pass.
const addThemUp = (a,b) => {
    return a+b;
}

console.log(addThemUp(4,5))
// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.
describe("triangleArea", () => {
    test(" base * height divided by 2", () => {
    expect(triangleArea(3,3)).toEqual(4.5);
    })
})

// --------------------2b) See the test fail. THEN write the code to make the test pass.
const triangleArea = (x,y) => {
    return (x+y/2);
}
 console.log(triangleArea(5,7))