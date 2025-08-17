import { useState } from "react";

function Midfielders({players}){

    let mid = players.filter(function(player){
        if(player?.position === 3){
            return true;
        }
    })
   

    const [index, setIndex] = useState(10);
    const [start_index, setStartIndex] = useState(0);

    let size = mid.length;
    let temp;

    for(let x = 0 ; x<size-1 ; x++){
        for(let j = 0; j<size-x-1 ; j++){
            if(mid[j]?.total_points < mid[j+1]?.total_points){
                temp = mid[j];
                mid[j] = mid[j+1];
                mid[j+1] = temp;
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
        {mid.slice(start_index, index).map((m, i) => { 
        const actualIndex = start_index + i + 1;
        return (
            <div key={m.id} id="top-points-text">
               <span className="player-name"> {actualIndex}. <strong>{m.name}</strong> </span>
                {" "}
               <span className="position"> 
                {m.ppg}
                </span>
                <span className="points">
                {m.total_points}
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
                <p>Midfielders</p>
            </div>
            {table_top_points}
            <div id="buttons2">
                <button className="back" onClick={backward} type="button">{'<'}</button>
                <button className="fwd" onClick={forward} type="button">{'>'}</button>
            </div>
        </div>
    )
}

export default Midfielders