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
  var height = 400 - margin.top - margin.bottom

  var svg = d3
    .select('#chart10')
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

  var yPositionScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([height, 0])

  d3.csv(require('./eating-data.csv'))
    .then(ready)

  function ready(datapoints) {
    // Add and style your marks here
    // console.log('Data is', datapoints)

    svg
      .selectAll('circle')
      .data(datapoints)
      .enter()
      .append('circle')
      .attr('cx', d => {
        return xPositionScale(d.hamburgers)
      })
      .attr('cy', d => {
        return yPositionScale(d.hotdogs)
      })
      .attr('r', 5)
      .attr('fill', '#FFB6C1')

    var yAxis = d3.axisLeft(yPositionScale).ticks(10)

    svg
      .append('g')
      .attr('class', 'axis y-axis')
      .call(yAxis)

    var xAxis = d3.axisBottom(xPositionScale).ticks(10)

    svg
      .append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
  }
})()
