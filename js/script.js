//Setting up the chart.js
const CHART = document.getElementById('myChartBS');
console.log(CHART);
let lineChart = new Chart(CHART, {
type:'line',


data: {
  labels: ['3/3', '4/3', '5/3', '6/3', '7/3', '8/3', '9/3'], //Setting labels for xAxes
  datasets: [{
    label: 'Blood Sugar',
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(110, 143, 197)', //Setting border colour for graph
    data: [5, 11, 3, 6, 2, 16, 7]
  }]
},
options: {
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Blood Sugar (mmol/l)' //Adding label for yAxes
      },
    }],

    xAxes: [ {
      scaleLabel: {
        display: true,
        labelString: 'Date' //Setting label for xAxes
      }
    } ]
  }
}
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
