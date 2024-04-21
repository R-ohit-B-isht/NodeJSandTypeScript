import * as fs from 'fs';

interface Person {
  name: string;
  birthYear: number;
}

const calculateAgeIn2030 = (person: Person): number => {
  const ageIn2030 = 2030 - person.birthYear;
  return ageIn2030;
};

const writeToFileAndRead = (filePath: string, person: Person): void => {
  const ageIn2030 = calculateAgeIn2030(person);
  const contentToWrite = `${person.name} will be ${ageIn2030} years old in 2030.`;

  fs.appendFile(filePath, contentToWrite + '\n', 'utf8', (appendErr) => {
    if (appendErr) {
      console.error('Error writing to file:', appendErr);
      return;
    }

    console.log('Output written to file:', filePath);

    fs.readFile(filePath, 'utf8', (readErr, data) => {
      if (readErr) {
        console.error('Error reading file:', readErr);
        return;
      }

      console.log('File content:', data);
    });
  });
};

const person: Person = {
  name: "Eric",
  birthYear: 1999,
};

const filePath = 'example.txt';

writeToFileAndRead(filePath, person);
