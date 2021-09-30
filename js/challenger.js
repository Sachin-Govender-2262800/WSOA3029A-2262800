const LORdata = [
    {
        "leagueId": "9a5f071c-c899-3750-b338-7b4eee40f8c0",
        "queueType": "RANKED_SOLO_5x5",
        "tier": "CHALLENGER",
        "rank": "I",
        "summonerId": "2gAjZxTfehFthRpYBJt2Qeo92hJrQjFq9UcpCn385nu9c38",
        "summonerName": "ZWYRØØ",
        "leaguePoints": 1559,
        "wins": 735,
        "losses": 647,
        "veteran": true,
        "inactive": false,
        "freshBlood": false,
        "hotStreak": false
    },
    {
        "leagueId": "9a5f071c-c899-3750-b338-7b4eee40f8c0",
        "queueType": "RANKED_SOLO_5x5",
        "tier": "CHALLENGER",
        "rank": "I",
        "summonerId": "_R7x5ZLYy6FGNDPke8aYF2WSZZlnpGe5QygT5BkNUrvQ7Ao",
        "summonerName": "Targamas",
        "leaguePoints": 1457,
        "wins": 631,
        "losses": 555,
        "veteran": true,
        "inactive": false,
        "freshBlood": false,
        "hotStreak": false
    },
    {
        "leagueId": "9a5f071c-c899-3750-b338-7b4eee40f8c0",
        "queueType": "RANKED_SOLO_5x5",
        "tier": "CHALLENGER",
        "rank": "I",
        "summonerId": "mEr4cezYaPJfByhVVzINpMcVhlsT3n6iDE47e3QDkt0gH4b6",
        "summonerName": "Raiden Shogun C2",
        "leaguePoints": 1416,
        "wins": 217,
        "losses": 125,
        "veteran": true,
        "inactive": false,
        "freshBlood": false,
        "hotStreak": true
    },
    
     ];

     const width = 2000;
     const height = 1000;
     const margin = { top: 50, bottom: 150, left: 50, right: 150 };
     
     const svg = d3.select('#d3-container')
       .append('svg')
       .attr('width', width - margin.left - margin.right)
       .attr('height', height - margin.top - margin.bottom)
       .attr("viewBox", [0, 0, width, height]);
     
     const x = d3.scaleBand()
       .domain(d3.range(LORdata.length))
       .range([margin.left, width - margin.right])
       .padding(0.4)
     
     const y = d3.scaleLinear()
       .domain([0, 1000])
       .range([height - margin.bottom, margin.top])
     
     svg
       .append("g")
       .attr("fill", '#D4AF37')
       .selectAll("rect")
       .data(LORdata.sort((a, b) => d3.descending(a.wins, b.wins)))
       .join("rect")
         .attr("x", (d, i) => x(i))
         .attr("y", d => y(d.wins))
         .attr('title', (d) => d.wins)
         .attr("class", "rect")
         .attr("height", d => y(0) - y(d.wins))
         .attr("width", x.bandwidth());
    
     function yAxis(g) {
       g.attr("transform", `translate(${margin.left}, 0)`)
         .call(d3.axisLeft(y).ticks(null, LORdata.format))
         .attr("font-size", '20px')
     }
     
     function xAxis(g) {
       g.attr("transform", `translate(0,${height - margin.bottom})`)
         .call(d3.axisBottom(x).tickFormat(i => LORdata[i].summonerName))
         .attr("font-size", '15px')
     }
     
     svg.append("g").call(xAxis);
     svg.append("g").call(yAxis);
     svg.node();