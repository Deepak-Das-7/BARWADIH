document.addEventListener('DOMContentLoaded', function () {
    // Chart.js
    var ctx = document.getElementById('barChart').getContext('2d');
    var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Monthly Sales',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: '#4CAF50',
                borderColor: '#4CAF50',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
