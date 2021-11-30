


const api_url =   'https://corona.lmao.ninja/v2/continents?yesterday&sort';



async function getCovid(){
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById('NA').textContent= data[0].continent;
    document.getElementById('Asia').textContent= data[1].continent;
    document.getElementById('SA').textContent= data[2].continent;
    document.getElementById('EU').textContent= data[3].continent;
    document.getElementById('OS').textContent= data[4].continent;
    document.getElementById('Africa').textContent= data[5].continent;

    document.getElementById('ANA').textContent= data[0].active;
    document.getElementById('AAsia').textContent= data[1].active;
    document.getElementById('ASA').textContent= data[2].active;
    document.getElementById('AEU').textContent= data[3].active;
    document.getElementById('AOS').textContent= data[4].active;
    document.getElementById('AAfrica').textContent= data[5].active;

    const coviddetails =
   [{Continent: data[0].continent, Activecase: data[0].active},
    {Continent: data[1].continent, Activecase: data[1].active},
    {Continent: data[2].continent, Activecase: data[2].active},
    {Continent: data[3].continent, Activecase: data[3].active},
    {Continent: data[4].continent, Activecase: data[4].active},
    {Continent: data[5].continent, Activecase: data[5].active},];

var width = 1900, height = 1000;
var svg = d3.select("body")
.append("svg")
.attr("width",width).attr("height", height)
.style("background","#91b1c6");
var colors = d3.scaleOrdinal(d3.schemeCategory10);

var coviddata = d3.pie().sort(null).value(function(d){return d.Activecase;})(coviddetails);
console.log(coviddata);


var segments = d3.arc()
.innerRadius(0)
.outerRadius(400)
.padAngle(.05)
.padRadius(0);

var sections = svg.append("g").attr("transform","translate(600, 500)")
.selectAll("path").data(coviddata);
sections.enter().append("path").attr("d", segments).attr("fill", function (d){return colors(d.data.Activecase);});

var content = d3.select("g").selectAll("text").data(coviddata);
content.enter().append("text").classed("inside",true).each(function(d){

var center = segments.centroid(d);

d3.select(this).attr("x",center[0]).attr("y",center[1])
.text(d.data.Activecase);
});

var legends = svg.append("g")
.attr("transform","translate(1400, 200)")
.selectAll(".legends").data(coviddata);
var legend = legends.enter().append("g").classed("legends",
"true").attr("transform", function(d,i) {return "translate(0,"+ (i+1)*30 +
")";});

legend.append("rect").attr("width",20).attr("height",20).attr("fill",
function (d){return colors(d.data.Activecase);});

legend.append("text").classed("label", true).text(function(d){return d.data.Continent;})
.attr("fill",  function (d){return colors(d.data.Activecase);})
.attr("x", 30)
.attr("y",20);


}

getCovid();