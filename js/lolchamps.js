   
   
   
   /*const challengerapi_url = 'https://euw1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=RGAPI-8ea4b701-ecc7-44fe-b8e3-86bb23413c7d'
    async function getChallenger(){
    const response = await fetch (challengerapi_url);
    const data = await response.json();
    
    console.log('challenger results',data);
    };
    
    getChallenger();



   

    const bronzeapi_url = 'https://euw1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/IRON/IV?page=1&api_key=RGAPI-8ea4b701-ecc7-44fe-b8e3-86bb23413c7d'
    async function getBronze(){
    const response = await fetch (bronzeapi_url);
    const data = await response.json();
    
    console.log('LowestIronresults',data[0].wins);
    };
   
    getBronze();


  let loadData = async () => {
    let myData = await d3.json('https://euw1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/IRON/IV?page=1&api_key=RGAPI-8ea4b701-ecc7-44fe-b8e3-86bb23413c7d');
    console.log(myData);
    console.log('sum', myData[0].wins + myData[1].wins);
    

    }

    loadData();
    console.log('Lucky');
*/


/*function fetchData(){
    fetch( 'https://euw1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/IRON/IV?page=1&api_key=RGAPI-537a88c9-634c-44f5-a310-deedbdcc8477')
    .then(response => {
        console.log(response);
        if(!response.ok){
            throw Error("Error");
        }
       return response.json();
      
    })
    .then(data => {
        console.log(data);
        const html = data.map(user =>{
            return `
           
            <div class = "user">
            <p>wins: ${user.wins  }</p>
            <p>losses: ${user.losses}</p>
            </div>
            `;
        }) 
        .join('');
        console.log(html);
        document
        .querySelector('#app')
        .insertAdjacentHTML('afterbegin',html) ;
    })
    .catch(error => {
        console.log(error)
    });
}

fetchData();
*/




function fetchData(){
    fetch('https://europe.api.riotgames.com/lor/ranked/v1/leaderboards?api_key=RGAPI-d697f117-96b7-48e7-8660-e06179de6112')
    .then(response => {
        console.log(response);
        if(!response.ok){
            throw Error("Error");
        }
       return response.json();
      
    })
    .then(data => {
        console.log(data);
        const html = data.players.map(user =>{
            return `
           
            <div class = "user">
            <p>SummonerName: ${user.name}</p>
            <p>LP: ${user.lp}</p>
            </div>
            `;
        }) 
        .join('');
        console.log(html);
        document
        .querySelector('#app')
        .insertAdjacentHTML('afterbegin',html) ;
    })
    .catch(error => {
        console.log(error)
    });
}

fetchData();


