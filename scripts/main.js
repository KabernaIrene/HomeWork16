/*Створити сутність "Людина".
Властивості:імʼя;вік.
Методи:конструктор, який приймає два параметри: імʼя та вік;
метод, який виводить у консоль інформацію про людину.
*/

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.dataPerson = function (){
        console.log (`person is ${this.name}, ${this.age}`);
    }
}

const person1 = new Person('Irene', 36);
const person2 = new Person('Oksana', 37);
const person3 = new Person('Oleg', 17);

person1.dataPerson();
person2.dataPerson();
person3.dataPerson();

/*
2. Створити сутність "Автомобіль".
Властивості:марка, модель, рік виписку, номерний знак (або на Ваш розсуд);власник.
Методи:
конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку,
номерний знак присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати 
екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль 
відповідне повідомлення;
метод, який виводить у консоль інформацію про автомобіль та викликає метод 
виводу інформації класу Людина для виведення інформації про власника
*/

function Cars (brand, model, year, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;

    this.methodCars = function (owner){
        if (owner instanceof Person && owner.age >= 18) {
            return this.owner = owner;
        } else console.log (`Your age is not enough`);
    }

    this.carOwner =  function() {
        console.log (`Автомобіль марки ${this.brand}, \n модель ${this.model}, \n ${this.year} року випуску, \n з номерним знаком ${this.licensePlate} належить `);
        this.owner.dataPerson();
    }
}

const car1 = new Cars ('Audi', 'A3', 2016, 'GT2548JU');
const car2 = new Cars ('bentley', 'Mulsanne', 2020, 'jd2548ud');
const car3 = new Cars ('BMW', 'Cabrio', 2022, 'lk5874hy');

car1.methodCars(person1);
car1.carOwner();

car2.methodCars(person2);
car2.carOwner();

car3.methodCars(person3);
car3.carOwner();


/*
В якості демонстраціїї створити:
декілька екземплярів класу Людина;
декілька екземплярів класу Автомобіль;
присвоїти власників автомобілям.
*/