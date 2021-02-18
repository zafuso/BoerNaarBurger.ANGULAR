import {Deserializable} from './deserializable.model';

export class User implements Deserializable {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  phone_number: string;
  street: string;
  house_number: string;
  zipcode: string;
  city: string;
  country: string;
  iban: string;
  company: string;
  vat_number: string;
  date_of_birth: string;
  has_accepted_terms: boolean;
  custom_field_1: string;
  custom_field_2: string;
  user_type_id: string;
  profile_picture: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }

  getFullName() {
    return this.first_name + ' ' + this.last_name;
  }
}
