import { useState } from "react";


function Value({players}){

    const [index, setIndex] = useState(10);
    const [start_index, setStartIndex] = useState(0);

    let size = players.length;
    let temp;

    for(let x = 0 ; x<size-1 ; x++){
        for(let j = 0; j<size-x-1 ; j++){
            if(players[j]?.value < players[j+1]?.value){
                temp = players[j];
                players[j] = players[j+1];
                players[j+1] = temp;
            }
        }
    }

    let table_top_points = (
    <div>
        <div id="top-points-text" style={{marginBottom: "20px" , borderBottom : "4px solid #8e07a9" , fontWeight: "bold" }}>
            <span className="player-name">
                {""}  {"Name"}
            </span>
            <span className="position">
                {"Pos"}
            </span>
            <span className="points">
                {"Value"}
            </span>
        </div>
        {players.slice(start_index, index).map((player, i) => { 
        const actualIndex = start_index + i + 1;
        return (
            <div key={player.id} id="top-points-text">
               <span className="player-name"> {actualIndex}. <strong>{player.name}</strong> </span>
                {" "}
               <span className="position"> {player.position === 1
                ? "GK"
                : player.position === 2
                ? "Def"
                : player.position === 3
                ? "Mid"
                : player.position === 4
                ? "Att"
                : "Error"}{" "}
                </span>
                <span className="points">
                {player.value}
                </span>
            </div>
        );
        })}
    </div>
    );


    function forward() {
        if(index <= 645){
            setIndex(index+10);
            setStartIndex(start_index+10);
        }
        
    }

    function backward(){
        if(start_index >= 10){
            setStartIndex(start_index -10);
            setIndex(index -10);
        }
        
    }

    return(
        <div id="top-points-display">
            <div id="box-head">
                <p>FPL Points Per Million</p>
            </div>
            {table_top_points}
            <div id="buttons2">
                <button className="back" onClick={backward} type="button">{'<'}</button>
                <button className="fwd" onClick={forward} type="button">{'>'}</button>
            </div>
        </div>
    )
}

export default Value