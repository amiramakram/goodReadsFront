import { environment } from './../../../../environments/environment';
import { ApiService } from './../../../@core/api.service';
import { Component, OnInit } from '@angular/core';
import {Chart , registerables} from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-admin-chart',
  templateUrl: './admin-chart.component.html',
  styleUrls: ['./admin-chart.component.css']
})
export class AdminChartComponent  implements OnInit{

  status:Array<number>=[];

  constructor(private api:ApiService){
    for(let i=0;i<4;i++)
    {
      this.status.push(0);
    }
  }
  ngOnInit(): void {
    this.api.get(`${environment.baseUrl}/dashboard/statusReading`).subscribe(data=>{

      for(let st of data.totalStatusReading)
      {
        if(st._id=="Reading")
         this.status[0]=st.count;
         else if(st._id=="Read")
         this.status[1]=st.count;
         else if(st._id=="wantToRead")
         this.status[2]=st.count;
         else
         this.status[3]=st.count;
      }
      this.RenderChart();

    });

  }


  RenderChart()
  {
   new Chart("myChart",{
    type: 'doughnut',
    data:{
      labels: [
        'Reding',
        'Read',
        'Want To Read',
        'Not Read'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: this.status,
        backgroundColor: [
          'rgb(255, 93, 134)',
          'rgb(44, 101, 255)',
          'rgb(164, 166, 171)',
          'rgb(194, 128, 255)',

        ],
        hoverOffset: 3
      }]

    }
  });
  }

}
