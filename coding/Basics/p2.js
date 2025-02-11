const accountId = 786 ;
let accountEmail = "abc@gmail.com" ;
var accountPassword = "abcd1234" ;
accountCity = " Jaipur ";


// lets start  invetigation with some experiment in java script files 



// printing by normal method using console function :-  

console.log("\nBefore changing :-\n");

console.log(" Values are :" , accountId, accountEmail, accountPassword, accountCity);
console.log();

//printing by using console function  of table format method  :- 

console.table([accountId, accountEmail, accountPassword, accountCity] );


accountEmail = "abcd@gmail.com" ;
accountPassword = "abcd123456" ;
accountCity = "Banglore";

console.log("\n After changing :- \n");

console.log(" Values are :" , accountId, accountEmail, accountPassword, accountCity);
console.log();


console.table([accountId, accountEmail, accountPassword, accountCity] );
console.log(" \n :: Here const variable are initialised only once and never modified .\n");
