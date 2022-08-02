export default function updateStudentGradeByCity(
  studentsList,
  city,
  newGrades,
) {
  return studentsList
    .filter((student) => student.location === city)
    .map((res) => {
      res.grade = 'N/A';
      for (const g of newGrades) {
        if (g.studentId === res.id) {
          res.grade = g.grade;
        }
      }
      return res;
    });
}
