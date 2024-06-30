export default function updateStudentGradeByCity(students, city, newGrades) {
  const updatedStudents = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    if (student.location === city) {
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);
      updatedStudents.push({
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      });
    }
  }

  return updatedStudents;
}

