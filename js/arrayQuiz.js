// Q1. make a string out of an array
{
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.join());

}

// Q2. make an array out of a string
{
const fruits = '🍎, 🥝, 🍌, 🍒';
//console.log([].concat(fruits));
console.log(fruits.split(', '));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
const array = [1, 2, 3, 4, 5];
console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
const array = [1, 2, 3, 4, 5];
//console.log(array.splice(2));
console.log(array.slice(2, array.length));
}

class Student {
constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
}
}
const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    //console.log(students.filter(students => students.score >= 90));
    
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    // const arr = [];
    // for(let properties of students){
    //     arr.push(properties.enrolled);
    // }
    // console.log(arr);

    const result = students.filter((students) => students.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    // const arr = [];
    // for(let student of students){
    //     arr.push(student.score);
    // }
    // console.log(arr);

    const result = students.map((students) => students.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    //console.log(students.includes(students.score < 50));
    const result = students.some((students) => students.score < 50);
    console.log(result);

    const result2 = !students.every((students) => students.score >= 50);
    console.log(result2);
}

// Q9. compute students' average score
{
    // const arr = [];
    // for(let student of students){
    //     arr.push(student.score);
    // }
    
    // const result = arr.reduce((acc, curr) => {
    //     return acc + curr;
    // }, 0)

    // console.log(result / arr.length);

    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    // const arr = [];
    // for(let student of students){
    //     arr.push(student.score);
    // }
    // console.log(arr.join());

    const result = students.map((students) => students.score).join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    // const arr = [];
    // for(let student of students){
    //     arr.push(student.score);
    // }

    // console.log(arr.sort().join());

    const result = students
    .map((students) => students.score)
    .sort()
    .join();
    console.log(result);
}