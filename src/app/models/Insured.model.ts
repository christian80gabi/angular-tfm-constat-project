import {Vehicle} from './vehicle.model';
import {Insurance} from './insurance.model';
import {Assistance} from './assistance.model';

export class Insured {
  constructor(
    public id_insured: number,
    public first_name_insured: string,
    public last_name_insured: string,
    public email_insured: string,
    public password_insured: string,
    public address_insured: string,
    public tel_insured: string,
    public status: number,
    public token: string
  ) {}
}
