// Define the showMagicians function
function showMagicians(magicians: string[]): void {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
 
  function makeGreat(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
  }
  
  // magician names
  const magician_Names: string[] = ["Harry potter", "Albus Dumbledore", "Hermione", "Ron ", "Luna"];
  

  const great_Magicians: string[] = makeGreat([...magician_Names]); 
  
  
  console.log("Original Magicians:");
  showMagicians(magician_Names);
  
  console.log("\nGreat Magicians:");
  showMagicians(great_Magicians);
  