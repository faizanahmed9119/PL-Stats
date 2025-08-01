const url = 'https://api.football-data.org/v4';
const token = "abf24039098443b18a757b674c3f062a";
const api = "https://fantasy.premierleague.com/api/bootstrap-static/"

export async function getData(){
    const response = await fetch("/fpl.json");

    if(!response.ok){
        throw new Error("Error in fetching data");
    }

    const data = await response.json();

    return data;
}