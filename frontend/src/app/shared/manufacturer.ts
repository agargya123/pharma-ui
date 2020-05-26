import { SaltBatch } from "./saltBatch";

export class Manufacturer {
  public _type: string;

  public _x509Identity: string;

  public _msp: string;

  public _address: string;

  public _organizationName: string;

  public _authorityNumber: string;

  public _FDALicenseNumber: string;

  public _rawMaterialAvailable: SaltBatch[];

  public _batchManufacturedCount: number = 0;
}
