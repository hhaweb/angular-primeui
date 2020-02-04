import { Component, OnInit, ViewChild } from "@angular/core";
import { SocketService } from "../../socket/socket.service";
import * as _ from "lodash";
import { Item } from "../../model/menu";
import { interval } from "rxjs";
import { UIChart } from "primeng/primeng";
@Component({
  selector: "app-t3-chart",
  templateUrl: "./t3-chart.component.html",
  styleUrls: ["./t3-chart.component.css"]
})
export class T3ChartComponent implements OnInit {
  @ViewChild("chart") chart: UIChart;
  data: any;
  options: any;
  obj: Item = new Item();
  dataSet = {
    label: "Triple Exponential Moving Average",
    fill: false,
    borderColor: "#1E88E5",
    data: []
  };
  secondsCounter = interval(1000 * 1000);
  subscribe: any;
  constructor(private stockSetvice: SocketService) {}

  ngOnInit(): void {
    this.getT3ChartData();
    this.options = {
      plugins: {
        datalabels: {
          align: "end",
          anchor: "end",
          borderRadius: 4,
          backgroundColor: "red",
          color: "white",
          font: {
            weight: "bold"
          }
        }
      },

      title: {
        display: true,
        text: "Triple Exponential Moving Average",
        fontSize: 16
      },
      legend: {
        position: "bottom"
      }
    };

    this.subscribe = this.secondsCounter.subscribe(n => {
      this.getT3ChartData();
      this.chart.reinit();
    });
    //this.timer();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscribe.unsubscribe(n => this.getT3ChartData());
  }
  timer() {
    const secondsCounter = interval(1000 * 10);
    // Subscribe to begin publishing values
    secondsCounter.subscribe(n => this.getT3ChartData());
  }
  getT3ChartData() {
    this.data = [];
    this.stockSetvice.getT3Data().subscribe(
      data => {
        console.log("T3 data = ", data);
        this.obj = new Item();
        this.dataSet.data = [];
        var arr = _.values(data)[1];

        let key: string;
        for (key in arr) {
          this.obj.labels.push(key);

          let data = arr[key];
          this.dataSet.data.push(data["T3"]);
          /*  this.open.data.push(data["1. open"]);
          this.height.data.push(data["2. high"]);
          this.low.data.push(data["3. low"]);
          this.close.data.push(data["4. close"]); */
        }
        this.obj.datasets.push(this.dataSet);

        this.data = {
          labels: this.obj.labels,
          datasets: this.obj.datasets
        };
      },
      error => console.log(error)
    );
  }
}
