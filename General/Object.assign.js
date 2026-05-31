/* Example 1: 

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

*/

/*

Object.assign() modifies the target object

const target = {
  productName: "Jelly",
  price: 300,
};

const source = {
  createdAt: "2025-09-04",
  updateAt: "9437A837",
};

const result = Object.assign(target, source);
console.log(result);

*/

// ---------------------------------------------------------

/*

# It does a shallow copy, not a deep copy

# Example: 1

const original = {
  name: "Fahad",
};

const copy = Object.assign({}, original);

// changes the copy
copy.name = "changes";

// In here, original.name remain intact
console.log(original.name);



# Let's see another example

# Example 2

const original = {
  name: "Fahad",
  address: { city: "Dhaka" },
};

const copy = Object.assign({}, original);

// Changes inside copy
copy.address.city = "Chittagong";

console.log(original.address.city);
//Output: "Chittagong"
// The original object should remain intact


# So, we can conclude that by using Object.assign 
we can copy the original object and their original
property is immutable. like we see in the example 1.
But, when will try to do that same for nested 
object, it will be different. the original got changed.



// Deep Copy Fixes the problem

const original = {
  name: "Fahad",
  address: { city: "Dhaka" }, // nested object
};

const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "Sylhet";

console.log(original.address.city);
console.log(deepCopy.address.city);


*/
