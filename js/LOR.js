
    var margin = {top: 10, right: 30, bottom: 30, left: 300},
    width = 1100 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;


var svG = d3.select("#LORPlot")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Create data
var LORRanksdata = [
    {
            "name": "Teddy314",
            "rank": 0,
            "lp": 936.0
        },
        {
            "name": "mic check",
            "rank": 1,
            "lp": 897.0
        },
        {
            "name": "ShogoPASS",
            "rank": 2,
            "lp": 808.0
        },
        {
            "name": "jimmylihui",
            "rank": 3,
            "lp": 747.0
        },
        {
            "name": "pokrovac",
            "rank": 4,
            "lp": 677.0
        },
        {
            "name": "Liquid Alanzq",
            "rank": 5,
            "lp": 674.0
        },
        {
            "name": "ragnarosich",
            "rank": 6,
            "lp": 655.0
        },
        {
            "name": "lorgi",
            "rank": 7,
            "lp": 652.0
        },
        {
            "name": "Gouda ddy",
            "rank": 8,
            "lp": 648.0
        },
        {
            "name": "qUaBaTcHiE",
            "rank": 9,
            "lp": 647.0
        },
        {
            "name": "Uçan Protein",
            "rank": 10,
            "lp": 643.0
        },
        {
            "name": "den",
            "rank": 11,
            "lp": 628.0
        },
        {
            "name": "jtaEU",
            "rank": 12,
            "lp": 619.0
        },
        {
            "name": "Annie Desu",
            "rank": 13,
            "lp": 617.0
        },
        {
            "name": "InBrenpunkt",
            "rank": 14,
            "lp": 608.0
        },
        {
            "name": "Gragassassinn",
            "rank": 15,
            "lp": 582.0
        },
        {
            "name": "Szychu",
            "rank": 16,
            "lp": 578.0
        },
        {
            "name": "MistAssassin",
            "rank": 17,
            "lp": 572.0
        },
        {
            "name": "Anªrchy",
            "rank": 18,
            "lp": 560.0
        },
        {
            "name": "Fly",
            "rank": 19,
            "lp": 556.0
        },
    ]


var x = d3.scaleLinear()
    .domain([0, 20])        
    .range([0, width]);     
svG
  .append('g')
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));


var y = d3.scaleLinear()
    .domain([0, 1000])        
    .range([height, 0]);       
svG
  .append('g')
  .call(d3.axisLeft(y));


svG
  .selectAll("whatever")
  .data(LORRanksdata)
  .enter()
  .append("circle")
    .attr("cx", function(d){ return x(d.rank) })
    .attr("cy", function(d){ return y(d.lp) })
    .attr("r", 7)
    .attr("fill", '#00a8e8');

   


