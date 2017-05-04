
   $(function(){

      var w =  $(window).width()*6.5/12;

      var tabs =  $('#dashboard-tabs').tabs({
        onShow : function(t){
          console.log(t)
        }
      });

      var data = {
        // A labels array that can contain any sort of values
        labels: ['L', 'M', 'M', 'G', 'V', 'S', 'D'],
        // Our series array that contains series objects or in this case series data arrays
        series: [{

          name: 'series-1',

          data :[
            { meta: '0.46 34' , value: 600},
            { meta: '1.87 68' , value: 2450},
            { meta: '1.37 56' , value: 1800},
            { meta: '2.44 99' , value: 3200},
            { meta: '1.6  59' , value: 2100},
            { meta: '0.19 17' , value: 250},
            { meta: '4.64 148' , value: 6090}
          ]},{

          name: 'series-2',

          data :[
            {  meta : '', value: 2000 },
            {  meta : '', value: 2000 },
            {  meta : '', value: 2000 },
            {  meta : '', value: 2000 },
            {  meta : '', value: 2000 },
            {  meta : '', value: 2000 },
            {  meta : '', value: 2000 }

          ]}
        ],
      };

      var options = {
        height: w*(3/4),
        width: w*(3/4),

        showArea: true,
        chartPadding: {
            top: 20,
            right: 0,
            bottom: 30,
            left: 30
        },
        series : {
        'series-2': {
        showPoint: false
        }},
        axisY: {
          type: Chartist.FixedScaleAxis,
          onlyInteger: true,
          divisor: 14,
          high: 7000,
          low: 0,
        },
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


    var lineChart = new Chartist.Line('.ct-chart', data, options);

lineChart.on('draw', function(data) {
  // If the draw event was triggered from drawing a point on the line chart
  if(data.type === 'point') {
    // We are creating a new path SVG element that draws a triangle around the point coordinates


    if(data.value.y >= 2000){
      console.log(data.element)

    var triangle = new Chartist.Svg('path', {
      d: ['M',
        data.x,
        data.y - 6,
        'L',
        data.x - 6,
        data.y + 3,
        'L',
        data.x + 6,
        data.y + 3,
        'z'].join(' '),
      style: 'fill-opacity: 1'
    }, 'ct-area above');
    data.element.replace(triangle);


    } else {

    var triangledown = new Chartist.Svg('path', {
      d: ['M',
        data.x,
        data.y + 6,
        'L',
        data.x + 6,
        data.y - 3,
        'L',
        data.x - 6,
        data.y - 3,
        'z'].join(' '),
      style: 'fill-opacity: 1'
    }, 'ct-area under');
    data.element.replace(triangledown);
    }

    // With data.element we get the Chartist SVG wrapper and we can replace the original point drawn by Chartist with our newly created triangle


}


  });

    lineChart.on('draw', function(data) {
  if(data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 2000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});





    new Chartist.Pie('.ct-chart-pie', {
      series: [{
        value:3400,
        name: 'Passi oggi',
        className: 'ct-a',
        meta: 'Oggi'
    }, {
        value:1800,
        name: 'Media settimana',
        className: 'ct-b',
        meta: 'Medi'
        }]
    }, {

      height: w/2,
      width: w/2,
      donut: true,
      donutWidth: 50,
      donutSolid: true,
      startAngle: 240,
      showLabel: true
    });
  });
