import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AccordionModule } from "primeng/accordion"; //accordion and accordion tab
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

//prime ui import========
import { MenuModule } from "primeng/menu";
import { MenubarModule } from "primeng/menubar";
import { PanelModule } from "primeng/panel";
import { ButtonModule } from "primeng/button";
import { RadioButtonModule } from "primeng/radiobutton";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ChartModule } from "primeng/chart";
//prime ui import========
import { AppComponent } from "./app.component";
import { MenuBarComponent } from "./common/menu-bar/menu-bar.component";
import { ProductComponent } from "./page/product/product.component";
import { ProductListComponent } from "./page/product-list/product-list.component";
import { CustomerComponent } from "./page/customer/customer.component";
import { CustomerListComponent } from "./page/customer-list/customer-list.component";
import { HomeDashboardComponent } from "./dashboard/home-dashboard/home-dashboard.component";
import { StockChartComponent } from "./chart/stock-chart/stock-chart.component";
import { T3ChartComponent } from "./chart/t3-chart/t3-chart.component";

const appRouter: Routes = [
  {
    path: "t3-chart",
    component: T3ChartComponent
  },
  {
    path: "home-dashboard",
    component: HomeDashboardComponent
  },
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "produt/:productId",
    component: ProductComponent
  },
  {
    path: "product-list",
    component: ProductListComponent
  },
  {
    path: "customer",
    component: CustomerComponent
  },
  {
    path: "customer-list",
    component: CustomerListComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ProductComponent,
    ProductListComponent,
    CustomerComponent,
    CustomerListComponent,
    HomeDashboardComponent,
    StockChartComponent,
    T3ChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter),
    HttpClientModule,
    //Primeng UI
    AccordionModule,
    MenuModule,
    MenubarModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    CardModule,
    InputTextModule,
    ChartModule
    //Primeng UI
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
