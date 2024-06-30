export default function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  const ids = list.map((student) => student.id);
  return ids;
}
