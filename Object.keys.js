var userBasic = {
  name: "Alice",
  age: 20,
};

var userPreferences = {
  theme: "dark",
  notification: "true",
};

var userProfile = {};

for (var key in userBasic) {
  if (userBasic.hasOwnProperty(key)) {
    userProfile[key] = userBasic[key];
  }
}

for (var key in userPreferences) {
  if (userPreferences.hasOwnProperty(key)) {
    userProfile[key] = userPreferences[key];
  }
}

console.log(userProfile);
