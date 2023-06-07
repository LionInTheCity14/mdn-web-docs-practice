// finding length

const str1 = "mozilla";
console.log(str1.length);

// retrieving a specific string character

console.log(str1[3]);
console.log(str1[str1.length - 1]);

// testing if a string contains a substring

if(str1.includes("zilla"))
    console.log("found zilla");
else
    console.log("No zilla found");

// startWith() and endWith();

if(str1.startsWith("zilla"))
    console.log("starts with zilla");
else
    console.log("Not starts with zilla");

if(str1.endsWith("zilla"))
    console.log("ends with zilla");
else
    console.log("Not ends with zilla");

// finding the position of a substring in a string

const tagLine = "MDN - Resources for developers, by developers";

// str.indexOf("search", startingIndex(opional));
console.log(tagLine.indexOf("developers", 21));

console.log(tagLine.lastIndexOf("developers",21))

// Extracting a substring from a string 
// browserType.slice(startIdx(included), endIdx (excluded and optional));

const browserType = "mozilla";

console.log(browserType.slice(1, 4)); // "ozi" 
console.log(browserType.slice(2));    // "zilla"

//changing case

const str2 = "My NaMe is MdN";
console.log(str2.toLowerCase());
console.log(str2.toUpperCase());

// updating parts of a string str.replace("toChange", "toPut");

let str3 = "mozilla";
str3 = str3.replace("moz", "van");
console.log(str3);