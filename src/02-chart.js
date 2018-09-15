import * as d3 from 'd3'
;(function() {
  // Desired size of svg
  var height = 200
  var width = 400

  // Here is your data
  var countries = [
    {
      name: 'Blahstia',
      continent: 'North America',
      gdp: 40
    },
    {
      name: 'Bleers',
      continent: 'Europe',
      gdp: 12
    },
    {
      name: 'Blolo',
      continent: 'Antarctica',
      gdp: 35
    },
    {
      name: 'Blurben',
      continent: 'North America',
      gdp: 90
    }
  ]

  // adding some scales
  var widthScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, width])

  var colorScale = d3
    .scaleOrdinal()
    .range(['#a6611a', '#dfc27d', '#80cdc1', '#018571'])

  // Get the svg with the id of 'chart2'
  var svg = d3
    .select('#chart2')
    .attr('height', height)
    .attr('width', width)

  // Get the rectangles inside of it
  svg
    .selectAll('rect')
    .data(countries)
    .attr('height', 50)
    .attr('width', d => {
      return widthScale(d.gdp)
    })
    .attr('fill', d => {
      return colorScale(d.continent)
    })
})()
