export async function GetListOrderingByMetacritic(){
    const apiSecret = process.env.REACT_APP_API_KEY


    let response = await fetch(`https://api.rawg.io/api/games?ordering=metacritic-released&key=${apiSecret}`);
    let json = await response.json();
    return json.results

}