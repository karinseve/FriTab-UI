
   $(function(){
      var w =  $(window).width()*6.5/12;
      var data = {
        // A labels array that can contain any sort of values
        labels: ['L', 'M', 'M', 'G', 'V', 'S', 'D'],
        // Our series array that contains series objects or in this case series data arrays
        series: [
          [
            { meta: '0.46 34' , value: 600},
            { meta: '1.87 68' , value: 2450},
            { meta: '1.37 56' , value: 1800},
            { meta: '2.44 99' , value: 3200},
            { meta: '1.6  59' , value: 2100},
            { meta: '0.19 17' , value: 250},
            { meta: '4.64 148' , value: 6090}
          ]
        ],
      };

      var options = {
        height: w*(3/4),
        width: w,
        divisor: 1000,
        high: 7000,
        low: 0,
        chartPadding: {
            top: 20,
            right: 0,
            bottom: 30,
            left: 30
        },
        showArea: true,
        plugins: [
          Chartist.plugins.ctAxisTitle({
              axisX: {
                  axisTitle: 'Giorno',
                  axisClass: 'ct-axis-title',
                  offset: {
                      x: 0,
                      y: 50
                  },
                  textAnchor: 'middle'
              },
              axisY: {
                  axisTitle: 'Passi',
                  axisClass: 'ct-axis-title',
                  offset: {
                      x: 0,
                      y: -1
                  },
                  flipTitle: false
              }
          }),
          Chartist.plugins.tooltip({
            tooltipFnc : function(meta, value){
                v = meta.split(" ");
                text = 'Passi: <span class="chartist-tooltip-value">' + value + '</span>'
                       + '<br />Km: <span class="chartist-tooltip-meta">' + v[0] + '</span>'+ '<br/>Minuti: <span class="chartist-tooltip-meta">' + v[1] + '</span>' ;
                return text;
            }
          })
        ]

      };
    new Chartist.Line('.ct-chart', data, options);

    new Chartist.Pie('.ct-chart-pie', {
      series: [20, 10, 30, 40]
    }, {
              height: w*(3/4),
        width: w,

      donut: true,
      donutWidth: 80,
      donutSolid: true,
      startAngle: 240,
      showLabel: true
    });
  });
