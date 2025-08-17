import { useState } from "react";

function Attackers({players}){

    let attacker = players.filter(function(player){
        if(player?.position === 4){
            return true;
        }
    })
   

    const [index, setIndex] = useState(10);
    const [start_index, setStartIndex] = useState(0);

    let size = attacker.length;
    let temp;

    for(let x = 0 ; x<size-1 ; x++){
        for(let j = 0; j<size-x-1 ; j++){
            if(attacker[j]?.total_points < attacker[j+1]?.total_points){
                temp = attacker[j];
                attacker[j] = attacker[j+1];
                attacker[j+1] = temp;
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
                {"PPG"}
            </span>
            <span className="points">
                {"Points"}
            </span>
        </div>
        {attacker.slice(start_index, index).map((a, i) => { 
        const actualIndex = start_index + i + 1;
        return (
            <div key={a.id} id="top-points-text">
               <span className="player-name"> {actualIndex}. <strong>{a.name}</strong> </span>
                {" "}
               <span className="position"> 
                {a.ppg}
                </span>
                <span className="points">
                {a.total_points}
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
                <p>Forwards</p>
            </div>
            {table_top_points}
            <div id="buttons2">
                <button className="back" onClick={backward} type="button">{'<'}</button>
                <button className="fwd" onClick={forward} type="button">{'>'}</button>
            </div>
        </div>
    )
}

export default Attackers