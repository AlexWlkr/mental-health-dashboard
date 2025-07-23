// chart 1: programs by type
const typeCtx = document.getElementById('programTypeChart').getContext('2d');
const typeLabels = ['Peer Support', 'Hotline', 'Therapy', 'Workshop'];
const typeData = [7, 2, 5, 0];
  
new Chart(typeCtx, {
type: 'bar',
 data: {
labels: typeLabels, datasets: [{
label: 'Number of Programs by Type',
 data: typeData,
  backgroundColor: '#82b1ff',
  borderColor: '#2962ff',
  borderWidth: 1    
 }]
  },
    options: {
           layout: {
    padding: 10
        },
      plugins: {
    legend: {
      display: false
    }
  },
    scales: {
      y: {
        beginAtZero: true, 
        ticks: {
          stepSize: 1 
        }
      }
    }
  }
  });

// chart 2: programs by audience
const audienceCtx = document.getElementById('audienceChart').getContext('2d');
const audienceLabels = ['Adult', 'Family', 'Youth', 'LGBTQ', 'BIPOC', 'Teens', 'Collegestudents'];
const audienceData = [4, 5, 1, 3, 0, 1, 0];

new Chart(audienceCtx, {
type: 'bar',
 data: {
labels: audienceLabels, datasets: [{
label: 'Number of Programs by Audience',
 data: audienceData,
  backgroundColor: '#ffd180',
      borderColor: '#ff6d00',
  borderWidth: 1    
 }]
  },
    options: {
         layout: {
    padding: 10
        },
      plugins: {
    legend: {
      display: false
    }
  },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  }
  });

// chart 3: programs by accessiblitity options
 const accessibilityCtx = document.getElementById('accessibilityChart').getContext('2d');
const accessibilityLabels = ['ASL ', 'Spanish', 'Virtual', 'In-Person', 'Hybrid', 'Service Animal', 'Wheelchair Access'];
const accessibilityData = [1, 1, 2, 4, 6, 0, 0];

new Chart(accessibilityCtx, {
type: 'bar',
 data: {
labels: accessibilityLabels, datasets: [{
label: 'Number of Programs by Accessibility Options',
 data: accessibilityData,
  backgroundColor: '#82b1ff',
  borderColor: '#2962ff',
  borderWidth: 1    
  }]
  },
      options: {
        indexAxis: 'y',
        layout: {
    padding: 10
        },
      plugins: {
    legend: {
      display: false
    }
  },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  }
  });