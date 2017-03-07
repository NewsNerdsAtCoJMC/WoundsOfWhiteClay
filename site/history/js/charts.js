google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
      // Define the chart to be drawn.
      var data = google.visualization.arrayToDataTable([
         ['Country', 'Life Expectancy', { role: 'style' }],
         ['Pine Ridge', 47, 'crimson'],
         ['Sierra Leone', 49.3, 'gold'], 
         ['Angola', 50.9, 'gold'],
         ['Central African Republic', 50.9, 'gold'],
         ['Chad', 51.7, 'gold'],
         ['Lesotho', 51.7, 'gold'],
         ["Cote d'Ivoire", 52.3, 'gold'],
         ['Nigeria', 53.4, 'gold'],
         ['Somalia', 53.5, 'gold'],
         ['Mozambique', 55.7, 'gold']
      ]);
    
    // Set chart options.
    var options = {
        'title': 'Male Life Expectancy, Bottom 10 Countries',
        'width':500,
        'height':500
    }

      // Instantiate and draw the chart.
      var chart = new google.visualization.ColumnChart(document.getElementById('male'));
      chart.draw(data, options);
    }