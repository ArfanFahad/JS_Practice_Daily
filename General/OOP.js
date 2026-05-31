class Animal {
  // Parent Class
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  // Child Class
  speak() {
    console.log(`${this.name} barks`);
  }
}

let dog = new Dog("Buddy");
dog.speak();
