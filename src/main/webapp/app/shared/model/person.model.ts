import { IPersonAddresses } from 'app/shared/model/person-addresses.model';

export interface IPerson {
  id?: number;
  name?: string;
  age?: number;
  addresses?: IPersonAddresses[];
}

export class Person implements IPerson {
  constructor(public id?: number, public name?: string, public age?: number, public addresses?: IPersonAddresses[]) {}
}
