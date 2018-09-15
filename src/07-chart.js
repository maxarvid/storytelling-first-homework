import * as d3 from 'd3'
;(function() {
  // Delete this line, redo it.
  var margin = 50
  var height = 200 - margin - margin
  var width = 400 - margin - margin

  var svg = d3
    .select('#chart7')
    .append('svg')
    .attr('height', height + margin * 2)
    .attr('width', width + margin * 2)
    .append('g')
    .attr('transform', 'translate(' + margin + ',' + margin + ')')

  // DO NOT CHANGE THIS SECTION
  svg
    .append('rect')
    .attr('height', 100)
    .attr('width', 300)
    .attr('x', 0)
    .attr('y', 0)
  // DO NOT CHANGE THIS SECTION
})()
