
let myChart= null;

var data= [0.9,	-0.8, 0.2, -0.6, 0.6];
var labels= ["09:45:23", "09:45:23", "09:45:23", "09:45:23", "09:45:23"];

var data1= [0.9, -0.8, 0.2, -0.6, 0.6, 0.9];
var labels1= ["09:45:23", "09:45:23", "09:45:23", "09:45:23", "09:45:23", "09:45:23"];

// setInterval(update_data, 3000);
config= {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
              label: 'machine learning chart',
              data: data,
            },
          ]
    }
}

function update_data(){
    alert("update_data")
    window.myLine.data.datasets[0].data = data;
    window.myLine.data.datasets[0].labels = labels;
}


window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};


function add () {
    config.data.datasets.label= data;
    config.data.datasets.labels= labels;


    window.myLine.update();
};



