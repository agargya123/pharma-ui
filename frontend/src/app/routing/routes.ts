import { Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { HomeComponent } from "../home/home.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { FetchSaltsComponent } from "../fetch-salts/fetch-salts.component";

import { ManufactureDrugsComponent } from "../manufacture-drugs/manufacture-drugs.component";
import { GetRawMaterialFromSupplierComponent } from "../get-raw-material-from-supplier/get-raw-material-from-supplier.component";
import { ShipProductsFromManufacturerToDistributorComponent } from "../ship-products-from-manufacturer-to-distributor/ship-products-from-manufacturer-to-distributor.component";
import { ReceiveProductsFromManufacturerByDistributorComponent } from "../receive-products-from-manufacturer-by-distributor/receive-products-from-manufacturer-by-distributor.component";
import { ExportProductsToPharmacistComponent } from "../export-products-to-pharmacist/export-products-to-pharmacist.component";
import { BuyProductsFromPharmacistComponent } from "../buy-products-from-pharmacist/buy-products-from-pharmacist.component";
import { TimelineComponent } from "../timeline/timeline.component";
import { SaltListComponent } from "../salt-list/salt-list.component";
import { DrugBatchListComponent } from "../drug-batch-list/drug-batch-list.component";
import { DashboardWelcomeComponent } from "../dashboard-welcome/dashboard-welcome.component";
import { SearchDrugHistComponent } from "../search-drug-hist/search-drug-hist.component";
import { TransactionsComponent } from "../transactions/transactions.component";
import { DrugSoldComponent } from "../drug-sold/drug-sold.component";
export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", component: DashboardWelcomeComponent },
      { path: "salts", component: SaltListComponent },
      { path: "drug-batch", component: DrugBatchListComponent },
      {
        path: "drug-sold",
        component: DrugSoldComponent,
      },
    ],
  },

  { path: "fetchsalts", component: FetchSaltsComponent },
  { path: "getrawmaterial", component: GetRawMaterialFromSupplierComponent },
  { path: "manufacturedrugs", component: ManufactureDrugsComponent },
  {
    path: "manutodist",
    component: ShipProductsFromManufacturerToDistributorComponent,
  },
  {
    path: "manubydist",
    component: ReceiveProductsFromManufacturerByDistributorComponent,
  },
  { path: "exporttopharm", component: ExportProductsToPharmacistComponent },
  { path: "buyfrompharma", component: BuyProductsFromPharmacistComponent },
  { path: "timeline", component: TimelineComponent },
  { path: "drugHistory", component: SearchDrugHistComponent },
  { path: "allTransactions", component: TransactionsComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" },
];
