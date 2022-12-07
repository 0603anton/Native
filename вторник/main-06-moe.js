const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];

const user = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};

//1. Поверхностная копия user
let copyUser = {...user}
// console.log(user === copyUser);
// console.log(user.friends === copyUser.friends);

//2. Полная (глубокая) копия user
let deepCopyStudent = {...user, friends: [...user.friends]}
// console.log(user === deepCopyStudent);
// console.log(user.friends === deepCopyStudent.friends);

//3. Поверхностная копия students
const copyStudents = [...students];
// slice()
console.log(students === copyStudents);
console.log(students[0] === copyStudents[0]);

//4*. Полная (глубокая) копия students

let deepCopyStudents = students.map((el)=> ({...el})) // TODO зачем в скобки оборачиваем
// console.log(students === deepCopyStudents);
// console.log(students[0] === deepCopyStudents[0]);
// console.log(students);
// console.log(deepCopyStudents);