const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.trim().split('\n').filter(line => line.length > 0);

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const headers = lines.shift().split(',');

    const studentsByField = {};

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });

    console.log(`Number of students: ${lines.length}`);

    for (const field in studentsByField) {
      const list = studentsByField[field].join(', ');
      console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${list}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
