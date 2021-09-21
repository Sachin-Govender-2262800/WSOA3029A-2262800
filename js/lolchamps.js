   /*const challengerapi_url = 'https://euw1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=RGAPI-8ea4b701-ecc7-44fe-b8e3-86bb23413c7d'
    async function getChallenger(){
    const response = await fetch (challengerapi_url);
    const data = await response.json();
    
    console.log('challenger results',data);
    };
    
    getChallenger();
*/


   

    /*const bronzeapi_url = 'https://euw1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/IRON/IV?page=1&api_key=RGAPI-8ea4b701-ecc7-44fe-b8e3-86bb23413c7d'
    async function getBronze(){
    const response = await fetch (bronzeapi_url);
    const data = await response.json();
    
    console.log('LowestIronresults',data[0].wins);
    };
   
    getBronze();*/


  /*let loadData = async () => {
    let myData = await d3.json('https://euw1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/IRON/IV?page=1&api_key=RGAPI-8ea4b701-ecc7-44fe-b8e3-86bb23413c7d');
    console.log(myData);
    console.log('sum', myData[0].wins + myData[1].wins);
    

    }

    loadData();
    console.log('Lucky');*/



let loadData = async () => {

    let myData = await d3.json('../js/Ironranks.json');
    console.log(myData)
    console.log('sum', myData[0].wins + myData[1].wins);
}

loadData();
console.log('Lucky');






