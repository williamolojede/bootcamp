class Employee {
  constructor(name, position, sex, yob) {
    if(typeof(name) !== 'string') {

    }
    this.name = name;
    this.position = position || 'employee';
    this.sex = sex;
    // yob: year of birth
    this.yob = yob;
  }

  speak() {
    return `hello my name is ${this.name}, I'm an ${this.position} here`;
  }

  get age(){
    return this.calcAge();
  }

  calcAge() {
    const currentYear = (new Date()).getFullYear();
    return currentYear - this.yob;
  }
}

// Inheritence
class Manager extends Employee {
  constructor(name, sex, yob){
    super(name, 'Mananger', sex, yob);
  }
  
  // Polymorphism
  speak() {
    if(this.sex === 'male' || this.sex === 'M' || this.sex === 'm'){
      return `I'm Mr ${this.name}, and I'm your your boss`;
    } else if(this.sex === 'female' || this.sex === 'F' || this.sex === 'f') {
      return `I'm Mrs ${this.name}, and I'm your boss`;
    }
  }
}

module.exports = {
  Employee: Employee,
  Manager: Manager
}