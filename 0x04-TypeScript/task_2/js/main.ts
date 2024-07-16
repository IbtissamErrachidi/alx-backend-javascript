// Interface et classes déjà définies
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Fonction isDirector
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Fonction executeWork
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Exemples d'utilisation
executeWork(createEmployee(200)); // Devrait imprimer "Getting to work"
executeWork(createEmployee(1000)); // Devrait imprimer "Getting to director tasks"

// Définition du type littéral de chaîne Subjects
type Subjects = 'Math' | 'History';

// Fonction teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}

// Exemples d'utilisation
console.log(teachClass('Math')); // Devrait imprimer "Teaching Math"
console.log(teachClass('History')); // Devrait imprimer "Teaching History"
