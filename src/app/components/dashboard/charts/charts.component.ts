import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  standalone: false,
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})

export class ChartsComponent implements OnInit {
  title = 'Services';
  chart: any;
  labels: ['Dec', 'Jan', 'Feb'];

  ngOnInit() {
    this.chart = new Chart('gtv', {
          type: 'doughnut',
          data: {
            labels: [
              'Fastag',
              'GiftCards',
              'Travel'
            ],
            datasets: [{
              label: 'GTV',
              data: [300, 50, 100],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            }]
          }
        });
    // setInterval(() => {
    //   this.chart = new Chart('canvas', {
    //     type: 'bar',
    //     data: {
    //       labels: this.labels,
    //       datasets: [{
    //         label: 'My First Dataset',
    //         data: [65, 59, 80],
    //         backgroundColor: [
    //           // 'rgba(255, 99, 132, 0.2)',
    //           // 'rgba(255, 159, 64, 0.2)',
    //           // 'rgba(255, 205, 86, 0.2)',
    //           // 'rgba(75, 192, 192, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(153, 102, 255, 0.2)',
    //           'rgba(201, 203, 207, 0.2)'
    //         ],
    //         borderColor: [
    //           // 'rgb(255, 99, 132)',
    //           // 'rgb(255, 159, 64)',
    //           // 'rgb(255, 205, 86)',
    //           // 'rgb(75, 192, 192)',
    //           'rgb(54, 162, 235)',
    //           'rgb(153, 102, 255)',
    //           'rgb(201, 203, 207)'
    //         ],
    //         borderWidth: 1
    //       }]
    //     },
    //     options: {
    //       scales: {
    //         y: {
    //           beginAtZero: true
    //         }
    //       }
    //     }
    //   });
    // }, 300);
  }
}
