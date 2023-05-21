import { Enrollment } from "../../configs/interfaces";

export const enrollments: Enrollment[] = [
  {
    id: 1,
    student: {
      id: 1,
      code: 'EST1234',
      institution: {
        id: 1,
        name: 'Hospital Antonio Maria Pineda',
        address: 'Av. Vargas',
        city_id: 1,
      },
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
      }
    },
    teacher: {
      id: 1,
      code: 'PROF12345',
      person: {
        id: 2,
        first_name: 'Juan',
        last_name: 'Perez',
        document_id: 'V12345678',
        email: 'johndoe@mail.com',
        phone: '+123456789',
        birth_date: new Date(1980, 9, 15),
        status: 1,
        city_id: 1,
        type: {
          id: 2,
          name: 'Profesor',
          description: ''
        }
      }
    },
    course: {
      id: 1,
      name: 'Neumocurso 1',
      code: 'CUR0001',
      description: 'Curso sobre neumonologia'
    },
    start_date: new Date(),
    end_date: new Date(),
  },
]

