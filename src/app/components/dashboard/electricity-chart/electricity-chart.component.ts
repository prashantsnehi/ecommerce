import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { setInterval } from 'timers/promises';

@Component({
  selector: 'app-electricity-chart',
  standalone: false,
  templateUrl: './electricity-chart.component.html',
  styleUrl: './electricity-chart.component.css'
})
export class ElectricityChartComponent implements OnInit {
  title: string = 'electricity';
  piechart: any;

  ngOnInit() {
    // setTimeout(() => {
    //   console.log(this.piechart);
    // }, 300);
    this.piechart = new Chart('piecanvas', {
      type: 'pie',
      data: {
        labels: [
          'Airtel',
          'IDFC',
          'HDFC'
        ],
        datasets: [{
          label: 'Electricity',
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

  }
}
