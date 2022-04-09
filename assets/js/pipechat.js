
$(function () {
  Highcharts.setOptions({
      chart: {
          style:{
                  fontFamily:'Arial, Helvetica, sans-serif', 
                  fontSize: '2em',
                  color:'#f00'
              }
      }
  });
      $('#chart1').highcharts({
          chart: {
              type: 'pie'
          },
          colors: [
             '#434349',
             '#a6eb8a',
             '#f3c59c',
             '#b82d24'
          ],
          title: {
              // text: 'Example Chart',
              style: {
                // color: '#555'
              }
          },
          legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 0,
              backgroundColor: '#FFFFFF'
          },
          xAxis: {
              categories: [
                  '2006',
                  '2007',
                  '2008',
                  '2009',
                  '2010',
                  '2011'
              ]
          },
          yAxis: {
              title: {
                  text: ''
              }
          },
          tooltip: {
              shared: false,
              valueSuffix: 'points'
          },
          credits: {
              enabled: false
          },
          plotOptions: {
              areaspline: {
                  fillOpacity: 0.1
              },
          series: {
              groupPadding: .15
          }
          },
          series: [{
          type: 'pie',
          name: 'Browser share',
          data: [
              ['IDP Camp - 6450000 MMk',       423],
              ['Scholarship - 8605500 MMk',   214],
              ['Teacher Education - 309284 MMK',    500],
              ['CDM 11588866 MMk',2341]
          ]
          }]
      });
  });

  //hide and show
 
