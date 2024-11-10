'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name);
    this.health = health;
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;

    return this.hidden;
  }

  apply(sourceHealth, damage) {
    this.health -= damage;

    if (this.health <= 0) {
      const index = Animal.alive.indexOf(this);

      if (index > -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name);
    this.health = health;
  }

  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.apply(this.health, 50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
