export class Insurance {
  constructor(
    public id_insurance: number,
    public name_insurance: string,
    public insurance_policy: string,
    public agency: string,
    public validity_from: string,
    public validity_to: string,
    public insured: number
  ) {}
}
