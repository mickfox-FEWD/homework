const superHeroes = `{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}`;

// convert from JSON string to JS object
const superHeroesObj = JSON.parse(superHeroes);
console.log(superHeroesObj.squadName); // Super hero squad

// convert JS object to JSON string
const jsObject = {
  name: "Eternal Flame",
  age: 10000,
  secretIdentity: "Unknown",
  powers: ["Immortality", "Heat Immunity", "Inferno", "Teleportation", "Interdimensional travel"]
}
console.log(jsObject); 
const jsObjectJsonString = JSON.stringify(jsObject);
console.log(jsObjectJsonString);
