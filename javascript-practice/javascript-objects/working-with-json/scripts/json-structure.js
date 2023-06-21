// JSON Structure
// JSON is a string whose format very much resembles JavaScript
// object literal format. You can include the same basic data
// types inside JSON as you can in a standard JavaScript object
// — strings, numbers, arrays, booleans, and other object
// literals. This allows you to construct a data hierarchy,
// like so: 

const superhero = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2023,
  "secretBase": "Super tower",
  "active": true,
  "members":[
    {
      "name": "Varun",
      "age": 22,
      "secretIdentity": "Ankush",
      "power":["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Sahil",
      "age": 22,
      "secretIdentity": "Motu",
      "power":["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
    },
    {
      "name": "Sunil",
      "age": 22,
      "secretIdentity": "Chotu",
      "power":["Immortality","Heat Immunity","Inferno","Teleportation"]
    }
  ]
}

console.log(superhero["members"][0]["power"][0]); // Radiation resistance
// or
console.log(superhero.members[1].power[2]); // Superhuman reflexes

// Arrays as JSON
// JSON text basically looks like a JavaScript object inside a
// string. We can also convert arrays to/from JSON. Below is
// also valid JSON, for example: 

const json1 = [
  {
    "name": "Varun",
    "age": 22,
    "secretIdentity": "Ankush",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Sahil",
    "age": 22,
    "secretIdentity": "Motu",
    "powers": [
      "Million tonne punch", "Damage resistance", "Superhuman reflexes"]
  }
]

console.log(json1[0].name);

// NOTES

// 1) JSON is purely a string with a specified data format — it
// contains only properties, no methods.

// 2) JSON requires double quotes to be used around strings and
// property names. Single quotes are not valid other than
// surrounding the entire JSON string.

// 3) Even a single misplaced comma or colon can cause a JSON
// file to go wrong, and not work. You should be careful to
// validate any data you are attempting to use (although
// computer-generated JSON is less likely to include errors, as
// long as the generator program is working correctly). You can
// validate JSON using an application like JSONLint.

// 4) JSON can actually take the form of any data type that is
// valid for inclusion inside JSON, not just arrays or objects.
// So for example, a single string or number would be valid
// JSON.

// 5) Unlike in JavaScript code in which object properties may
// be unquoted, in JSON only quoted strings may be used as
// properties.

