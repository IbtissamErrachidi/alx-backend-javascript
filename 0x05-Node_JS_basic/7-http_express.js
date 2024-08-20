const express = require('express');
const fs = require('fs').promises;

const app = express();

async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line.length > 0);
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const studentsByField = {};
    lines.shift();

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });

    let result = `Number of students: ${lines.length}\n`;

    for (const field in studentsByField) {
      if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
        const list = studentsByField[field].join(', ');
        result += `Number of students in ${field}: ${studentsByField[field].length}. List: ${list}\n`;
      }
    }
    result = result.trimEnd();
    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const filePath = process.argv[2];
  try {
    const result = await countStudents(filePath);
    res.send(`This is the list of our students\n${result}`);
  } catch (error) {
    res.status(500).send(`${error.message}\n`);
  }
});

app.use((req, res) => {
  res.status(404).send('Not Found\n');
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
