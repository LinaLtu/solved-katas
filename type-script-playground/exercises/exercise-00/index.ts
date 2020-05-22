import chalk from 'chalk';

/*

Exercise:

    Given the data, define the interface "User" and use it accordingly.

Run this exercise:

    npm run 0

    - OR -

    yarn -s 0

*/

interface User {
  name: string;
  age: number;
  occupation: string;
}

type UserArray = Array<User>;

const users: UserArray = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  }
];

function logPerson(user: User) {
  console.log(` - ${chalk.green(user.name)}, ${user.age}`);
}

console.log(chalk.yellow('Users:'));
users.forEach(logPerson);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction
