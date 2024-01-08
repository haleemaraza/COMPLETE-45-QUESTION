
// languages 

let languages : string[] = [
    "Arabic",
    "Urdu",
    "French",
    "Turkish",
    "Italian",
    "Korean",
    "English"];

    // print the list of countries

    console.log("list of languages:");

    languages.forEach((language,index ) =>
     console.log(`${index + 1 }. ${language}`));