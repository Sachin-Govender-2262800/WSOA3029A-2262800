const api_url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json';

async function getLeagueChamp(){


    var margin = {top: 20, right: 120, bottom: 100, left: 150},
        width = 2500 - margin.right - margin.left,
        height = 1500 - margin.top - margin.bottom;
        
    var i = 0,
        duration = 1000,
        root;
    
    var tree = d3.layout.tree()
        .size([height, width]);
    
    var diagonal = d3.svg.diagonal()
        .projection(function(d) { return [d.y, d.x]; });
    
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.data.Ahri);
    console.log(data.data.Jhin);
    console.log(data.data.Viktor);
    console.log(data.data.Taliyah );
    console.log(data.data.Gnar);
    console.log(data.data.FiddleSticks);
    console.log(data.data.MissFortune);
    console.log(data.data.Morgana);
    console.log(data.data.Azir);
    



    const Leaguetree = [
      {
        "name": "LeagueChampions",
        "parent": "null",
        "children": [

            {
                "name": data.data.Jhin.name,
                "parent": "LeagueChampions",
                "children": [
                  {
                    "name": "Class",
                    "parent": "Jhin",
                    "children": [
    
                    
                        {
                    "name": "Difficulty",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Jhin.info.difficulty,
                        "parent": "Class"
                    }
                ]
                    },
                    {
                    "name": "Tags",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Jhin.tags,
                        "parent": "Class"
                    }
                ]
            },
                {
                    "name": "PartType",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Jhin.partype,
                        "parent": "Class"
                    }
                ]
                  },
                 
                
                ] 
                
                  },
                  {
                        "name": "blurb",
                        "parent": "Jhin",
                        "children": [
                        {
                        "name": data.data.Jhin.blurb,
                        "parent": "Class"
                    }
                        ]
                    }
                ]
                },


         


      




        


      

            {
                "name": data.data.Kassadin.name,
                "parent": "LeagueChampions",
                "children": [
                  {
                    "name": "Class",
                    "parent": "Kassadin",
                    "children": [
    
                    
                        {
                    "name": "Difficulty",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Kassadin.info.difficulty,
                        "parent": "Class"
                    }
                ]
                    },
                    {
                    "name": "Tags",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Kassadin.tags,
                        "parent": "Class"
                    }
                ]
            },
                {
                    "name": "PartType",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Kassadin.partype,
                        "parent": "Class"
                    }
                ]
                  },
                 
                
                ] 
                
                  },
                  {
                        "name": "blurb",
                        "parent": "Kassadin",
                        "children": [
                        {
                        "name": data.data.Kassadin.blurb,
                        "parent": "Class"
                    }
                        ]
                    }
                ]
                },






            {
            "name":data.data.Nasus.name,
            "parent": "LeagueChampions",
            "children": [
              {
                "name": "Class",
                "parent": "Nasus",
                "children": [

                
                    {
                "name": "Difficulty",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.Nasus.info.difficulty,
                    "parent": "Class"
                }
            ]
                },
                {
                "name": "Tags",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.Nasus.tags,
                    "parent": "Class"
                }
            ]
        },
            {
                "name": "PartType",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.Nasus.partype,
                    "parent": "Class"
                }
            ]
              },
             
            
            ] 
            
              },
              {
                    "name": "blurb",
                    "parent": "Nasus",
                    "children": [
                    {
                    "name": data.data.Nasus.blurb,
                    "parent": "Class"
                }
                    ]
                }
            ]
            },


            
           






           {
            "name": data.data.Viktor.name,
            "parent": "LeagueChampions",
            "children": [
              {
                "name": "Class",
                "parent": "Viktor",
                "children": [

                
                    {
                "name": "Difficulty",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.Viktor.info.difficulty,
                    "parent": "Class"
                }
            ]
                },
                {
                "name": "Tags",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.Viktor.tags,
                    "parent": "Class"
                }
            ]
                },
            {
                "name": "PartType",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.Viktor.partype,
                    "parent": "Class"
                }
            ]
              },
             
            
            ] 
            
              },
              {
                    "name": "blurb",
                    "parent": "Viktor",
                    "children": [
                    {
                    "name": data.data.Viktor.blurb,
                    "parent": "Class"
                }
                    ]
                }
            ]
            },




            {
                "name": data.data.FiddleSticks.name,
                "parent": "LeagueChampions",
                "children": [
                  {
                    "name": "Class",
                    "parent": "FiddleSticks",
                    "children": [
    
                    
                        {
                    "name": "Difficulty",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.FiddleSticks.info.difficulty,
                        "parent": "Class"
                    }
                ]
                    },
                    {
                    "name": "Tags",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.FiddleSticks.tags,
                        "parent": "Class"
                    }
                ]
            },
                {
                    "name": "PartType",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.FiddleSticks.partype,
                        "parent": "Class"
                    }
                ]
                  },
                 
                
                ] 
                
                  },
                  {
                        "name": "blurb",
                        "parent": "FiddleSticks",
                        "children": [
                        {
                        "name": data.data.FiddleSticks.blurb,
                        "parent": "Class"
                    }
                        ]
                    }
                ]
          
            },
    






            {
                "name": data.data.Ahri.name,
                "parent": "LeagueChampions",
                "children": [
                  {
                    "name": "Class",
                    "parent": "Ahri",
                    "children": [
    
                    
                        {
                    "name": "Difficulty",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Ahri.info.difficulty,
                        "parent": "Class"
                    }
                ]
                    },
                    {
                    "name": "Tags",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Ahri.tags,
                        "parent": "Class"
                    }
                ]
            },
                {
                    "name": "PartType",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Ahri.partype,
                        "parent": "Class"
                    }
                ]
                  },
                 
                
                ] 
                
                  },
                  {
                        "name": "blurb",
                        "parent": "Ahri",
                        "children": [
                        {
                        "name": data.data.Ahri.blurb,
                        "parent": "Class"
                    }
                        ]
                    }
                ]
          
            },

 
                {
                    "name": data.data.Shyvana.name,
                    "parent": "LeagueChampions",
                    "children": [
                      {
                        "name": "Class",
                        "parent": "Shyvana ",
                        "children": [
        
                        
                            {
                        "name": "Difficulty",
                        "parent": "Class",
                        "children": [
                            {
                            "name": data.data.Shyvana .info.difficulty,
                            "parent": "Class"
                        }
                    ]
                        },
                        {
                        "name": "Tags",
                        "parent": "Class",
                        "children": [
                            {
                            "name": data.data.Shyvana .tags,
                            "parent": "Class"
                        }
                    ]
                },
                    {
                        "name": "PartType",
                        "parent": "Class",
                        "children": [
                            {
                            "name": data.data.Shyvana.partype,
                            "parent": "Class"
                        }
                    ]
                      },
                     
                    
                    ] 
                    
                      },
                      {
                            "name": "blurb",
                            "parent": "Shyvana ",
                            "children": [
                            {
                            "name": data.data.Shyvana .blurb,
                            "parent": "Class"
                        }
                            ]
                        }
                    ]
                    },








            {
            "name": data.data.Taliyah.name,
            "parent": "LeagueChampions",
            "children": [
              {
                "name": "Class",
                "parent": "Taliyah ",
                "children": [

                
                    {
                "name": "Difficulty",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.Taliyah .info.difficulty,
                    "parent": "Class"
                }
            ]
                },
                {
                "name": "Tags",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.Taliyah .tags,
                    "parent": "Class"
                }
            ]
        },
            {
                "name": "PartType",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.Taliyah.partype,
                    "parent": "Class"
                }
            ]
              },
             
            
            ] 
            
              },
              {
                    "name": "blurb",
                    "parent": "Taliyah ",
                    "children": [
                    {
                    "name": data.data.Taliyah .blurb,
                    "parent": "Class"
                }
                    ]
                }
            ]
            },



            {
                "name": data.data.Twitch.name,
                "parent": "LeagueChampions",
                "children": [
                  {
                    "name": "Class",
                    "parent": "Twitch ",
                    "children": [
    
                    
                        {
                    "name": "Difficulty",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Twitch.info.difficulty,
                        "parent": "Class"
                    }
                ]
                    },
                    {
                    "name": "Tags",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Twitch.tags,
                        "parent": "Class"
                    }
                ]
            },
                {
                    "name": "PartType",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Twitch.partype,
                        "parent": "Class"
                    }
                ]
                  },
                 
                
                ] 
                
                  },
                  {
                        "name": "blurb",
                        "parent": "Twitch ",
                        "children": [
                        {
                        "name": data.data.Twitch.blurb,
                        "parent": "Class"
                    }
                        ]
                    }
                ]
                },


            {
                "name": data.data.Azir.name,
                "parent": "LeagueChampions",
                "children": [
                  {
                    "name": "Class",
                    "parent": "Azir",
                    "children": [
    
                    
                        {
                    "name": "Difficulty",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Azir.info.difficulty,
                        "parent": "Class"
                    }
                ]
                    },
                    {
                    "name": "Tags",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Azir.tags,
                        "parent": "Class"
                    }
                ]
            },
                {
                    "name": "PartType",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Azir.partype,
                        "parent": "Class"
                    }
                ]
                  },
                 
                
                ] 
                
                  },
                  {
                        "name": "blurb",
                        "parent": "Azir",
                        "children": [
                        {
                        "name": data.data.Azir.blurb,
                        "parent": "Class"
                    }
                        ]
                    }
                ]
          
            },
    
    
            {
                "name": data.data.Gnar.name,
                "parent": "LeagueChampions",
                "children": [
                  {
                    "name": "Class",
                    "parent": "Gnar",
                    "children": [
    
                    
                        {
                    "name": "Difficulty",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Gnar.info.difficulty,
                        "parent": "Class"
                    }
                ]
                    },
                    {
                    "name": "Tags",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Gnar.tags,
                        "parent": "Class"
                    }
                ]
            },
                {
                    "name": "PartType",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.Gnar.partype,
                        "parent": "Class"
                    }
                ]
                  },
                 
                
                ] 
                
                  },
                  {
                        "name": "blurb",
                        "parent": "Gnar",
                        "children": [
                        {
                        "name": data.data.Gnar.blurb,
                        "parent": "Class"
                    }
                        ]
                    }
                ]
          
            },

            {
                "name": data.data.MasterYi.name,
                "parent": "LeagueChampions",
                "children": [
                  {
                    "name": "Class",
                    "parent": "MasterYi",
                    "children": [
    
                    
                        {
                    "name": "Difficulty",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.MasterYi.info.difficulty,
                        "parent": "Class"
                    }
                ]
                    },
                    {
                    "name": "Tags",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.MasterYi.tags,
                        "parent": "Class"
                    }
                ]
                    },
                {
                    "name": "PartType",
                    "parent": "Class",
                    "children": [
                        {
                        "name": data.data.MasterYi.partype,
                        "parent": "Class"
                    }
                ]
                  },
                 
                
                ] 
                
                  },
                  {
                        "name": "blurb",
                        "parent": "MasterYi",
                        "children": [
                        {
                        "name": data.data.MasterYi.blurb,
                        "parent": "Class"
                    }
                        ]
                    }
                ]
                },


            {
            "name":data.data.MissFortune.name,
            "parent": "LeagueChampions",
            "children": [
              {
                "name": "Class",
                "parent": "MissFortune",
                "children": [

                
                    {
                "name": "Difficulty",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.MissFortune.info.difficulty,
                    "parent": "Class"
                }
            ]
                },
                {
                "name": "Tags",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.MissFortune.tags,
                    "parent": "Class"
                }
            ]
        },
            {
                "name": "PartType",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.MissFortune.partype,
                    "parent": "Class"
                }
            ]
              },
             
            
            ] 
            
              },
              {
                    "name": "blurb",
                    "parent": "MissFortune",
                    "children": [
                    {
                    "name": data.data.MissFortune.blurb,
                    "parent": "Class"
                }
                    ]
                }
            ]
            },





            {
            "name":data.data.Morgana.name,
            "parent": "LeagueChampions",
            "children": [
              {
                "name": "Class",
                "parent": "Morgana",
                "children": [

                
                    {
                "name": "Difficulty",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.Morgana.info.difficulty,
                    "parent": "Class"
                }
            ]
                },
                {
                "name": "Tags",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.Morgana.tags,
                    "parent": "Class"
                }
            ]
        },
            {
                "name": "PartType",
                "parent": "Class",
                "children": [
                    {
                    "name": data.data.Morgana.partype,
                    "parent": "Class"
                }
            ]
              },
             
            
            ] 
            
              },
              {
                    "name": "blurb",
                    "parent": "Morgana",
                    "children": [
                    {
                    "name": data.data.Morgana.blurb,
                    "parent": "Class"
                }
                    ]
                }
            ]
            },
       
       
       
       
        ]
      }

      
    ];
    
    
    root = Leaguetree[0];
    root.x0 = height / 2;
    root.y0 = 0;
      
    update(root);
    
    
    function update(source) {
    
    
      var nodes = tree.nodes(root).reverse(),
          links = tree.links(nodes);
    
      
      nodes.forEach(function(d) { d.y = d.depth * 200; });
    
   
      var node = svg.selectAll("g.node")
          .data(nodes, function(d) { return d.id || (d.id = ++i); });
    
    
      var nodeEnter = node.enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
          .on("click", click);
    
      nodeEnter.append("circle")
          .attr("r", 1e-6)
          .style("fill", function(d) { return d._children ? "#FFDC00" : "black"; });
    
      nodeEnter.append("text")
          .attr("x", function(d) { return d.children || d._children ? -15 : 15; })
          .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
          .text(function(d) { return d.name; })

    

      var nodeUpdate = node.transition()
          .duration(duration)
          .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });
    
      nodeUpdate.select("circle")
          .attr("r", 8)
          .style("fill", function(d) { return d._children ? "#FFDC00" : "black"; });
    
      nodeUpdate.select("text")
          .style("fill-opacity", 1);
    

      var nodeExit = node.exit().transition()
          .duration(duration)
          .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
          .remove();
    
      nodeExit.select("circle")
          .attr("r", 1e-6);
    
      nodeExit.select("text")
          .style("fill-opacity", 1e-6);
    
    
      var link = svg.selectAll("path.link")
          .data(links, function(d) { return d.target.id; });
    
    
      link.enter().insert("path", "g")
          .attr("class", "link")
          .attr("d", function(d) {
            var o = {x: source.x0, y: source.y0};
            return diagonal({source: o, target: o});
          });
    
      
      link.transition()
          .duration(duration)
          .attr("d", diagonal);
    
 
      link.exit().transition()
          .duration(duration)
          .attr("d", function(d) {
            var o = {x: source.x, y: source.y};
            return diagonal({source: o, target: o});
          })
          .remove();
    
    
      nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }
    
    
    function click(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update(d);
    }
}

    getLeagueChamp();