/**
 * @description 类与继承测试
 * @author Chan
 * @version 2019-11-10
 */


// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.showName = function() {
//     console.log(this.name);
// }

// var a = new Animal('tom');
// a.showName();

class Animal {
    constructor(name) {
        this._name = name;
    }

    static showInfo() {
        console.log('this is a static function.');
    }
    showName() {
        console.log(this._name);
    }
}
let tom = new Animal('tom');
tom.showName();
Animal.showInfo();  //静态方法只能通过类名调用

class Dog extends Animal {
    constructor(color, name) {
        super(name);
        this._color = color;
    }

    showColor() {
        console.log(this._color);
    }
}

let d = new Dog('Yellow', 'jack');
d.showColor();
d.showName();