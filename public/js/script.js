//Setting the variables for Charts
var chart_labels = ['10/3', '11/3', '12/3', '13/3', '14/3', '15/3', '16/3'];
var sugar_dataset = [5, 11, 3, 6, 2, , ];
var diastolic_dataset = [120, 115, 112, 100, 113,];
var systolic_dataset = [85, 87, 90, 75, 77, ];
var pointBackgroundColors= [];
var ctx = document.getElementById('myChart');

//Setting the data for the table
document.getElementById('lowest').firstChild.data = '3.7';
document.getElementById('highest').firstChild.data = '14.3';
document.getElementById('average').firstChild.data = '6.7';

//Setting up Blood Sugar current week chart
var config = {
  type:'line',
  data: {
    labels: chart_labels, //Setting labels for xAxes
    datasets: [{
      pointBackgroundColor: pointBackgroundColors, //Changing the colour of the graph points
      pointBorderColor: false,
      label: 'Blood Sugar', //Setting label for chart
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
          color: 'rgb(110, 143, 197)' //Setting colour of the yAxes line

        },
        scaleLabel: {
          display: true,
          labelString: 'Blood Sugar (mmol/l)' //Adding label for yAxes
        },

      }],

      xAxes: [ {
        gridLines: {
          display: false ,
          color: 'rgb(110, 143, 197)' //Setting colour of xAxes line

        },
        scaleLabel: {
          display: true,
          labelString: 'Date' //Setting label for xAxes

        }
      } ]
    }
  }
}; //Configuration for the Blood Sugar Charts
var myChart_chart = new Chart(ctx, config);
$("#bs, #right-bs").click(function() { //On click to display chart depending on user interaction with arrow buttons
  var data = myChart_chart.config.data;
  data.datasets[0].data = sugar_dataset;
  data.labels = chart_labels;
  myChart_chart.update();
  document.getElementById('lowest').firstChild.data = '3.2'; //Setting the data for the table
  document.getElementById('highest').firstChild.data = '14.3';
  document.getElementById('average').firstChild.data = '6.7';
  document.getElementById('left-bs').style.display="inline-block"; //Setting conditions for arrow buttons
  document.getElementById('right-bs').style.display="inline-block";
  document.getElementById('left-bp').style.display="none";
  document.getElementById('right-bp').style.display="none";
});

//If statement for the point colour
for (i = 0; i < myChart_chart.data.datasets[0].data.length; i++) {
  if (myChart_chart.data.datasets[0].data[i] < 4) {
    pointBackgroundColors.push("#E62828");
  } else if (myChart_chart.data.datasets[0].data[i] > 8 ) {
    pointBackgroundColors.push("#3535AE");
  } else {
    pointBackgroundColors.push("#32B928");
  }
}
myChart_chart.update();

//Setting up last week BS chart
$("#left-bs").click(function() { //On click to display chart depending on user interaction with arrow buttons
  var chart_labels = ['3/3', '4/3', '5/3', '6/3', '7/3', '8/3', '9/3']; //Setting new dates
  var sugar_dataset = [10, 3, 17, 11, 13, 5, 7]; //Setting new data
  var data = myChart_chart.config.data;
  data.datasets[0].data = sugar_dataset;
  data.labels = chart_labels;
  myChart_chart.update();
  document.getElementById('lowest').firstChild.data = '4.3'; //Setting the new table data
  document.getElementById('highest').firstChild.data = '17.6';
  document.getElementById('average').firstChild.data = '8.1';
  document.getElementById('left-bs').style.display="inline-block"; //Setting conditions for the arrow buttons
  document.getElementById('right-bs').style.display="inline-block";
  document.getElementById('left-bp').style.display="none";
  document.getElementById('right-bp').style.display="none";
});

// Setting up BP current week chart
$("#bp, #right-bp").click(function() {
  var config = {
    type:'line',
    data: {
      labels: chart_labels, //Setting labels for xAxes
      datasets: [{
        label: 'Blood Pressure',
        lineTension: 0,
        fill: false,
        borderColor: 'rgb(110, 143, 197)', //Setting border colour for graph
        data: diastolic_dataset,

      }, {
        lineTension: 0,
        fill: false,
        borderColor: 'rgb(110, 143, 197)', //Setting border colour for graph
        data: systolic_dataset,
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
            labelString: 'Blood Pressure (mmHg)' //Adding label for yAxes
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
  }; //Setting configuration for Blood Pressure chart
  var myChart_chart = new Chart(ctx, config);
  var data = myChart_chart.config.data;
  data.datasets[0].data = diastolic_dataset; //Setting up the new datasets needed
  data.datasets[1].data = systolic_dataset;
  data.labels = chart_labels;
  myChart_chart.update();
  document.getElementById('lowest').firstChild.data = '70 106'; //Setting new table data
  document.getElementById('highest').firstChild.data = '80 120';
  document.getElementById('average').firstChild.data = '75 112';
  document.getElementById('left-bs').style.display="none"; //Setting conditions for the arrow buttons
  document.getElementById('right-bs').style.display="none";
  document.getElementById('left-bp').style.display="inline-block";
  document.getElementById('right-bp').style.display="inline-block";
});

// Setting up BP current last week chart
$("#left-bp").click(function() {
  var config = {
    type:'line',
    data: {
      labels: chart_labels, //Setting labels for xAxes
      datasets: [{
        label: 'Blood Pressure',
        lineTension: 0,
        fill: false,
        borderColor: 'rgb(110, 143, 197)', //Setting border colour for graph
        data: diastolic_dataset,

      }, {
        lineTension: 0,
        fill: false,
        borderColor: 'rgb(110, 143, 197)', //Setting border colour for graph
        data: systolic_dataset,
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
            labelString: 'Blood Pressure (mmHg)' //Adding label for yAxes
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
  var data = myChart_chart.config.data;
  var diastolic_dataset = [115, 110, 112, 100, 105, 115, 120]; //Setting up new data points
  var systolic_dataset = [90, 82, 93, 70, 62, 81, 75];
  data.datasets[0].data = diastolic_dataset;
  data.datasets[1].data = systolic_dataset;
  data.labels = chart_labels;
  myChart_chart.update();
  document.getElementById('lowest').firstChild.data = '80 110'; //Setting new table data
  document.getElementById('highest').firstChild.data = '92 115';
  document.getElementById('average').firstChild.data = '79 100';
  document.getElementById('left-bs').style.display="none"; //Setting conditions for the arrow buttons
  document.getElementById('right-bs').style.display="none";
  document.getElementById('left-bp').style.display="inline-block";
  document.getElementById('right-bp').style.display="inline-block";
});

//Setting up the chat box. Sourced from - https://www.skptricks.com/2018/02/facebook-style-chat-box-popup-layout-design.html
$('.GPCHAT').click(function(){
  $('.chat').show();
  return false;
});

$('.msg_head').click(function(){ //Setting transition for the chatbox
  var chatbox
  $('.msg_wrap').slideToggle('slow');
  return false;
});

$('.exit').click(function(){ //Setting the exit button for chat box
  $('.chat').hide();
  return false;
});

$('textarea').keypress( //Setting the text area to send message on press of enter key
  function(e){
    if (e.keyCode == 13) {
      var msg = $(this).val();
      $(this).val('');
      if(msg.trim().length != 0){
        var chatbox = $(this).parents().parents().parents().attr("rel") ;
        $('<div class="msg-right">'+msg+'</div>').insertBefore('[rel="'+chatbox+'"] .msg_push');
        $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
      }
      var question = document.getElementById('msg-footer'); //Stting up the automatic response 
      document.getElementById('msg').style.display="block";
      document.getElementById('msg').style.opacity="1";
    }
  });

  Chart.defaults.global.defaultFontColor='#253D5B'; //Setting the font colour of graph

  window.onload = function() { //Setting up copyright
    currentYear();
  };
  function currentYear(){
    const date = new Date();
    const autoDate = document.querySelector('#autoDate');
    autoDate.textContent = date.getFullYear();
  };
