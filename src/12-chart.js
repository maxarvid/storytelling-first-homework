import * as d3 from 'd3'
;(function() {
  // Build your SVG here
  // using all of that cut-and-paste magic
  var margin = {
    top: 25,
    right: 25,
    bottom: 25,
    left: 25
  }

  var width = 400 - margin.left - margin.right
  var height = 200 - margin.top - margin.bottom

  var svg = d3
    .select('#chart12')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // Build your scales here
  var xPositionScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([0, width])

  var colorScale = d3.scaleOrdinal().range(['#e66101', '#fdb863', '#b2abd2'])

  var radiusScale = d3
    .scaleSqrt()
    .domain([0, 10])
    .range([0, 50])

  d3.csv(require('./eating-data.csv'))
    .then(ready)

  function ready(datapoints) {
    // Add and style your marks here
    // Build your scales here
    // Add your circles and style them here

    svg
      .selectAll('cicle')
      .data(datapoints)
      .enter()
      .append('circle')
      .attr('cx', d => {
        return xPositionScale(d.hamburgers)
      })
      .attr('cy', height / 2)
      .attr('r', d => {
        return radiusScale(d.hotdogs)
      })
      .attr('fill', d => {
        return colorScale(d.animal)
      })
      .attr('opacity', 0.25)

    var xAxis = d3.axisBottom(xPositionScale).ticks(10)

    svg
      .append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
  }
})()
