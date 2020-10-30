// setInterval(count, 1000);

cnt= 0;
function count(){
    cnt = cnt + 1;
    console.log(cnt);
    add()
}

function add(){
    var data= [0.9,	-0.8, 0.2, -0.6, 0.6, 0.9,	-0.8, 0.2, -0.6, 0.6];
    var labels= ["09:45:23", "09:45:23", "09:45:23", "09:45:23", "09:45:23", "09:45:23", "09:45:23", "09:45:23", "09:45:23", "09:45:23"];
    
    i= cnt;
    updateChart(data.slice(i, i+5), labels.slice(i, i+5));
}

function updateChart (data, labels) {
    window.myChart.data.labels= labels;
    window.myChart.data.datasets[0].data= data;
    window.myChart.update();
};

window.onload = function() {   
    var canvas = document.getElementById("canvas");  
    var ctx = canvas.getContext("2d");  

    maxValueYPixel= 200;
    minValueYPixel= 130;
    var gradient = ctx.createLinearGradient(0, maxValueYPixel, 0, minValueYPixel);//0 200 0 130
    gradient.addColorStop(0, 'green');
    gradient.addColorStop(1, 'red');

    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Machine Learning',
                data: [], 
                fill: false,
                borderColor: '#2196f3', 
                backgroundColor: '#2196f3', 
                borderWidth: 1,
                borderColor: gradient,
            }]},
        options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                  ticks: {
                    suggestedMin: -1,
                    suggestedMax: 1,
                  },
                }],

              }
        }
    });

   
};