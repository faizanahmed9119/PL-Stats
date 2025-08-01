import img2 from './assets/logo2.png';

function Header(){
    return(
        <>
        <title>PL Stats</title>
        <div id='header'>
            <img id='logo' src={img2}/>
            <h1 id='title'>Stats</h1>

        </div>
        </>)
}

export default Header