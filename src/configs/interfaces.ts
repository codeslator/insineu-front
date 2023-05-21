export interface PersonType {
  id?: string | number;
  name: string;
  description: string;
  created_at?: Date;
}

export interface Person {
  id?: string | number;
  first_name: string;
  last_name: string;
  document_id: string;
  email: string;
  phone: string;
  mobile?: string;
  birth_date: Date;
  status: number;
  city_id: number;
  type: PersonType;
  created_at?: Date;
}

export interface User {
  id?: string | number;
  username?: string;
  email: string;
  password?: string;
  status: number;
  person?: Person;
  role_id: number;
  qr_code?: string;
  created_at?: Date;
}

export interface StudentDetail {
  id?: string | number;
  code: string;
  person: Person;
  institution: Institution;
  created_at?: Date;
}


export interface TeacherDetail {
  id?: string | number;
  code: string;
  person: Person;
  created_at?: Date;
}

export interface Course {
  id?: string | number;
  name: string;
  description: string;
  code: string;
  created_at?: Date;
}

export interface Enrollment {
  id?: string | number;
  student: StudentDetail;
  teacher: TeacherDetail;
  course: Course;
  start_date: Date;
  end_date: Date;
  created_at?: Date;
}

export interface Institution {
  id?: string | number;
  name: string;
  address: string;
  city_id: number;
  created_at?: Date;
}

export interface Question {
  id?: string | number;
  text: string;
  created_at?: Date;
}

export interface Answer {
  id?: string | number;
  text: string;
  enrollment: Enrollment;
  question: Question;
  created_at?: Date;
}

export interface Cities {
  id?: string | number;
  name: string;
  country: Country;
  created_at?: Date;
}

export interface Country {
  id?: string | number;
  name: string;
  abbreviation: string;
  prefix: string;
  status: number;
  created_at?: Date;
}