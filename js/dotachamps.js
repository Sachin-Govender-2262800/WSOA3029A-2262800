
  
const Dota_DATA =  [
    {
        "team_id": 15,
        "rating": 1598.17,
        "wins": 1460,
        "losses": 898,
        "last_match_time": 1634489786,
        "name": "PSG.LGD",
        "tag": "PSG.LGD",
        "logo_url": "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/15.png"
    },
    {
        "team_id": 7119388,
        "rating": 1552.19,
        "wins": 195,
        "losses": 168,
        "last_match_time": 1634489786,
        "name": "Team Spirit",
        "tag": "TSpirit",
        "logo_url": "https://steamusercontent-a.akamaihd.net/ugc/1773822957617535601/F40F2155B92321415E972B787C5B1B0FFF06155A/"
    },
    {
        "team_id": 1883502,
        "rating": 1453.09,
        "wins": 1343,
        "losses": 994,
        "last_match_time": 1634312899,
        "name": "Virtus.pro",
        "tag": "VP",
        "logo_url": "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/1883502.png"
    },
    {
        "team_id": 5228654,
        "rating": 1450.04,
        "wins": 79,
        "losses": 36,
        "last_match_time": 1535061995,
        "name": "VGJ Storm",
        "tag": "VGJ.Storm",
        "logo_url": "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/5228654.png"
    }, {
        "team_id": 5,
        "rating": 1447.42,
        "wins": 1260,
        "losses": 914,
        "last_match_time": 1634392175,
        "name": "INVICTUS GAMING",
        "tag": "IG",
        "logo_url": "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/5.png"
    },
    {
        "team_id": 8214850,
        "rating": 1411.05,
        "wins": 97,
        "losses": 78,
        "last_match_time": 1634299470,
        "name": "T1",
        "tag": "T1",
        "logo_url": "https://steamusercontent-a.akamaihd.net/ugc/1658977260140178019/F5E6186EC7A4E3E2568A66055529ABBE78D8DE67/"
    },
    {
        "team_id": 8291895,
        "rating": 1405.79,
        "wins": 58,
        "losses": 40,
        "last_match_time": 1631208003,
        "name": "Tundra Esports ",
        "tag": "Tundra",
        "logo_url": "https://steamusercontent-a.akamaihd.net/ugc/1771573722041415896/D98163DE6281550D35494CEFDF6257F9716BD43B/"
    },
    {
        "team_id": 8121295,
        "rating": 1403.61,
        "wins": 37,
        "losses": 9,
        "last_match_time": 1603906271,
        "name": "mudgolems",
        "tag": ".",
        "logo_url": "https://steamusercontent-a.akamaihd.net/ugc/1635325934676609507/8E073AB63209CE73BD08E056B1C6CCE1014B3890/"
    },
    {
        "team_id": 3214108,
        "rating": 1401.12,
        "wins": 136,
        "losses": 90,
        "last_match_time": 1498631388,
        "name": "Team NP",
        "tag": "NP",
        "logo_url": "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/3214108.png"
    },
    {
        "team_id": 2519319,
        "rating": 1389,
        "wins": 45,
        "losses": 16,
        "last_match_time": 1445985009,
        "name": "(monkey) Business",
        "tag": "(monkey)",
        "logo_url": "https://steamusercontent-a.akamaihd.net/ugc/383162071968605685/B670804CDB13F184D122ACBB8F75E2DB2C959CAF/"
    }];




  const margin = {top: 10, bottom: 10};
  const chartWidth = 1000;
  const chartHeight = 700 - margin.top - margin.bottom;

  let selectedData = Dota_DATA;


  const x = d3.scaleBand().rangeRound([0, chartWidth]).padding(0.1);
  const y = d3.scaleLinear().range([chartHeight, 0]);

  const chartContainer = d3
  .select('svg')
  .attr('width', chartWidth)
  .attr('height',chartHeight + margin.top + margin.bottom);

x.domain(Dota_DATA.map((d) => d.name));
y.domain([0, d3.max(Dota_DATA, d => d.wins + 100)]);

 const chart = chartContainer.append('g');

chart.append('g')
.call(d3.axisBottom(x))
.attr('transform', `translate(0, ${chartHeight})`)
.attr('color', '#b33000');

function renderChart()
{
    chart.selectAll('.chartbar')
    .data(selectedData, data => data.team_id)
    .enter()
    .append('rect')
    .classed('chartbar', true)
    .attr('width', x.bandwidth())
    .attr('height', data => chartHeight - y(data.wins))
    .attr('x', (data) => x(data.name))
    .attr('y', (data) => y(data.wins));
   
    chart.selectAll('.chartbar').data(selectedData, data => data.team_id).exit().remove();

    chart.selectAll('.label')
    .data(selectedData, data => data.team_id)
    .enter()
    .append('text')
    .text(data => data.wins)
    .attr('x', data => x(data.name) + x.bandwidth() /2)
    .attr('y', data => y(data.wins) - 10)
    .attr('text-anchor', 'middle')
    .classed('label', true);

    chart.selectAll('.label')
    .data(selectedData, (data) => data.team_id)
    .exit()
    .remove();
}


 renderChart();

 let unselectedIds = [];

 const listItems = d3
 .select('#data')
 .select('ul')
 .selectAll('li')
 .data(Dota_DATA)
 .enter()
 .append('li');

 listItems.append('span').text(data => data.name);

 listItems
 .append('input')
 .attr('type','checkbox')
 .attr('checked', true)
 .on('change', (data) => {
     if (unselectedIds.indexOf(data.team_id) === -1) {
     unselectedIds.push(data.team_id);
     }else{
     unselectedIds = unselectedIds.filter(team_id => team_id !== data.team_id);
     }
     selectedData = Dota_DATA.filter(d => unselectedIds.indexOf(d.team_id) === -1);
     renderChart();
     });
