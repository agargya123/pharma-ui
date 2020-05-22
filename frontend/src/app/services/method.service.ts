import { Injectable } from "@angular/core";
import { METHODS } from "../shared/methods";

@Injectable({
  providedIn: "root",
})
export class MethodService {
  constructor() {}

  getMethodByRole(role: String): String[] {
    if (role == "supplier") return METHODS.supplier;
    if (role == "manufacturer") return METHODS.manufacturer;
    if (role == "distributor") return METHODS.distributor;
    if (role == "pharmacist") return METHODS.pharmacist;

    return undefined;
  }
}
