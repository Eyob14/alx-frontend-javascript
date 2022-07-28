export default class HolbertonCourse {
  constructor(name, length, students) {
    if (Object.getPrototypeOf(name) !== String.prototype) throw TypeError('name must be a string');
    if (Object.getPrototypeOf(length) !== Number.prototype) throw TypeError('length must be a number');
    if (Object.getPrototypeOf(students) !== Array.prototype) throw TypeError('students must be an array of strings');

    for (let i = 0; i < students.length; i += 1) {
      if (Object.getPrototypeOf(students[i]) !== String.prototype) throw TypeError('students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(newName) {
    if (Object.getPrototypeOf(newName) !== String.prototype) throw TypeError('name must be a string');
    this._name = newName;
  }

  set length(newLength) {
    if (Object.getPrototypeOf(newLength) !== Number.prototype) throw TypeError('length must be a number');
    this._length = newLength;
  }

  set students(newStudent) {
    if (Object.getPrototypeOf(newStudent) !== Array.prototype) throw TypeError('students must be an array');
    newStudent.forEach((student) => {
      if (Object.getPrototypeOf(student) !== String.prototype) throw TypeError('students must be an array of strings');
    });
    this._students = newStudent;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
