import { useEffect, useState } from "react";
import {getData} from './api/footy.js';

function TeamData({players}){
    const [query, setQuery] = useState("");
    const [index, setFoundIndex] = useState(null);

    function handlechange(e){
        setQuery(e.target.value);
    }
    
    let num2 = players.length;

    function getPlayer(){
        let o = query.toLowerCase();
        let q = o.trim();
        for(let i = 0; i< num2; i++){
            let count = i;
            let new_name = players[i].firstName.toLowerCase() + " " + players[i].lastName.toLowerCase();
            
            if(q === players[i]?.firstName.toLowerCase() || q === players[i]?.lastName.toLowerCase() || q === new_name || q === players[i]?.name.toLowerCase() ){
                return count;
            }

        }
        return -1;
    }

    function callbigboy(){
        let index2 = getPlayer();
        setFoundIndex(index2);
    }

    let content;
    if(players[index]?.position === 1){
        content = <div id="content">
        <img id="imag" src={players[index]?.photo} alt="Photo not found"/>
        <h1>{players[index]?.firstName} {players[index]?.lastName}</h1>
        <h3>Clean Sheets: {players[index]?.sheets}</h3>
        <h3>Saves: {players[index]?.saves}</h3>
        <h3>FPL Points: {players[index]?.total_points}</h3>
        <h3>FPL PPG: {players[index]?.ppg}</h3>
        </div>
    } else if(players[index]?.position === 2){
        content = <div id="content"> 
            <img id="imag" src={players[index]?.photo} alt="Photo not found"/>
            <h1>{players[index]?.firstName} {players[index]?.lastName}</h1>
            <h3>Clean Sheets: {players[index]?.sheets}</h3>
            <h3>Goals: {players[index]?.goals}</h3>
            <h3>Assists: {players[index]?.assists}</h3> 
            <h3>FPL Points: {players[index]?.total_points}</h3>
            <h3>FPL PPG: {players[index]?.ppg}</h3>
            </div> 
    } else if(players[index]?.position === 3){
        content = <div id="content"> 
            <img id="imag" src={players[index]?.photo} alt="Photo not found"/>
            <h1>{players[index]?.firstName} {players[index]?.lastName}</h1>
            <h3>Goals: {players[index]?.goals}</h3>
            <h3>Assists: {players[index]?.assists}</h3> 
            <h3>Expected Goals: {players[index]?.xG}</h3>
            <h3>Expected Assists: {players[index]?.xA}</h3>
            <h3>FPL Points: {players[index]?.total_points}</h3>
            <h3>FPL PPG: {players[index]?.ppg}</h3>
            </div> 
    } else if(players[index]?.position === 4){
        content = <div id="content"> 
            <img id="imag" src={players[index]?.photo} alt="Photo not found"/>
            <h1>{players[index]?.firstName} {players[index]?.lastName}</h1>
            <h3>Goals: {players[index]?.goals}</h3>
            <h3>Assists: {players[index]?.assists}</h3> 
            <h3>Expected Goals: {players[index]?.xG}</h3>
            <h3>FPL Points: {players[index]?.total_points}</h3>
            <h3>FPL PPG: {players[index]?.ppg}</h3>
            </div> 
    } else if(index === -1){
        content = <div id="content"> 
            <img id="imag" src={players[index]?.photo} alt="Photo not found"/>
            <h1>Player Not Found</h1>
            <h3>Make sure you have entered the right name</h3>
            </div> 
    }

    return(
        <>
        <div id="Display">
            <input type="text" id="text-input" value={query} onChange={handlechange} placeholder="Search for player's stats"/>
            <button id="search" onClick={callbigboy}>Search</button><br></br>
            {content}
        </div>
        </>
    )

}

export default TeamData