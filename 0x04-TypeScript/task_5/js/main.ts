// Define interfaces with a unique brand property
interface MajorCredits {
  credits: number;
  // Add a unique brand property to distinguish from MinorCredits
  brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  // Add a unique brand property to distinguish from MajorCredits
  brand: "MinorCredits";
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits"
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits"
  };
}

// Example usage
const major1: MajorCredits = { credits: 30, brand: "MajorCredits" };
const major2: MajorCredits = { credits: 20, brand: "MajorCredits" };
const minor1: MinorCredits = { credits: 10, brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 5, brand: "MinorCredits" };

console.log(sumMajorCredits(major1, major2)); // Output: { credits: 50, brand: "MajorCredits" }
console.log(sumMinorCredits(minor1, minor2)); // Output: { credits: 15, brand: "MinorCredits" }
