import { DrugBatch } from "./drugBatch";

export class drug {
  public readonly type = "io.pharmachain.drug";

  public name: string;

  public batch: DrugBatch[];

  public dateSold: Date;

  public amount: number;

  public invoiceNumber: string;

  public customerID: string;
}
