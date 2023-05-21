import { User } from "../../configs/interfaces";

export const users: User[] = [
  {
    id: 1,
    email: 'johndoe@mail.com',
    status: 1,
    person: {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      document_id: 'V12345678',
      email: 'johndoe@mail.com',
      phone: '+123456789',
      birth_date: new Date(1999, 5, 22),
      status: 1,
      city_id: 1,
      type: {
        id: 1,
        name: 'Estudiante',
        description: ''
      }
    },
    role_id: 1,
  },
  {
    id: 2,
    email: 'janedoe@mail.com',
    status: 1,
    person: {
      id: 2,
      first_name: 'Jane',
      last_name: 'Doe',
      document_id: 'V12345678',
      email: 'johndoe@mail.com',
      phone: '+123456789',
      birth_date: new Date(1999, 5, 22),
      status: 1,
      city_id: 1,
      type: {
        id: 2,
        name: 'Profesor',
        description: ''
      }
    },
    role_id: 1,
  },
];