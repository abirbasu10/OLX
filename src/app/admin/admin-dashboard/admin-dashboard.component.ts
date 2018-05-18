import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { VerifyCompanyDocument } from '../../classDefinition';
import { VERIFYCOMPANYDOCUMENT } from '../../application_mock_Data';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }
  documentsReceived : boolean = false
  listOfDocRec = VERIFYCOMPANYDOCUMENT
  isDocumentReceived(){
    if(VERIFYCOMPANYDOCUMENT.length >= 1)
    {
      this.documentsReceived = true
    }

    //return this.documentsReceived
  }

  getDocumentReceived(){
    var docArr=[]
    if(this.documentsReceived)
    {
      for( let doc of VERIFYCOMPANYDOCUMENT)
      {
        docArr.push({name:doc.name,status:doc.status})
      }
    }
    return docArr;
  }

  acceptDocument(doc){
    doc.status = true
    for( let doc of VERIFYCOMPANYDOCUMENT)
    {
     doc.status= true
    }
    
  }
  rejectDocument(doc){
    doc.status = false
    for( let doc of VERIFYCOMPANYDOCUMENT)
    {
     doc.status= false
    }
    VERIFYCOMPANYDOCUMENT.pop()
  }
  ngOnInit() {

    this.isDocumentReceived();
    this.listOfDocRec = this.getDocumentReceived();
    const dataDailySalesChart: any = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [
          [12, 17, 7, 17, 23, 18, 38]
      ]
  };

  const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
      }),
      low: 0,
      high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
  }

  var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

  this.startAnimationForLineChart(dailySalesChart);



    /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

    const dataCompletedTasksChart: any = {
      labels: ['Jurong Port', 'Singapore Port', 'Mumbai Port', 'Kolkata Port', 'Chennai Port'],
      series: [
          [2300, 7500, 4500, 3000, 2800]
      ]
  };

  const optionsCompletedTasksChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
      }),
      low: 0,
      high: 10000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
  }

  var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

  // start animation for the Completed Tasks Chart - Line Chart
  this.startAnimationForLineChart(completedTasksChart);


    /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

    var dataEmailsSubscriptionChart = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [5420, 4430, 3200, 7800, 0, 0, 0, 0, 0, 0, 0, 0]

      ]
    };
    var optionsEmailsSubscriptionChart = {
        axisX: {
            showGrid: false
        },
        low: 0,
        high: 10000,
        chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
    };
    var responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        } 
      }]
    ];
    var emailsSubscriptionChart = new Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

    //start animation for the Emails Subscription Chart
    this.startAnimationForBarChart(emailsSubscriptionChart);
  }



  startAnimationForLineChart(chart){
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if(data.type === 'point') {
            seq++;
            data.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
    });

    seq = 0;
  };

  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };


}
