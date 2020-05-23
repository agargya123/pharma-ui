import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RoutingModule } from "./routing/routing.module";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { HeaderComponent } from "./header/header.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from "./home/home.component";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from "@angular/common/http";
import { LoginService } from "./services/login.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FetchSaltsComponent } from './fetch-salts/fetch-salts.component';
import { ManufactureDrugsComponent } from './manufacture-drugs/manufacture-drugs.component';
import { ManutodistformComponent } from './manutodistform/manutodistform.component';
import { ManubyDistFormComponent } from './manuby-dist-form/manuby-dist-form.component';
import { ExportProductsToPharmacistComponent } from './export-products-to-pharmacist/export-products-to-pharmacist.component';
import { BuyProductsFromPharmacistComponent } from './buy-products-from-pharmacist/buy-products-from-pharmacist.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    FetchSaltsComponent,
    ManufactureDrugsComponent,
    ManutodistformComponent,
    ManubyDistFormComponent,
    ExportProductsToPharmacistComponent,
    BuyProductsFromPharmacistComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
    RoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
   
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
