import { SaltBatch } from "./saltBatch";

export class Supplier {
  public _type: string;

  public _x509Identity: string;

  public _msp: string;

  public _address: string;

  public _organizationName: string;

  public _authorityNumber: string;

  public _rawMaterialAvailable: SaltBatch[];
}
