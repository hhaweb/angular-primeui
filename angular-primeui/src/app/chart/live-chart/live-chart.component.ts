import { Component, OnInit, ViewChild } from "@angular/core";
import { TempatureService } from "../../service/tempature.service";

import { Item } from "../../model/menu";
import { interval } from "rxjs";
import { UIChart } from "primeng/primeng";
@Component({
  selector: "app-live-chart",
  templateUrl: "./live-chart.component.html",
  styleUrls: ["./live-chart.component.css"]
})
export class LiveChartComponent implements OnInit {
  @ViewChild("chart") chart: UIChart;

  data: any;
  options: any;
  tempData: any;
  dataCount: number;
  dataSet = {
    label: "Triple Exponential Moving Average",
    fill: false,
    borderColor: "#1E88E5",
    data: []
  };
  secondsCounter = interval(1000 * 10);
  subscribe: any;
  obj: Item = new Item();
  constructor(private tempatureService: TempatureService) {}

  ngOnInit(): void {
    this.getTempature();
    this.subscribe = this.secondsCounter.subscribe(n => {
      this.getUpdateTempature();
      //this.chart.reinit();
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscribe.unsubscribe(n => this.getUpdateTempature());
  }

  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach(dataset => {
      dataset.data.push(data);
    });
    chart.update();
  }

  updateChart() {
    this.chart.options = {
      responsive: true,
      title: {
        display: true,
        text: "Chart.js"
      },
      scales: {
        xAxes: [{ type: "time", display: true }],
        yAxes: [
          {
            display: true
          }
        ]
      }
    };
    this.chart.chart.update();
  }

  getUpdateTempature() {
    this.tempatureService
      .getLatestTempatureData(this.dataCount)
      .subscribe(data => {
        console.log("enter update", data);
        if (data != null) {
          this.dataCount = this.dataCount + data.length;
          console.log("enter update", this.data);
          if (data.length > 0) {
            console.log("enter update before loop", this.data);
            d: new Array();
            data.forEach(element => {
              this.data.labels.push(element.time);
              this.data.datasets[0].data.push(element.temp);
            });
            this.chart.chart.update();
          }
        }
      });
  }

  getTempature() {
    this.tempatureService.getTempatureData().subscribe(
      data => {
        this.dataCount = data.length;
        console.log("enter initial", this.dataCount);
        this.obj = new Item();
        this.dataSet.data = [];

        for (let x in data) {
          this.obj.labels.push(data[x].time);
          this.dataSet.data.push(data[x].temp);
        }
        this.obj.datasets.push(this.dataSet);
        this.data = {
          labels: this.obj.labels,
          datasets: this.obj.datasets
        };
        console.log("Initial data", this.data);
      },
      error => console.log(error)
    );
  }
}
