import "./App.css";
import Bubbles from "./Bubbles";
import CatButton from './CatButton'
import CatCard from "./CatCard";
import Footer from "./Footer";

function App() {
  const arrayAudios = ["cat_bell.mp3", "cat_meow.mp3", "cat_mewo.mp3", "cat_pur.mp3"];

  function reproducirMeow(){
    const catSound = arrayAudios[Math.floor(Math.random() * arrayAudios.length)];
    
    const audio = new Audio("sounds/" + catSound);
    catSound == "cat_pur.mp3" ? 
      audio.volume = 0.65 :
      audio.volume = 0.45;

    audio.play()
  }

  return (
    <>
      <main>
        <h1>A daily cat fact</h1>
        <CatButton reproducirMeow={reproducirMeow} />
        <CatCard reproducirMeow={reproducirMeow} />
        <Bubbles />
      </main>
      <Footer />
    </>
  );
}

export default App;
