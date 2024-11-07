import db from "..";
import { advocates } from "../schema";

// Predefined data for random selection
const firstNames = ["John", "Jane", "Alice", "Michael", "Emily", "Chris", "Jessica", "David", "Laura", "Daniel", "Sarah", "James", "Megan", "Joshua", "Amanda", "Robert", "Patricia", "Linda", "Thomas", "Barbara"];
const lastNames = ["Doe", "Smith", "Johnson", "Brown", "Davis", "Martinez", "Taylor", "Harris", "Clark", "Lewis", "Lee", "King", "Green", "Walker", "Hall", "Anderson", "Thomas", "Jackson", "White", "Hernandez"];
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Columbus", "Fort Worth", "Charlotte", "Seattle", "Denver", "Boston", "Nashville"];
const degrees = ["MD", "PhD", "MSW", "DO"];

const specialties = [
  "Bipolar",
  "LGBTQ",
  "Medication/Prescribing",
  "Suicide History/Attempts",
  "General Mental Health (anxiety, depression, stress, grief, life transitions)",
  "Men's issues",
  "Relationship Issues (family, friends, couple, etc)",
  "Trauma & PTSD",
  "Personality disorders",
  "Personal growth",
  "Substance use/abuse",
  "Pediatrics",
  "Women's issues (post-partum, infertility, family planning)",
  "Chronic pain",
  "Weight loss & nutrition",
  "Eating disorders",
  "Diabetic Diet and nutrition",
  "Coaching (leadership, career, academic and wellness)",
  "Life coaching",
  "Obsessive-compulsive disorders",
  "Neuropsychological evaluations & testing (ADHD testing)",
  "Attention and Hyperactivity (ADHD)",
  "Sleep issues",
  "Schizophrenia and psychotic disorders",
  "Learning disorders",
  "Domestic abuse",
];

// Helper function to generate a random number between a range
const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Helper function to get random specialties
const randomSpecialty = () => {
  const random1 = getRandomNumber(0, specialties.length - 1);
  const random2 = getRandomNumber(random1, specialties.length - 1);
  return specialties.slice(random1, random2 + 1);
};

// Function to generate a random phone number
const generateRandomPhoneNumber = () => {
  const areaCode = getRandomNumber(100, 999);
  const centralOfficeCode = getRandomNumber(100, 999);
  const lineNumber = getRandomNumber(1000, 9999);
  return `${areaCode}${centralOfficeCode}${lineNumber}`;
};

// Generate 100,000 random advocate records
const advocateData = Array.from({ length: 100000 }, () => ({
  firstName: firstNames[getRandomNumber(0, firstNames.length - 1)],
  lastName: lastNames[getRandomNumber(0, lastNames.length - 1)],
  city: cities[getRandomNumber(0, cities.length - 1)],
  degree: degrees[getRandomNumber(0, degrees.length - 1)],
  specialties: randomSpecialty(),
  yearsOfExperience: getRandomNumber(1, 40), // Generate between 1 and 40 years of experience
  phoneNumber: generateRandomPhoneNumber(),
}));

export { advocateData };
