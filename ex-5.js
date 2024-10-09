const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here

  const totalScore = students.reduce((acc, cur) => acc + cur.score, 0);
  const averageScores = totalScore / students.length;
  return averageScores;
}

console.log(getAverageStudentScore(students)); // Output: 87.5

 