let html = document.documentElement.outerHTML;
//finding all #HEX colors in html
let regForHexFind = /#[0-9a-f]{3,6}/gi;
let hexColorsArray = html.match(regForHexFind);
console.log(hexColorsArray);
//finding all phone numbers
let regForPhone = /\+ \(380\)[- ]?0(67|68|96|97|98|50|66|95|99|63|73|93) [0-9]{3} [0-9]{2} [0-9]{2}/gi;
let phoneNumbersArray = html.match(regForPhone);
console.log(phoneNumbersArray);
//finding all <script></script> tags
let regForScriptFind = /<script[^>]*>|<\/script>/gm;
let allScriptTags = html.match(regForScriptFind);
console.log(allScriptTags);