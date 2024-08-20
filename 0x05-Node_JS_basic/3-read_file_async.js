const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter((line) => line.length > 0);
        if (lines.length === 0) {
          reject(new Error('Cannot load the database'));
        }

        const studentsByField = {};
        lines.shift(); // Enlever les en-têtes

        lines.forEach((line) => {
          const [firstname, , , field] = line.split(',');

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstname);
        });

        console.log(`Number of students: ${lines.length}`);

        for (const field in studentsByField) {
          if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
            const list = studentsByField[field].join(', ');
            console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${list}`);
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
