import { Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { HomeComponent } from "../home/home.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { FetchSaltsComponent } from "../fetch-salts/fetch-salts.component";
import { ManufactureDrugsComponent } from "../manufacture-drugs/manufacture-drugs.component";
import { ManutodistformComponent } from "../manutodistform/manutodistform.component";
import { ManubyDistFormComponent } from "../manuby-dist-form/manuby-dist-form.component";
import { ExportProductsToPharmacistComponent } from "../export-products-to-pharmacist/export-products-to-pharmacist.component";
import { BuyProductsFromPharmacistComponent } from "../buy-products-from-pharmacist/buy-products-from-pharmacist.component";
//import { TimelineComponent } from "../timeline/timeline.component";
import { SaltListComponent } from "../salt-list/salt-list.component";
import { DrugBatchListComponent } from "../drug-batch-list/drug-batch-list.component";
import { TimelineComponent } from "../timeline/timeline.component";

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "salts", component: SaltListComponent },
      { path: "drug-batch", component: DrugBatchListComponent },
    ],
  },

  { path: "fetchsalts", component: FetchSaltsComponent },
  { path: "manufacturedrugs", component: ManufactureDrugsComponent },
  { path: "manutodist", component: ManutodistformComponent },
  { path: "manubydist", component: ManubyDistFormComponent },
  { path: "exporttopharm", component: ExportProductsToPharmacistComponent },
  { path: "buyfrompharma", component: BuyProductsFromPharmacistComponent },
  { path: "timeline", component: TimelineComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" },
];
