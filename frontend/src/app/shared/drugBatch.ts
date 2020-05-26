import { SaltBatch } from "./saltBatch";
import { Supplier } from "./supplier";
import { Manufacturer } from "./manufacturer";

export enum State {
  DRUG_BATCH_MANUFACTURED,
  DRUG_BATCH_SHIPPED,
  IN_DISTRIBUTOR_STORAGE,
  RECEIVED_BY_PHARMACIST,
  READY_FOR_SALE,
}

export class DrugBatch {
  public _type: string;

  public _id: string;

  public _name: string;

  public _state: State;

  public _amount: number;

  public _salts: SaltBatch[];

  public _genericName: string;

  public _owner: string;

  public _expiryDate: string;

  public _manufacturingDate: string;

  public _shippingId: string;

  public _dateShippedFromManufacturer: string;

  public _dateReceivedByDistributor: string;

  public _dateReceivedByPharmacist: string;

  public _supplier: Supplier;

  public _manufacturer: Manufacturer;

  //   public distributor: Distributor;

  //   public pharmacist: Pharmacist;
}
