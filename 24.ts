
let shape1 :string = "square "
let shape2 :string = "circle"

console.log(`is shape1 is equal to shape2 ? I predict false.`)
console.log(shape1 == shape2)

console.log(`is shape1 is  not equal to shape2 ? i predict true . `)
console.log(shape1 !== shape2)


let mixedCaseShape : string = "SqUaRe "

console.log(`is mixed case shape in lower is  equal to 'square' ? i predict ture `)
console.log(mixedCaseShape.toLowerCase()=="square")


let numberA :number = 5 ;
let numberB :number= 10;

console.log("is numberA is equal to numberB ? i predict false ")
console.log(numberA === numberB)

console.log("is numberA is not  equal to numberB ? i predict true")
console.log(numberA!== numberB)

console.log("is numberA is greater than numberB ? i predict false")
console.log(numberA > numberB )

console.log("is numberA is less than numberB ? i predict true")
console.log(numberA < numberB)

console.log("is numberA is great than or equal to numberB ? i predict false")
console.log(numberA >= numberB )

console.log("is numberA is  less than or equal to numberB ? i predict true")
console.log(numberA <= numberB)

console.log ("is numberA is less than  numberB and numberA +numberB is equal to 15? i predict true.")
console.log(numberA<numberB && numberA + numberB === 15)

console.log ("is numberA is less than numberB or numberA + numberB equal to 14 ?  i predict true")
console.log(numberA, numberB ||numberA +numberB===14 )


let shapesArray: string[] = ['square', 'circle', 'triangle', 'rectangle'];
let shapeToCheck: string = 'triangle';

console.log(`Is shape To Check is in the shapes Array? I predict True.`); 
console.log(shapesArray.includes(shapeToCheck))


let shapeNotInArray: string = 'oval';

console.log(`Is shape Not In Array not in shapes Array? I predict True.`);
console.log(!shapesArray.includes(shapeNotInArray));
