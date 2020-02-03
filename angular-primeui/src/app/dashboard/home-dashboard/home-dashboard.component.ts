import {
  Component,
  OnInit,
  Input,
  ViewChild,
  SimpleChanges
} from "@angular/core";
import { SocketService } from "../../socket/socket.service";

import * as _ from "lodash";
import { Item } from "../../model/menu";

import { interval } from "rxjs";
@Component({
  selector: "app-home-dashboard",
  templateUrl: "./home-dashboard.component.html",
  styleUrls: ["./home-dashboard.component.css"]
})
export class HomeDashboardComponent implements OnInit {
  chartData: any;
  obj: Item = new Item();
  // @ViewChild("chart") chart: UIChart;
  open = {
    label: "Open",
    fill: false,
    borderColor: "#1E88E5",
    data: []
  };
  height = {
    label: "Height",
    fill: false,
    borderColor: "#99ff66",
    data: []
  };
  low = {
    label: "Low",
    fill: false,
    borderColor: "#ffcc66",
    data: []
  };
  close = {
    label: "Close",
    fill: false,
    borderColor: "#4d4d00",
    data: []
  };
  secondsCounter = interval(1000 * 60);
  subscribe: any;
  constructor(private socket: SocketService) {}
  ngOnInit(): void {
    this.getRealTimeData();
    this.subscribe = this.secondsCounter.subscribe(n => this.getRealTimeData());
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("enter ng destory");
    this.subscribe.unsubscribe(n => this.getRealTimeData());
  }

  /*  ngOnChanges(changes: SimpleChanges): void {
    if (changes.inputData.currentValue) {
      // update this.data here

      // then chart is getting updated
      setTimeout(() => {
        this.chart.reinit();
      }, 100);
    }
  } */
  updateData() {
    // this.chartData.
  }
  getRealTimeData() {
    this.obj = new Item();
    this.socket.getRealTimeData().subscribe(
      data => {
        var arr = _.values(data)[1];
        let key: string;
        for (key in arr) {
          this.obj.labels.push(key);
          let data = arr[key];
          this.open.data.push(data["1. open"]);
          this.height.data.push(data["2. high"]);
          this.low.data.push(data["3. low"]);
          this.close.data.push(data["4. close"]);
        }
        this.obj.datasets.push(this.open);
        this.obj.datasets.push(this.height);
        this.obj.datasets.push(this.low);
        this.obj.datasets.push(this.close);
        // this.chartData = [];

        this.chartData = {
          labels: this.obj.labels,
          datasets: this.obj.datasets
        };
        console.log("Data= ", this.chartData);
      },
      error => console.log(error)
    );
  }
}
