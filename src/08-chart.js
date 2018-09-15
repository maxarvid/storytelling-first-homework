import * as d3 from 'd3'
;(function() {
  // Don't edit any of this
  var height = 50
  var width = 400

  var svg = d3
    .select('#chart8')
    .select('svg')
    .attr('height', height + 50)
    .attr('width', width)
    .select('g')
    .attr('transform', 'translate(50, 0)')

  var data = [
    { name: 'Panda', weight: 150 },
    { name: 'Cat', weight: 8 },
    { name: 'Horse', weight: 840 },
    { name: 'Pig', weight: 100 }
  ]

  // Build your scales here
  var names = data.map(function(d) {
    return d.name
  })

  var xPositionScale = d3
    .scalePoint()
    .domain(names)
    .range([0, width - 100])

  var radiusScale = d3
    .scaleSqrt()
    .domain([0, 1000])
    .range([0, 50])

  // Set your attributes here
  svg
    .selectAll('circle')
    .data(data)
    .attr('cy', (height + 50) / 2)
    .attr('cx', d => {
      return xPositionScale(d.name)
    })
    .attr('r', d => {
      return radiusScale(d.weight)
    })
})()
