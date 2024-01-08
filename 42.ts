// showMagicians function
function _showMagicians(magicians: string[]): void {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
 
  function make_Great(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
  }
  
  // magician names
  const magicianNames: string[] = ["Harry potter", "Albus Dumbledore", "Hermione", "Ron ", "Luna"];
  

  const greatMagicians = make_Great(magicianNames);
  
  
  _showMagicians(greatMagicians);
  