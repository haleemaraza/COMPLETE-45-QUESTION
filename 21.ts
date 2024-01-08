
// cars objects
let cars :{brand: string, model: string, year:number, color: string} [] =[
    {
        brand:"Toyota",
        model:"Camry",
        year:2022,
        color:"silver",
    },
    {
        brand:"Honda",
        model:"Civic",
        year:2021,
        color:"Blue", 
    },
    {
        brand:"Tesla",
        model:"Model 3 ",
        year:2022,
        color:"White ",
    }
];


// print it 
console.log("list of cars:")
cars.forEach((car, index)=>{
     console.log(`${index +1}. brand: ${car.brand}`);
     console.log(`  Model:${car.model}`);
     console.log(`  year:${car.year}`);
     console.log(`  color:${car.color}`)
     console.log();
})