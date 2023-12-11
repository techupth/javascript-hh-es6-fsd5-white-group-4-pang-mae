let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

// Start coding here
let newStudentProfile = { ...studentProfile, ...studentScores };
console.log(newStudentProfile);               //Answer1


console.log(Object.assign({},studentProfile, studentScores));      //Answer2


