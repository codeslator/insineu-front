import { TeacherDetail } from "../../configs/interfaces";


export const teachers: TeacherDetail[] = [
  {
    id: 1,
    code: 'PROF1234',
    person: {
      id: 2,
        first_name: 'Rosa',
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
  {
    id: 2,
    code: 'PROF5678',
    person: {
      id: 2,
        first_name: 'Rosa',
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
]