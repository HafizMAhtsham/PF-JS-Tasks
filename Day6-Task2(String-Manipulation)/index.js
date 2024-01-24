let message = "Hello, World!";
let extract_message = message.substring(0,5);
let Uppercase_String = message.toUpperCase();
let string_contains = message.includes('World');
let replace_message = message.replace("World", "Ahtsham");
let char_array = [...message];
 

console.log("Message:", message);
console.log("Extract and log the substring 'Hello' from the message is:", extract_message);
console.log("Convertion of string to uppercase is:", Uppercase_String);
console.log("Check for string contains the word 'World' is:", string_contains);
console.log("Replace 'World' with your name in the string is:", replace_message);
console.log("Array of characters from the string is:", char_array);

