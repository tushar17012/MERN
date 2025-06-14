const student = {
  name: "Tushar Bhatt",
  age: 24,
  prop: this,
  getname: function () {
    console.log(this);
    console.log(this.name);
  },
  getage: () => {
    console.log(this);
    console.log(this.name);
  },
  get_info1: function () {
    setTimeout(() => {
      console.log('Under Student Arrow Function setTimeout getinfo1', this.name, this.age);
    }, 2000)
  },
  get_into2: () => {
    setTimeout(function () {
      console.log('Under Student Normal Function setTimeout getinfo2', this.name, this.age);
    }, 2000)
  },
  get_into3: function () {
    setInterval(() => {
      console.log('Under Student Arrow Function setInterval getinfo3', this.name, this.age);
    }, 2000)
  },
  get_into4: () => {
    setInterval(function () {
      console.log('Under Student Normal Function setInterval getinfo4', this.name, this.age);
    }, 2000)
  },
  get_into5: () => {
    setTimeout(() => {
      console.log('Under Student Normal Function setInterval getinfo5', this.name, this.age);
    }, 2000)
  }
};
// student.getname();
// student.getage();
// student.get_info1();
// student.get_into2();
// student.get_into3();
// student.get_into4();
// student.get_into5();


//Write an arrow function that returns the square of a number 'n'?
//Write a function that prints "Hello World" 5 times at internal of 2 sec?

const Ques_this = {
  N: 0,
  Prt: 'Hello World',

  get_square: function () {
    console.log(this.N * this.N);
  },

  get_prt: function () {
    let id = setInterval(() => {
      console.log(this.Prt);
    }, 2000);
    setTimeout(() => {
      clearInterval(id);
    }, 10000)
  }
};

// Set value and call methods
Ques_this.N = 5;
Ques_this.get_square(); // Output: 25
Ques_this.get_prt();    // Prints "Hello World" 5 times after 2 seconds
