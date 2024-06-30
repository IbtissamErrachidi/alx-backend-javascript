export default function setFromArray(arr) {
  const set = new Set();
  arr.forEach(item => {
    set.add(item);
  });
  return set;
}
