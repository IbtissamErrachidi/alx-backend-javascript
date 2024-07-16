interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Autoriser toute propriété supplémentaire
}
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Propriété dynamique supplémentaire
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

// Exemple d'utilisation
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Exemple d'utilisation
console.log(printTeacher("John", "Doe"));

// Interface pour le constructeur
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Interface pour la classe StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implémentation de la classe StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Exemple d'utilisation
const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.displayName()); // Devrait imprimer "John"
console.log(student.workOnHomework()); // Devrait imprimer "Currently working"
