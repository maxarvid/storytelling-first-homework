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
    .select('#chart14')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // Build your scales here
  var xPositionScale = d3.scaleBand().range([0, width])

  var heightScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([height, 0])

  var colorScale = d3.scaleOrdinal().range(['#e66101', '#fdb863', '#b2abd2'])

  d3.csv('./eating-data.csv')
    .then(ready)
    .catch(function(err) {
      console.log('Failed with', err)
    })

  function ready(datapoints) {
    // Add and style your marks here
    var names = datapoints.map(d => {
      return d.name
    })

    xPositionScale.domain(names)

    svg
      .selectAll('rect')
      .data(datapoints)
      .enter()
      .append('rect')
      .attr('x', d => {
        return xPositionScale(d.name)
      })
      .attr('y', d => {
        return heightScale(d.hamburgers)
      })
      .attr('width', 50)
      .attr('height', d => {
        // console.log(heightScale(d.hamburgers))
        return height - heightScale(d.hamburgers)
      })
      .attr('fill', d => {
        return colorScale(d.animal)
      })

    var xAxis = d3.axisBottom(xPositionScale)

    svg
      .append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)

    var yAxis = d3.axisLeft(heightScale).ticks(10)

    svg
      .append('g')
      .attr('class', 'axis y-axis')
      .call(yAxis)
  }
})()
