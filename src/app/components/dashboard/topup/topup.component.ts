import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-topup',
  standalone: false,
  templateUrl: './topup.component.html',
  styleUrl: './topup.component.css'
})
export class TopupComponent implements OnInit {
  title = 'Top Up';
  labels = ['December', 'January', 'February'];
  barchart: any;
  data = {
    labels: this.labels,
    datasets: [{
      label: 'Months',
      data: [65, 59, 80, 81],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)'
      ],
      borderWidth: 1
    }]
  };

  ngOnInit() {
    this.barchart = new Chart('topup', {
      type: 'bar',
      data: this.data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })

  }

}
