 // 各科目平均分对比图表
 const subjectScoresCtx = document.getElementById('subjectScoresChart').getContext('2d');
 const subjectScoresChart = new Chart(subjectScoresCtx, {
     type: 'bar',
     data: {
         labels: ['语文', '数学', '英语', '物理', '化学', '生物'],
         datasets: [{
             label: '平均分',
             data: [80.5, 85.2, 86.7, 78.9, 82.3, 81.8],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.7)',
                 'rgba(54, 162, 235, 0.7)',
                 'rgba(255, 206, 86, 0.7)',
                 'rgba(75, 192, 192, 0.7)',
                 'rgba(153, 102, 255, 0.7)',
                 'rgba(255, 159, 64, 0.7)'
             ],
             borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         responsive: true,
         maintainAspectRatio: false,
         scales: {
             y: {
                 beginAtZero: false,
                 min: 60,
                 max: 100,
                 title: {
                     display: true,
                     text: '分数'
                 }
             }
         }
     }
 });
 
 // 成绩分布图表
 const scoreDistributionCtx = document.getElementById('scoreDistributionChart').getContext('2d');
 const scoreDistributionChart = new Chart(scoreDistributionCtx, {
     type: 'doughnut',
     data: {
         labels: ['90-100分 (优秀)', '80-89分 (良好)', '70-79分 (中等)', '60-69分 (及格)', '60分以下 (不及格)'],
         datasets: [{
             data: [18.2, 35.7, 31.3, 9.3, 5.5],
             backgroundColor: [
                 'rgba(75, 192, 192, 0.7)',
                 'rgba(54, 162, 235, 0.7)',
                 'rgba(255, 206, 86, 0.7)',
                 'rgba(255, 159, 64, 0.7)',
                 'rgba(255, 99, 132, 0.7)'
             ],
             borderColor: [
                 'rgba(75, 192, 192, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 99, 132, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
             legend: {
                 position: 'right',
             }
         }
     }
 });
 
 // 班级平均分趋势图表
 const classTrendCtx = document.getElementById('classTrendChart').getContext('2d');
 const classTrendChart = new Chart(classTrendCtx, {
     type: 'line',
     data: {
         labels: ['高一(1)班', '高一(2)班', '高二(1)班', '高二(2)班', '高三(1)班', '高三(2)班'],
         datasets: [{
             label: '班级平均分',
             data: [80.2, 79.8, 82.5, 83.1, 85.7, 87.3],
             fill: false,
             borderColor: 'rgb(75, 192, 192)',
             tension: 0.1,
             pointBackgroundColor: 'rgb(75, 192, 192)',
             pointRadius: 5,
             pointHoverRadius: 7
         }]
     },
     options: {
         responsive: true,
         maintainAspectRatio: false,
         scales: {
             y: {
                 beginAtZero: false,
                 min: 75,
                 max: 90,
                 title: {
                     display: true,
                     text: '平均分'
                 }
             }
         }
     }
 });
 
 // 各科目最高分与最低分图表
 const highLowCtx = document.getElementById('highLowChart').getContext('2d');
 const highLowChart = new Chart(highLowCtx, {
     type: 'radar',
     data: {
         labels: ['语文', '数学', '英语', '物理', '化学', '生物'],
         datasets: [
             {
                 label: '最高分',
                 data: [95, 98, 97, 96, 95, 94],
                 fill: true,
                 backgroundColor: 'rgba(54, 162, 235, 0.2)',
                 borderColor: 'rgb(54, 162, 235)',
                 pointBackgroundColor: 'rgb(54, 162, 235)',
                 pointBorderColor: '#fff',
                 pointHoverBackgroundColor: '#fff',
                 pointHoverBorderColor: 'rgb(54, 162, 235)'
             },
             {
                 label: '最低分',
                 data: [52, 48, 55, 45, 50, 53],
                 fill: true,
                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
                 borderColor: 'rgb(255, 99, 132)',
                 pointBackgroundColor: 'rgb(255, 99, 132)',
                 pointBorderColor: '#fff',
                 pointHoverBackgroundColor: '#fff',
                 pointHoverBorderColor: 'rgb(255, 99, 132)'
             }
         ]
     },
     options: {
         responsive: true,
         maintainAspectRatio: false,
         scales: {
             r: {
                 angleLines: {
                     display: true
                 },
                 suggestedMin: 40,
                 suggestedMax: 100
             }
         }
     }
 });