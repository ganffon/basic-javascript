// Assignment 2 
let courses = [
{level:'easy', subject: "English" }, 
{level:'hard', subject: "Mathmatic" }, 
{level:'medium', subject: "Literature" }, 
{level:'hard', subject: "Science" }, 
{level:'medium', subject: "Socialogy" }
];

// 아래 함수를 작성해주세요. 
function filtered() {
    let result = courses.filter((course)=>course.level == "hard");

    result.forEach(console.log);
}
filtered()
module.exports = { filtered };