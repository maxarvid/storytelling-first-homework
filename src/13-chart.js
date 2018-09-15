import * as d3 from 'd3'
;(function() {
  // Build your SVG here
  // using all of that cut-and-paste magic
  var margin = {
    top: 25,
    right: 25,
    bottom: 25,
    left: 60
  }

  var width = 400 - margin.left - margin.right
  var height = 500 - margin.top - margin.bottom

  var svg = d3
    .select('#chart13')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // Build your scales here
  var yPositionScale = d3.scaleBand().range([height, 0])

  var widthScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([0, width])

  var colorScale = d3.scaleOrdinal().range(['#e66101', '#fdb863', '#b2abd2'])

  d3.csv(require('./eating-data.csv'))
    .then(ready)

  function ready(datapoints) {
    // Add and style your marks here
    var names = datapoints.map(d => {
      return d.name
    })

    yPositionScale.domain(names)

    svg
      .selectAll('rect')
      .data(datapoints)
      .enter()
      .append('rect')
      .attr('height', 50)
      .attr('width', d => {
        return widthScale(d.hamburgers)
      })
      .attr('y', d => {
        return yPositionScale(d.name)
      })
      .attr('x', 0)
      .attr('fill', d => {
        return colorScale(d.animal)
      })

    var yAxis = d3.axisLeft(yPositionScale)

    svg
      .append('g')
      .attr('class', 'axis y-axis')
      .call(yAxis)

    var xAxis = d3.axisBottom(widthScale).ticks(10)

    svg
      .append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
  }
})()
