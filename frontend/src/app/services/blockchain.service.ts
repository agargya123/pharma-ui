import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BLOCKCHAIN_API_END_POINT, CHAINCODE_NAME } from "./env";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BlockchainService {
  constructor(private _http: HttpClient) {}
  public formDataSubmit = {};

  fetchSalts(formDetails: any): Observable<any> {
    this.formDataSubmit["supplierId"] = formDetails["supplierId"];
    this.formDataSubmit["rawMaterialSupply"] = {};

    for (let value in formDetails["rawMaterialSupply"]) {
      console.log(value);
      this.formDataSubmit["rawMaterialSupply"][
        formDetails["rawMaterialSupply"][value].salt
      ] = formDetails["rawMaterialSupply"][value].quantity;
    }
    console.log(this.formDataSubmit);
    return this._http.post(
      BLOCKCHAIN_API_END_POINT + "/" + CHAINCODE_NAME + "/fetchSalts",
      this.formDataSubmit,
      {
        observe: "body",
      }
    );
  }

  getRawMaterialFromSupplier(formDetails: any): Observable<any> {
    this.formDataSubmit["supplierId"] = formDetails["supplierId"];
    this.formDataSubmit["manufacturerId"] = formDetails["manufacturerId"];

    this.formDataSubmit["rawMaterialSupply"] = {};

    for (let value in formDetails["rawMaterialSupply"]) {
      console.log(value);
      this.formDataSubmit["rawMaterialSupply"][
        formDetails["rawMaterialSupply"][value].salt
      ] = formDetails["rawMaterialSupply"][value].quantity;
    }
    console.log(this.formDataSubmit);
    return this._http.post(
      BLOCKCHAIN_API_END_POINT +
        "/" +
        CHAINCODE_NAME +
        "/getRawMaterialFromSupplier",
      this.formDataSubmit,
      {
        observe: "body",
      }
    );
  }

  manufactureDrugs(formDetails: any): Observable<any> {
    /*
    "manufacturerId": "manufacturer",
    "rawMaterialConsumed": {
        "salt_2": 5
    },
    "drugName": "Pantop 20",
    "genericName": "Pantogen",
    "productsCreated": 20,
    "expiryDate": "20/3/2022"
    */
    this.formDataSubmit = {};
    this.formDataSubmit["drugName"] = formDetails["drugName"];
    this.formDataSubmit["manufacturerId"] = formDetails["manufacturerId"];
    this.formDataSubmit["productsCreated"] = formDetails["productsCreated"];
    this.formDataSubmit["drugName"] = formDetails["drugName"];
    this.formDataSubmit["genericName"] = formDetails["genericName"];
    this.formDataSubmit["expiryDate"] = formDetails["expiryDate"].toString();
    this.formDataSubmit["rawMaterialConsumed"] = {};

    for (let value in formDetails["rawMaterialConsumed"]) {
      this.formDataSubmit["rawMaterialConsumed"][
        formDetails["rawMaterialConsumed"][value].salt.toString()
      ] = Number(formDetails["rawMaterialConsumed"][value].quantity);
    }
    console.log(this.formDataSubmit);
    return this._http.post(
      BLOCKCHAIN_API_END_POINT + "/" + CHAINCODE_NAME + "/manufactureDrugs",
      this.formDataSubmit,
      {
        observe: "body",
      }
    );
  }

  shipProductsFromManufacturerToDistributor(formDetails: any): Observable<any> {
    return this._http.post(
      BLOCKCHAIN_API_END_POINT +
        "/" +
        CHAINCODE_NAME +
        "/shipProductsFromManufacturerToDistributor",
      formDetails,
      {
        observe: "body",
      }
    );
  }

  receiveProductsFromManufacturerByDistributor(
    formDetails: any
  ): Observable<any> {
    return this._http.post(
      BLOCKCHAIN_API_END_POINT +
        "/" +
        CHAINCODE_NAME +
        "/receiveProductsFromManufacturerByDistributor",
      formDetails,
      {
        observe: "body",
      }
    );
  }

  exportProductsToPharmacist(formDetails: any): Observable<any> {
    return this._http.post(
      BLOCKCHAIN_API_END_POINT +
        "/" +
        CHAINCODE_NAME +
        "/exportProductsToPharmacist",
      formDetails,
      {
        observe: "body",
      }
    );
  }

  buyProductsFromPharmacist(formDetails: any): Observable<any> {
    return this._http.post(
      BLOCKCHAIN_API_END_POINT +
        "/" +
        CHAINCODE_NAME +
        "/buyProductsFromPharmacist",
      formDetails,
      {
        observe: "body",
      }
    );
  }
}
