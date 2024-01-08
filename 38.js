"use strict";
function describeCity(city, country = "Default Country") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Karachi", "Pakistan");
describeCity("New York", "USA");
describeCity("Tokyo", "Japan");
