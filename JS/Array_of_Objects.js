//Basic Array of Objects
let students = [
  { name: "Tushar", age: 24, grade: "A" },
  { name: "Priya", age: 22, grade: "B" },
  { name: "Rahul", age: 25, grade: "A+" }
];

console.log(students[0].name); // Output: Tushar
console.log(students[1].grade); // Output: B

//Looping through Array of Objects
for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].name} has grade ${students[i].grade}`);
}

//using forEach
students.forEach(student => {
  console.log(`${student.name} is ${student.age} years old`);
});
//Filtering Array of Objects
let gradeAStudents = students.filter(student => student.grade === "A");

console.log(gradeAStudents);

//Finding an Object
let rahul = students.find(student => student.name === "Rahul");

console.log(rahul); // Output: { name: "Rahul", age: 25, grade: "A+" }

//Adding a New Object
students.push({ name: "Anjali", age: 23, grade: "B+" });
console.log(students);

//Updating a Value in an Object
students[1].grade = "A-";
console.log(students[1]); // Updated Priya's grade

// Deleting an Object
students.splice(2, 1); // Removes 1 element at index 2 (Rahul)
console.log(students);


//Array Object Literals
let books = [
    {
        "id": 1,
        "name": "The Russian",
        "type": "fiction",
        "available": true
    },
    {
        "id": 2,
        "name": "Just as I Am",
        "type": "non-fiction",
        "available": false
    },
    {
        "id": 3,
        "name": "The Vanishing Half",
        "type": "fiction",
        "available": true
    },
    {
        "id": 4,
        "name": "The Midnight Library",
        "type": "fiction",
        "available": true
    },
    {
        "id": 5,
        "name": "Untamed",
        "type": "non-fiction",
        "available": true
    },
    {
        "id": 6,
        "name": "Viscount Who Loved Me",
        "type": "fiction",
        "available": true
    }
];
console.log(books[0].name); // Output: The Russian

for (let i = 0; i < books.length; i++) {
    let result = books.filter(book => book.type === "fiction");
    console.log(`${books[i].name} is a ${books[i].type} book and is ${books[i].available ? "available" : "not available"}`);
    console.log(result);
}