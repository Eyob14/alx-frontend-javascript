export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const typedArray = new DataView(buffer);
    typedArray.setInt8(position, value);
    return typedArray;
  } catch (error) {
    throw new Error('Position outside range');
  }
}
