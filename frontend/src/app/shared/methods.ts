import { FetchSaltsComponent } from "../fetch-salts/fetch-salts.component";
import { ManufactureDrugsComponent } from "../manufacture-drugs/manufacture-drugs.component";
import { GetRawMaterialFromSupplierComponent } from "../get-raw-material-from-supplier/get-raw-material-from-supplier.component";
import { ShipProductsFromManufacturerToDistributorComponent } from "../ship-products-from-manufacturer-to-distributor/ship-products-from-manufacturer-to-distributor.component";
import { ReceiveProductsFromManufacturerByDistributorComponent } from "../receive-products-from-manufacturer-by-distributor/receive-products-from-manufacturer-by-distributor.component";
import { ExportProductsToPharmacistComponent } from "../export-products-to-pharmacist/export-products-to-pharmacist.component";
import { BuyProductsFromPharmacistComponent } from "../buy-products-from-pharmacist/buy-products-from-pharmacist.component";

export const METHODS = {
  supplier: [{ function: "fetchSalts", name: "Get/Grow Salts" }],
  manufacturer: [
    {
      function: "getRawMaterialFromSupplier",
      name: "Order Raw Material from Supplier",
    },
    { function: "manufactureDrugs", name: "Process and Manufacture Drugs" },
    {
      function: "shipProductsFromManufacturerToDistributor",
      name: "Ship Products to Distributor",
    },
  ],
  distributor: [
    {
      function: "receiveProductsFromManufacturerByDistributor",
      name: "Receive the shipped items",
    },
    {
      function: "exportProductsToPharmacist",
      name: "Export Products to Pharmacist",
    },
  ],
  pharmacist: [
    { function: "buyProductsFromPharmacist", name: "Sell to Customer" },
  ],
};

export const METHOD_COMPONENT_MAP = [
  {
    function: METHODS.supplier[0].function,
    component: FetchSaltsComponent,
  },
  {
    function: METHODS.manufacturer[0].function,
    component: GetRawMaterialFromSupplierComponent,
  },
  {
    function: METHODS.manufacturer[1].function,
    component: ManufactureDrugsComponent,
  },
  {
    function: METHODS.manufacturer[2].function,
    component: ShipProductsFromManufacturerToDistributorComponent,
  },
  {
    function: METHODS.distributor[0].function,
    component: ReceiveProductsFromManufacturerByDistributorComponent,
  },
  {
    function: METHODS.distributor[1].function,
    component: ExportProductsToPharmacistComponent,
  },
  {
    function: METHODS.pharmacist[0].function,
    component: BuyProductsFromPharmacistComponent,
  },
];
