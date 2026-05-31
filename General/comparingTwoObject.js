// Coming Data
const api_data = {
  id: 2,
  name: "Alex",
  age: 24,
  country: "Netherland",
};
// Existing Data
const existingData = {
  id: 2,
  name: "alice",
  age: 24,
  country: "USA",
};

const apiKeys = Object.keys(api_data);
let anArray = {};

for (let i = 0; i <= apiKeys.length - 1; i++) {
  const key = apiKeys[i];

  if (api_data[key] !== existingData[key]) {
    anArray[key] = api_data[key];
  }
}

console.log(anArray);
