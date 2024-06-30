export default function updateStudentGradeByCity(data, city, newGrades) {
  const students = data.filter((x) => x.location === city);
  const Data = students.map((x) => {
    const studentId = newGrades.find((entry) => entry.studentId === x.id);
    if (studentId) {
      return {
        ...x,
        grade: studentId.grade,
      };
    }
    return { ...x, grade: 'N/A' };
  });
  return Data;
}
