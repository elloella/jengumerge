//Setting up the chart.js
var chart_labels = ['10/3', '11/3', '12/3', '13/3', '14/3', '15/3', '16/3'];
var sugar_dataset = [5, 11, 3, 6, 2, , ];
var ctx =
document.getElementById('myChart');
document.getElementById('lowest').firstChild.data = '3.7';
document.getElementById('highest').firstChild.data = '14.3';
document.getElementById('average').firstChild.data = '6.7';

var config = {
  type:'line',
  data: {
    labels: chart_labels, //Setting labels for xAxes
    datasets: [{
      label: 'Blood Sugar',
      lineTension: 0,
      fill: false,
      borderColor: 'rgb(110, 143, 197)', //Setting border colour for graph
      data: sugar_dataset,
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false ,
          color: 'rgb(110, 143, 197)'

        },
        scaleLabel: {
          display: true,
          labelString: 'Blood Sugar (mmol/l)' //Adding label for yAxes
        },

      }],

      xAxes: [ {
        gridLines: {
          display: false ,
          color: 'rgb(110, 143, 197)'

        },
        scaleLabel: {
          display: true,
          labelString: 'Date' //Setting label for xAxes

        }
      } ]
    }
  }
};
var myChart_chart = new Chart(ctx, config);
$("#right").click(function() {
  var data = myChart_chart.config.data;
  data.datasets[0].data = sugar_dataset;
  data.labels = chart_labels;
  myChart_chart.update();
  document.getElementById('lowest').firstChild.data = '3.2';
  document.getElementById('highest').firstChild.data = '14.3';
  document.getElementById('average').firstChild.data = '6.7';

});

//Setting up second chart
$("#left").click(function() {
  var chart_labels = ['3/3', '4/3', '5/3', '6/3', '7/3', '8/3', '9/3'];
  var sugar_dataset = [10, 3, 17, 11, 13, 5, 7];
  var data = myChart_chart.config.data;
  data.datasets[0].data = sugar_dataset;
  data.labels = chart_labels;
  myChart_chart.update();
  document.getElementById('lowest').firstChild.data = '4.3';
  document.getElementById('highest').firstChild.data = '17.6';
  document.getElementById('average').firstChild.data = '8.1';
});


//Setting up second chart
$("#BS").click(function() {
  var chart_labels = ['9.00', '12.00', '18.00', '22.00',];
  var sugar_dataset = [6, 11, 3, 4,];
  var data = myChart_chart.config.data;
  data.datasets[0].data = sugar_dataset;
  data.labels = chart_labels;
  myChart_chart.update();
  document.getElementById('lowest').firstChild.data = '3.2';
  document.getElementById('highest').firstChild.data = '7.4';
  document.getElementById('average').firstChild.data = '5.2';
});

Chart.defaults.global.defaultFontColor='#253D5B'; //Setting the font colour of graph

window.onload = function() { //Setting up copyright logo
  currentYear();
};

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};
