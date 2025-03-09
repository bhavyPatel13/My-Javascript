let city = ["Ahemedabad", "Baroda", "Surat", "Rajkot", "Gandhinagar"];
city.forEach( function Bhavy(value, index, string) {
    console.log(value, index, string);
});
    console.log("");

city.forEach( (value, index, string) => {
    console.log(value, index, string);
} );