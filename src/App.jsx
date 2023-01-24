import "./App.css";
import Bubbles from "./Bubbles";
import CatButton from './CatButton'
import CatCard from "./CatCard";
import CatPlayer from "./CatPlayer";
import Footer from "./Footer";

function App() {
  const arrayAudios = ["cat_bell.mp3", "cat_meow.mp3", "cat_mewo.mp3", "cat_pur.mp3"];
  const music = new Audio("sounds/musicBox_greenSleeves.mp3");
  music.muted = true
  music.loop = true;

  function reproducirMeow(){
    const catSound = arrayAudios[Math.floor(Math.random() * arrayAudios.length)];
    
    const audio = new Audio("sounds/" + catSound);
    catSound == "cat_pur.mp3" ? 
      audio.volume = 0.65 :
      audio.volume = 0.45;

    audio.play()
  }

  function reproducirMusica(){
    music.muted = false;
  }

  function silenciarMusica(){
    music.muted = true
  }

  function hideMessage(e){
    e.target.removeEventListener(e.type, hideMessage);
    console.log( e.target)
    document.getElementsByClassName("cat-player-alert")[0].style.opacity = "0";
    document.getElementById("filter").style.display = "none";
    
    music.play()
    reproducirMusica()
  }

  return (
    <>
      <main>
        <div id="filter" onClick={hideMessage}></div>
        <h1>A daily cat fact</h1>
        <CatPlayer reproducirMusica={reproducirMusica} silenciarMusica={silenciarMusica} hideMessage={hideMessage} />
        <CatButton reproducirMeow={reproducirMeow} />
        <CatCard reproducirMeow={reproducirMeow} />
        <Bubbles />
      </main>
      <Footer />
    </>
  );
}

export default App;
