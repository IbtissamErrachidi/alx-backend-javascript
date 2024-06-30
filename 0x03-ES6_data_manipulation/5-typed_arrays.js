export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const buf = new DataView(buffer);
  buf.setInt8(position, value);
  return buf;
}
