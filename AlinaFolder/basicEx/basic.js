//ex1: Create 3 different classes:  car, animal and person. These classes should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 
//Each class should have at least one method, that shows some properties about each theme. Feel free to expand on that.
//Create, using the classes, 3 different objects for each class.
//The results from the methods must be printed on the browser too.

class Person {
    name;
    job;/* brand */
    heigth;/* model */
    persType; /* type */
    eyesColor;/* color */
    hobbies;/*weight  */
    age;

    constructor (name, job, heigth, persType, eyesColor, hobbies, age) {
        this.name=name;
        this.job=job;
        this.heigth=heigth;
        this.persType=persType;
        this.eyesColor=eyesColor;
        this.hobbies=hobbies;
        this.age=age;
    }

    introduce () {
        return      `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">${this.age} years old.</p>
                            <p class="card-text">I work as ${this.job}. My personality is ${this.persType} and in my free time I like to ${this.hobbies}.</p>
                            
                        </div>
                    </div>`
}

}
let person1 = new Person ("John", "manager", 1.84, "cooperative", "brown", "run", 34);
let person2 = new Person ("Joe", "writer", 1.70, "cooperative", "blue", "read", 30);
let person3 = new Person ("Max", "singer", 1.65, "cooperative", "green", "sing", 25);

let personArray = [person1, person2, person3];

for (item of personArray) {
    document.querySelector(".person").innerHTML+=item.introduce();
}

///////

class Animal {
    name;
    sounds;/* brand */
    heigth;/* model */
    type;
    color;
    weight;
    age;

    constructor (name, sounds, heigth, type, color, weight, age) {
        this.name=name;
        this.sounds=sounds;
        this.heigth=heigth;
        this.type=type;
        this.color=color;
        this.weight=weight;
        this.age=age;
    }

    sound () {
        return  `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title demoName">${this.name}</h5>
                        <p class="card-text demo">I am a ${this.type} and my color is ${this.color}. All day long I do ${this.sounds}.</p>
                    </div>
                </div>`
       
    }
}

let dog = new Animal ("Riky", "woof woof woof", 50, "Labrador Retriever", "lightbrown", 35, 1.6)
let cat = new Animal ("Mitzi", "meow meow meow", 25 , "American Curl Cat", "grey", 7, 2)
let pig = new Animal ("Pigy", "oink oink oink", 70 , "British Pig", "white", 70, 5)

let animalArray = [dog, cat, pig];

for (item of animalArray) {
    document.querySelector(".animal").innerHTML+=item.sound();
}
    
////
class Car {
    name;
    brand;
    model;
    type;
    color;
    weight;
    age;

    constructor (name, brand, model, type, color, weight, age) {
        this.name=name;
        this.brand=brand;
        this.model=model;
        this.type=type;
        this.color=color;
        this.weight=weight;
        this.age=age;
    }

    info () {
        return `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title demoName">${this.name}</h5>
                        <p class="card-text demo">I am a ${this.name} car. My model is ${this.model}.</p>
                    </div>
                </div>`
        
    }
}

let renault = new Car ("Renault", "Renault", 2010, " ", "white", " ", 11)
let audi = new Car ("Audi", "Audi", 2020 , " ", "red", " ", 1)
let hammer = new Car ("Hammer", "Hammer", 2013 , " ", "black", " ", 8)

let carArray = [renault, audi, hammer];

for (item of carArray) {
    document.querySelector(".car").innerHTML+=item.info();
}
