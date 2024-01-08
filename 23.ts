
let car_:string = 'subaru';

// test 1
console.log("Is car == 'subaru' ? I predict Ture.");
console.log(car_=== 'subaru');

// test 2
console.log("Is car != 'toyota'? I predict Ture.");
console.log(car_== 'subaru');

// test 3 
console.log("Is car === 'subaru'? Ipredict False.");
console.log(car_ === 'subaru')

// test 4 
console.log("Is car !== 'subaru'? I predict Ture .")
console.log(car_ !== 'subaru');

// test 5 
let is_japaneseCar :boolean = true ;
console.log("Is car== 'subaru' and is japanese car is true? I predict true")
console.log(car_ === 'subaru' && is_japaneseCar);

// test 6 
let has_sunRoof: boolean =false ;
console.log("Is car == 'subaru' or has sun roof is true ?I predict true")
console.log(car_ === 'subaru' || has_sunRoof);

// test 7 
let is_Sedan : boolean = false 
console.log("Is car == 'subaru' and is sedan is false? i predict false")
console.log(car_=== 'subaru' && !is_Sedan)

// test 8 
let is_convertible:boolean = false
console.log("Is car != 'subaru' or is convertible is false? I predict false")
console.log(car_ !== 'subaru'|| !is_convertible)

// test 9 
let is_luxuryCar :boolean = false
console.log("Is car == 'subaru or is luxury is true ?I predict true ")
console.log (car_ == 'subaru'|| is_luxuryCar)

// test 10
let is_copactorCar :boolean = true 
console.log("Is car !='subaru' and is compactor car is false ? I predict false")
console.log(car_ !== 'subaru'&& !is_copactorCar)