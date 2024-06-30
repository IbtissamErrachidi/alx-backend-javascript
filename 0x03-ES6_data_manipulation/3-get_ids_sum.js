export default function getStudentIdsSum(studentData) {
  const numberOfStudents = studentData.reduce(
    (sum, currentValue) => currentValue.id + sum, 0,
  );
  return numberOfStudents;
}
