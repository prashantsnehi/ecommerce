import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-recharge-chart',
  standalone: false,
  templateUrl: './recharge-chart.component.html',
  styleUrl: './recharge-chart.component.css'
})
export class RechargeChartComponent implements OnInit {
  title: string = 'electricity';
  piechart: any;
  
  ngOnInit() {
    this.piechart = new Chart('recharge', {
          type: 'pie',
          data: {
            labels: [
              'Red',
              'Blue',
              'Yellow'
            ],
            datasets: [{
              label: 'Recharge',
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
