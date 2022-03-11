export async function GetList(string){
    const apiSecret = process.env.REACT_APP_API_KEY

    try{   
    let response = await  fetch(`https://api.rawg.io/api/games?search=${string}&key=${apiSecret}`);
    let json = await response.json();
    
    return json.results
    }

    catch(err){
        return err
    }


}

