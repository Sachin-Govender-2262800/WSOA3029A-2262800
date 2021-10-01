const tempapi_url = 'http://ddragon.leagueoflegends.com/cdn/9.18.1/data/en_US/champion.json';
async function getTemp() {
const response = await fetch(tempapi_url);
const data = await response.json();
console.log(data.data);
document.getElementById('temp').textContent = data.data;
}


getTemp();


/*
const tempapi_url = 'https://api.open-meteo.com/v1/forecast?latitude=-26.12&longitude=27.91&hourly=temperature_2m&timezone=Africa%2FCairo';
async function getTemp() {
const response = await fetch(tempapi_url);
const data = await response.json();
console.log(data.hourly.temperature_2m);
console.log(data.hourly.time);
document.getElementById('temp').textContent = data.hourly.temperature_2m;
document.getElementById('time').textContent = data.hourly.time;
}


getTemp();
*/

/*const tempapi = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01';


document.addEventListener("DOMContentLoaded", function(event){
    fetch(tempapi)
    .then(function(response){ return response.json();})
    .then(function(data){
        var parsedData = parseData(data);
        drawChart(parsedData);
    })
    .catch(function(err){console.log(err);})
});



function parseData(data){
    var arr = [];
    for (var i in data.bpi){
        arr.push({
            date: new Date(i),
            value: +date.bpi[i]
        });
    }
    return arr;
}


function drawChart(data) {
    var svgWidth = 600, svgHeight = 400;
    var margin = {top: 20, right: 20, bottom:30, left:50};
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;


    var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

    var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top +")");


    var x =d3.scaleTime()
    .rangeRound([0, width]);

    var y = d3.scaleLinear()
    .rangeRound([height, 0]);


    var line = d3.line()
    .x(function(d) {return x(d.date)})
    .y(function(d){ return y(d.value)})
    x.domain(d3.extent(data, function(d){return d.date}));
    y.domain(d3.extent(data, function(d){return d.value}));

g.append("g")
.attr("transform","translate(0," +height + ")")
.call(d3.axisBottom(x))
.select(".domain")
.remove();


g.append("g")
.call(d3.axisLeft(y))
.append("text")
.attr("fill", "#000")
.attr("transform", "rotate(-90)")
attr("y", 6)
.attr("dy", "0.71em")
.attr("text-anchor", "end")
.text("Price ($)");

g.append("path")
.datum(data)
.attr("fill", "none")
.attr("stroke", "steelblue")
.attr("stroke-linejoin", "round")
.attr("stroke-linecap", "round")
.attr("stroke-width", 1.5)
.attr("d", line);





}*/





