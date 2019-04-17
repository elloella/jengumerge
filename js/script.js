
const CHART = document.getElementById('myChart');
console.log(CHART);
let lineChart = new Chart(CHART, {
  type:'line',

  data: {
       labels: ['3/3', '4/3', '5/3', '6/3', '7/3', '8/3', '9/3'],
       datasets: [{
           label: 'Blood Pressure',
            lineTension: 0,
            fill: false,
           borderColor: 'rgb(110, 143, 197)',
           data: [5, 11, 3, 6, 2, 16, 7]
       }]
   },

   options: {
     scales: {
       yAxes: [{
         scaleLabel: {
           display: true,
           labelString: 'Blood Sugar (mmol/l)'
         },
       }],

       xAxes: [ {
         scaleLabel: {
           display: true,
           labelString: 'Date'
         }
       } ]
     }
    }
});

Chart.defaults.global.defaultFontColor='#253D5B';

window.onload = function() {
  currentYear();
};

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};
