//Kata: https://www.codewars.com/kata/fixme-hello/train/javascript

class Dinglemouse {
  constructor() {
    this.name = this.age = this.sex = 0;
    this.order = [];
  }

  setAge(age) {
    this.age = age;
    if (!this.order.includes("age")) {
      this.order.push("age");
    }
    return this;
  }

  setSex(sex) {
    this.sex = sex;
    if (!this.order.includes("sex")) {
      this.order.push("sex");
    }
    return this;
  }

  setName(name) {
    this.name = name;
    if (!this.order.includes("name")) {
      this.order.push("name");
    }
    return this;
  }

  hello() {
    let items = this.order.map(item => {
      if (item === "name") {
        return ` My name is ${this[item]}.`;
      } else {
        if (item === "sex") {
          this[item] === "M" ? (this[item] = "male") : (this[item] = "female");
        }
        return ` I am ${this[item]}.`;
      }
    });

    return "Hello." + items.join("");
  }
}
