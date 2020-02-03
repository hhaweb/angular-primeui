import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.css"]
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: "Dashboard",
        items: [
          {
            label: "Stock-Chart",
            icon: "fa fa-line-chart",
            routerLink: ["/home-dashboard"]
          },
          {
            label: "T3-Chart",
            icon: "fa fa-line-chart",
            routerLink: ["/t3-chart"]
          }
        ]
      },
      {
        label: "Produt",
        items: [
          // routerLink: ['/pagename']
          {
            label: "Product",
            icon: "fa fa-plus",
            routerLink: ["/product"]
          },
          {
            label: "Product List",
            icon: "fa fa-list",
            routerLink: ["/product-list"]
          }
        ]
      },
      {
        label: "Customer",
        items: [
          {
            label: "Customer",
            icon: "fa fa-plus",
            routerLink: ["/customer"]
          },
          {
            label: "Customer List",
            icon: "fa fa-list",
            routerLink: "/customer-list"
          }
        ]
      }
    ];
  }
}
