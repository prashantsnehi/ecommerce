import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-recharge-chart',
  standalone: false,
  templateUrl: './recharge-chart.component.html',
  styleUrl: './recharge-chart.component.css'
})
export class RechargeChartComponent implements OnInit {
  title: string = 'recharge';
  piechart: any;
  // labels = ['December', 'January', 'February'];
  // data = {
  //   labels: this.labels,
  //   datasets: [{
  //     label: 'My First Dataset',
  //     data: [65, 59, 80, 81, 56, 55, 40],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(255, 159, 64, 0.2)',
  //       'rgba(255, 205, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(201, 203, 207, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgb(255, 99, 132)',
  //       'rgb(255, 159, 64)',
  //       'rgb(255, 205, 86)',
  //       'rgb(75, 192, 192)',
  //       'rgb(54, 162, 235)',
  //       'rgb(153, 102, 255)',
  //       'rgb(201, 203, 207)'
  //     ],
  //     borderWidth: 1
  //   }]
  // };

  ngOnInit() {
    // this.piechart = new Chart('recharge', {
    //   type: 'bar',
    //   data: this.data,
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });

    this.piechart = new Chart('recharge', {
      type: 'doughnut',
      data: {
        labels: [
          'ShopperStop',
          'LifeStyle',
          'Croma Retail',
          'Reliance Digital',
          'Vijay Sales'
        ],
        datasets: [{
          label: 'Recharge',
          data: [300, 50, 100,30, 40],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 180, 170)',
            'rgb(154, 162, 135)',
            'rgb(155, 105, 186)'
          ],
          hoverOffset: 4
        }]
      }
    });

  }
}
