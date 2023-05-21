import { StudentDetail } from "../../configs/interfaces";

export const students: StudentDetail[] = [
  {
    id: 1,
    code: 'EST1234',
    person: {
      id: 1,
      first_name: 'Enrique',
      last_name: 'Salazar',
      document_id: 'V12345678',
      email: 'johndoe@mail.com',
      phone: '+123456789',
      birth_date: new Date(1999, 5, 21),
      status: 1,
      city_id: 1,
      type: {
        id: 1,
        name: 'Estudiante',
        description: ''
      }
    },
    institution: {
      id: 1,
      name: 'Hospital Antonio Maria Pineda',
      address: 'Av. Vargas',
      city_id: 1,
    },
  },
  {
    id: 2,
    code: 'EST5678',
    person: {
      id: 1,
      first_name: 'Juan',
      last_name: 'Perez',
      document_id: 'V12345678',
      email: 'johndoe@mail.com',
      phone: '+123456789',
      birth_date: new Date(1997, 7, 10),
      status: 1,
      city_id: 1,
      type: {
        id: 1,
        name: 'Estudiante',
        description: ''
      }
    },
    institution: {
      id: 2,
      name: 'Hospital Universitario de Pediatria Agustin Zubillaga',
      address: 'Av. Vargas',
      city_id: 1,
    },
  },
];