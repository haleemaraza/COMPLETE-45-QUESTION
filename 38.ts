
function describeCity(city: string, country: string = "Default Country"): void {
    console.log(`${city} is in ${country}.`);
  }
  

  describeCity("Karachi", "Pakistan");
  describeCity("New York", "USA");
  describeCity("Tokyo","Japan"); 
  