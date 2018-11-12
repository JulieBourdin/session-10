Vue.component('multibar-chart', {
  extends: VueChartJs.HorizontalBar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["Mediterranean Migrant Crisis","Protests of Islam critical PEGIDA movement in Dresden", "Financial Crisis in Greece", "Ukraine conflict between Russia and Western Countries"],
      datasets: [
        {
          label: 'Very high trust',
          borderColor: 'darkred',
          backgroundColor: 'darkred',
          data: [0.03,0.03,0.04,0.02]
        },
        {
          label: 'High trust',
          borderColor: 'red',
          backgroundColor: 'red',
          data: [0.45,0.37,0.31,0.3]
        },
        {
          label: 'Low trust',
          borderColor: '#ff9999',
          backgroundColor: '#ff9999',
          data: [0.41,0.41,0.46,0.52]
        },
        {
          label: 'Very low trust',
          borderColor: '#ffcc99',
          backgroundColor: '#ffcc99',
          data: [0.09,0.15,0.17,0.14]
        },
        {
          label: 'No answer',
          borderColor: 'grey',
          backgroundColor: 'grey',
          data: [0.02,0.04,0.02,0.02]
        },
      ]
    };

    var options = this.options || {
      scales: {
        yAxes:  [
          {
            display: true,
            stacked:false,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            stacked:false,
            categoryPercentage: 1,
            barPercentage: 2/3
          }
        ]
      }
    };


    this.renderChart(data, options);
  }
})
