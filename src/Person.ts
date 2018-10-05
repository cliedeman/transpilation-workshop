interface Square {
  length: number;
}

class Person {
  private firstname: string;
  private lastname: string;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  static createPerson() {
    return new Person('Bob', 'Smith');
  }
}

function printSquare(square: Square) {
  console.log(square);
}
