//1

class Weapon {

    constructor(weapon) {
        this.name = weapon.name;
        this.attack = weapon.attack;
        this.durability = weapon.durability;
        this._durability = this.durability;
        this.range = weapon.range;
    }

    takeDamage(damage) {
        this.durability -= new Number(damage);
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability == 'Infinity' || this.durability >= (this._durability * 3 / 10)) {
            return this.attack / 1; //метод выдавал Primitiv value. добавил деление на единицу чтобы от этого избавиться.
        } else if (this.durability == 0) {
            return 0;
        } else {
            return this.attack / 2;
        } 
    }

    isBroken() {
        return this.durability == 0;
    }
}


/* Проверка
const sword = new Weapon({
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1,
});
  
sword.takeDamage(5);
console.log(sword.durability); // 5
  
sword.takeDamage(50);
console.log(sword.durability); // 0

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

arm.takeDamage(20);
console.log(arm.durability); // Infinity

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false
*/

/* закомментировал часть кода, чтобы не мешало второй задаче
const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});

const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

const sword = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
});

const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});

const staff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});

const longBow = new Weapon({
    name: 'Длинный лук',
    attack: 15,
    durability: 200,
    range: 4,
});

const poleaxe = new Weapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: 1,
});

const tempestStaff = new Weapon({
    name: 'Посох Бури',
    attack: 10,
    durability: 300,
    range: 3,
});
*/

//2

class Arm extends Weapon{
    constructor() {
        super({
            name: 'Рука',
            attack: 1,
            durability: Infinity,
            range: 1,
        });
    }
}

class Bow extends Weapon{
    constructor() {
        super({
            name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3,
        });
    }
}

class Sword extends Weapon{
    constructor() {
        super({
            name: 'Меч',
            attack: 25,
            durability: 500,
            range: 1,
        });
    }
}

class Knife extends Weapon{
    constructor() {
        super({
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1,
        });
    }
}

class Staff extends Weapon{
    constructor() {
        super({
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2,
        });
    }
}

class LongBow extends Bow{
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Poleaxe extends Sword{
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

class TempestStaff extends Staff{
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

/* Check
const bow = new Bow();

console.log(bow.name); // Лук
console.log(bow.attack); // 10
console.log(bow.durability); // 200
console.log(bow.range); // 3

bow.takeDamage(20);
console.log(bow.durability); // 180
console.log(bow.getDamage()); // 10
console.log(bow.isBroken()); // false
bow.takeDamage(200);
console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0
console.log(bow.isBroken()); // true
*/

//3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.disciplines = [];
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        let index = -1;
        for (let i = 0; i < this.disciplines.length; i++) {
            if (this.disciplines[i].discipline == subject) {
                index = i;
            }
        }

        if (index == -1) {
            this.disciplines.push({discipline: subject, marks: []});
            index = this.disciplines.length - 1;
        } 

        if (isNaN(grade) || grade > 5 || grade < 1) {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
        } else {
            this.disciplines[index].marks.push(grade);
        }
        return this.disciplines[index].marks.length;
    }

    getAverageBySubject(subject) {
        for (let i = 0; i < this.disciplines.length; i++) {
            if (this.disciplines[i].discipline == subject) {
                let totalMarks = 0;
                for (let j = 0; j < this.disciplines[i].marks.length; j++){
                    totalMarks += this.disciplines[i].marks[j];
                }
                return totalMarks / this.disciplines[i].marks.length;
            }
        }
        return 0;
    }

    getTotalAverage() {
        let marksAmount = 0;
        let marksQuantity = 0;
        for (let subject of this.disciplines) {
            for (let i = 0; i < subject.marks.length; i++) {
                marksAmount += subject.marks[i];
                marksQuantity++;
            }
        }
        if (marksQuantity > 0) {
            return marksAmount / marksQuantity;
        } else {
            return 0;
        }
    }
}


const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75
