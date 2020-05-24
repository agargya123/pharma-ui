import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Supplier } from "../shared/supplier";
import { Manufacturer } from "../shared/manufacturer";
import { DrugBatch } from "../shared/drugBatch";
import { BLOCKCHAIN_API_END_POINT, CHAINCODE_NAME } from "./env";

@Injectable({
  providedIn: "root",
})
export class ParticipantService {
  constructor(private _http: HttpClient) {}

  getParticipant() {}

  getSaltBatchesDetails(id: string, role: string): Observable<any> {
    if (role == "supplier")
      return this._http.get<Supplier>(
        BLOCKCHAIN_API_END_POINT +
          "/" +
          CHAINCODE_NAME +
          "/getSupplierById/" +
          id,
        {
          observe: "body",
        }
      );

    return this._http.get<Manufacturer>(
      BLOCKCHAIN_API_END_POINT +
        "/" +
        CHAINCODE_NAME +
        "/getManufacturerById/" +
        id,
      {
        observe: "body",
      }
    );
  }

  getDrugBatchesDetails(id: string, role: string): Observable<any> {
    return this._http.get<DrugBatch>(
      BLOCKCHAIN_API_END_POINT +
        "/" +
        CHAINCODE_NAME +
        "/getDrugBatchByParticipant/" +
        id +
        "/" +
        role,
      {
        observe: "body",
      }
    );
  }
}
