// Class Profile Visualization Charts

// Industry Background Chart
const industryCtx = document.getElementById('industryChart');
if (industryCtx) {
  new Chart(industryCtx, {
    type: 'doughnut',
    data: {
      labels: ['Technology', 'Finance', 'Manufacturing', 'Consulting', 'Healthcare', 'Other'],
      datasets: [{
        data: [25, 20, 18, 15, 12, 10],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ],
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            font: {
              size: 12
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.label + ': ' + context.parsed + '%';
            }
          }
        }
      }
    }
  });
}

// Geographic Distribution Chart
const geographyCtx = document.getElementById('geographyChart');
if (geographyCtx) {
  new Chart(geographyCtx, {
    type: 'bar',
    data: {
      labels: ['Taiwan', 'China', 'SE Asia', 'India', 'Japan', 'Other'],
      datasets: [{
        label: 'Number of Students',
        data: [16, 8, 7, 5, 4, 5],
        backgroundColor: '#36A2EB',
        borderColor: '#2186c4',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 2
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return 'Students: ' + context.parsed.y;
            }
          }
        }
      }
    }
  });
}

// Work Experience Chart
const experienceCtx = document.getElementById('experienceChart');
if (experienceCtx) {
  new Chart(experienceCtx, {
    type: 'pie',
    data: {
      labels: ['0-2 years', '3-5 years', '6-8 years', '9+ years'],
      datasets: [{
        data: [15, 40, 30, 15],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0'
        ],
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            font: {
              size: 12
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.label + ': ' + context.parsed + '%';
            }
          }
        }
      }
    }
  });
}
