import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import { UIChart } from "primeng/primeng";
import { ThrowStmt } from "@angular/compiler";
@Component({
  selector: "app-stock-chart",
  templateUrl: "./stock-chart.component.html",
  styleUrls: ["./stock-chart.component.css"]
})
export class StockChartComponent implements OnInit {
  @Input() chartData: any;
  @ViewChild("chart") chart: UIChart;
  data: any;
  constructor() {}

  ngOnInit(): void {
    this.data = this.chartData;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.chartData.currentValue) {
      console.log("enter===", changes.chartData.currentValue);
      this.data = this.chartData;

      setTimeout(() => {
        this.chart.reinit();
      }, 100);
    }
  }
}
