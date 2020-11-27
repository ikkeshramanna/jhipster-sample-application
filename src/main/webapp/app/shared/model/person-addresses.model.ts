import { IPerson } from 'app/shared/model/person.model';

export interface IPersonAddresses {
  id?: number;
  address?: string;
  zipcode?: number;
  person?: IPerson;
}

export class PersonAddresses implements IPersonAddresses {
  constructor(public id?: number, public address?: string, public zipcode?: number, public person?: IPerson) {}
}
