var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

window.addEventListener('DOMContentLoaded', event => {

  document.body.classList.add('sb-sidenav-toggled');

  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {

    sidebarToggle.addEventListener('click', event => {
      event.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
    });
  }

});


// Pie chart data and configuration
var ctx = document.getElementById('activeUsersPieChart').getContext('2d');
var activeUsersPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Active Users', 'Inactive Users', 'Trial Users'],
    datasets: [{
      label: 'User Status Breakdown',
      data: [65, 25, 10], // You can update this data dynamically
      backgroundColor: ['#3b6db3', '#2f97d3', '#93d926'],
      borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
      borderWidth: 1
    }]
  },
  options: {
    aspectRatio: 2,
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 30 // Adds space between legend and the chart
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          }
        }
      }
    }
  },
});

//bar users chart
var ctx = document.getElementById('userBreakdownChart').getContext('2d');
var userBreakdownChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Plan A', 'Plan B', 'Plan C'],  // These are your categories (the different plans or groups)
    datasets: [
      {
        label: 'Active Users',
        data: [30, 40, 60], // These are the values for Active Users in each category
        backgroundColor: '#3b6db3', // Blue color for active users
      },
      {
        label: 'Inactive Users',
        data: [20, 10, 15], // These are the values for Inactive Users in each category
        backgroundColor: '#2f97d3', // Red color for inactive users
      },
      {
        label: 'Trial Users',
        data: [15, 25, 35], // These are the values for Trial Users in each category
        backgroundColor: '#93d926', // Yellow color for trial users
      }
    ]
  },
  options: {
    aspectRatio: 2,
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        stacked: true  // Enables stacking on the X-axis (single bar with multiple segments)
      },
      y: {
        stacked: true,  // Enables stacking on the Y-axis (multiple segments on each bar)
        beginAtZero: true, // Makes sure the bar starts from zero
        title: {
          display: true,
          text: 'Number of Users'
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',  // Displays the legend at the bottom
        labels: {
          padding: 30 // Adds space between legend and the chart
        }
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ': ' + tooltipItem.raw + '%';
          }
        }
      }
    }
  }
});
// Bar Chart for User Breakdown with 4 Categories
var ctx = document.getElementById('userBreakdownChartDictation').getContext('2d');
var userBreakdownChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Plan A', 'Plan B', 'Plan C', 'Plan D'],  // Added two more categories
    datasets: [
      {
        label: 'Active Users',
        data: [30, 40, 50, 90], // Values for Active Users in each category
        backgroundColor: '#3b6db3', // Blue color for active users
      },
      {
        label: 'Inactive Users',
        data: [20, 10, 15, 25], // Values for Inactive Users in each category
        backgroundColor: '#2f97d3', // Blue color for inactive users
      }
    ]
  },
  options: {
    aspectRatio: 2,
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        stacked: true  // Enables stacking on the X-axis (single bar with multiple segments)
      },
      y: {
        stacked: true,  // Enables stacking on the Y-axis (multiple segments on each bar)
        beginAtZero: true, // Makes sure the bar starts from zero
        title: {
          display: true,
          text: 'Number of Users'
        }

      }
    },
    plugins: {
      legend: {
        position: 'bottom',  // Displays the legend at the bottom
        labels: {
          padding: 30 // Adds space between legend and the chart
        }
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ': ' + tooltipItem.raw + '%';
          }
        }
      }
    }
  }
});

// Enhanced Bar Chart for User Breakdown
var ctx = document.getElementById('dictationBreakdownChart').getContext('2d');
var userBreakdownChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Plan A', 'Plan B', 'Plan C'],  // Categories (different plans or groups)
    datasets: [
      {
        label: 'Total Users',
        data: [65, 75, 110], // Values for each plan
        backgroundColor: ['#3b6db3', '#2f97d3', '#93d926'], // Colors for each bar
        borderColor: ['#2c5b93', '#267da7', '#7cb722'], // Border colors for each bar
        borderWidth: 2 // Border width for each bar
      }
    ]
  },
  options: {
    aspectRatio: 2,
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true, // Start the chart at zero
        title: {
          display: true,
          text: 'Number of Users'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Plans'
        }
      }
    },
    plugins: {
      legend: {
        display: true, // Display the legend
        position: 'bottom', // Position legend at the bottom
        labels: {
          padding: 20, // Adds space between legend and the chart
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ': ' + tooltipItem.raw + ' users';
          }
        },
        backgroundColor: '#ffffff', // White background for tooltips
        titleColor: '#333333', // Dark title color
        bodyColor: '#333333', // Dark text color
        borderColor: '#dddddd',
        borderWidth: 1
      }
    }
  }
})



function toggleExpand(icon) {
  const row = icon.closest('tr'); // Get the current row
  const isExpanded = icon.textContent === 'keyboard_arrow_down'; // Check if the row is expanded

  row.querySelectorAll('.truncated-text').forEach(cell => {
    cell.style.display = isExpanded ? 'none' : 'inline'; // Hide truncated text when expanding (down arrow), show when collapsing (up arrow)
  });
  row.querySelectorAll('.full-text').forEach(cell => {
    cell.style.display = isExpanded ? 'inline' : 'none'; // Show full text when expanding (down arrow), hide when collapsing (up arrow)
  });

  icon.textContent = isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'; // Change icon to up or down
}

function sidebarToggle() {
  var sidebar = document.getElementById('sidebar-wrapper');
  sidebar.style.display = 'block';  // Show the sidebar

}

// Attach the function to the button click
// document.getElementById("sidebarToggle").onclick = sidebarToggle;

(function ($) {

  "use strict";

  var fullHeight = function () {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });

  };
  fullHeight();

  $('#sidebarToggle').on('click', function () {
    $('#sidebar-wrapper').toggleClass('active');
  });

})(jQuery);
