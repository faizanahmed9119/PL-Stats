import './App.css'
import TeamData from './search'
import Header from './header.jsx'
import {getData} from './api/footy.js';
import { useEffect, useState } from "react";
import Top_Points from './top_points.jsx';
import Top_PPG from './top_ppg.jsx';
import Value from './value.jsx';
import Footer from './footer.jsx';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
  getData()
      .then(data => {
      const allPlayers = data.elements.map(p => {
          const stats = data.element_stats.find(s => s.id === p.id);

          return {
          id: p.id,
          name: p.web_name,
          firstName: p.first_name,
          lastName: p.second_name,
          teamId: p.team,
          goals: p.goals_scored,
          assists: p.assists,
          minutes: p.minutes,
          position: p.element_type,
          saves: p.saves,
          sheets: p.clean_sheets,
          xA: p.expected_assists ?? "0.00",
          xG: p.expected_goals ?? "0.00", 
          ppg: p.points_per_game ?? "0.00", 
          total_points : p.total_points, 
          value: p.value_season,
          photo: `https://resources.premierleague.com/premierleague/photos/players/110x140/p${p.photo.replace(".jpg", "")}.png`
          };
      });

      setPlayers(allPlayers);
      })
      .catch(err => {
      console.error("Failed to load data:", err);
      });
  }, []); 


  return (
    <>
    <Header/>
    <TeamData players = {players}/>
    <div id='data-display'>
      <Top_Points players = {players}/>
      <Top_PPG players = {players}/>
      <Value players = {players}/>
    </div>
    <Footer/>
    </>
  )
}

export default App
