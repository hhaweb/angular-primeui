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
  options: any;
  constructor() {}

  ngOnInit(): void {
    this.data = this.chartData;
    this.options = {
      title: {
        display: true,
        text: "Example Line Chart",
        fontSize: 16
      },
      legend: {
        position: "right"
      },
      scales: {
        xAxes: [
          {
            ticks: {
              autoSkip: true,
              interval: 3,
              intervalType: "tune"
            }
          }
        ]
      }
    };
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
