import { faker } from "@faker-js/faker";

interface User {
  id: string;
  avatar: string;
  email: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
}

faker.seed(123);

function createUser(): User {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });

  return {
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    jobTitle: faker.person.jobTitle(),
    firstName,
    lastName,
    email,
  };
}

export const data: User[] = faker.helpers.multiple(createUser, { count: 100 });
