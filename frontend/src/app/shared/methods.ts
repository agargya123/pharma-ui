import { FetchSaltsComponent } from "../fetch-salts/fetch-salts.component";

export const METHODS = {
  supplier: ["fetchSalts"],
  manufacturer: [
    "getRawMaterialFromSupplier",
    "manufactureDrugs",
    "shipProductsFromManufacturerToDistributor",
  ],
  distributor: [
    "receiveProductsFromManufacturerByDistributor",
    "exportProductsToPharmacist",
  ],
  pharmacist: ["buyProductsFromPharmacist"],
};

export const METHOD_COMPONENT_MAP = [
  {
    function: METHODS.supplier[0],
    component: FetchSaltsComponent,
  },
  {
    function: METHODS.manufacturer[0],
    component: FetchSaltsComponent,
  },
  {
    function: METHODS.manufacturer[1],
    component: FetchSaltsComponent,
  },
  {
    function: METHODS.manufacturer[2],
    component: FetchSaltsComponent,
  },
  {
    function: METHODS.distributor[0],
    component: FetchSaltsComponent,
  },
  {
    function: METHODS.distributor[1],
    component: FetchSaltsComponent,
  },
  {
    function: METHODS.pharmacist[0],
    component: FetchSaltsComponent,
  },
];
