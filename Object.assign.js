const userBasic = {
  name: "Alice",
  age: 30,
};

const userPreference = {
  theme: "dark",
  notification: true,
};

const userProfile = Object.assign({}, userBasic, userPreference);

console.log(userProfile);
