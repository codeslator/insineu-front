export interface PersonType {
  id: string | number;
  name: string;
  description: string;
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
}

export interface User {
  id: string | number;
  username?: string;
  email: string;
  password?: string;
  status: number;
  person?: Person;
  role_id: number;
}