import { FetchSaltsComponent } from "../fetch-salts/fetch-salts.component";
import { ManufactureDrugsComponent} from "../manufacture-drugs/manufacture-drugs.component";
import { GetRawMaterialFromSupplierComponent} from "../get-raw-material-from-supplier/get-raw-material-from-supplier.component";
import { ShipProductsFromManufacturerToDistributorComponent} from "../ship-products-from-manufacturer-to-distributor/ship-products-from-manufacturer-to-distributor.component";
import { ReceiveProductsFromManufacturerByDistributorComponent} from "../receive-products-from-manufacturer-by-distributor/receive-products-from-manufacturer-by-distributor.component";
import { ExportProductsToPharmacistComponent } from "../export-products-to-pharmacist/export-products-to-pharmacist.component";
import { BuyProductsFromPharmacistComponent} from "../buy-products-from-pharmacist/buy-products-from-pharmacist.component";
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
    component: GetRawMaterialFromSupplierComponent,
  },
  {
    function: METHODS.manufacturer[1],
    component: ManufactureDrugsComponent,
  },
  {
    function: METHODS.manufacturer[2],
    component: ShipProductsFromManufacturerToDistributorComponent,
  },
  {
    function: METHODS.distributor[0],
    component: ReceiveProductsFromManufacturerByDistributorComponent,
  },
  {
    function: METHODS.distributor[1],
    component: ExportProductsToPharmacistComponent,
  },
  {
    function: METHODS.pharmacist[0],
    component: BuyProductsFromPharmacistComponent,
  },
];
