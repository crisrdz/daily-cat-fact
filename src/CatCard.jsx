import "./CatCard.css";
import { useState, useEffect, useRef } from "react";
import { FaPaw, FaRetweet } from "react-icons/fa";

function CatCard({reproducirMeow}) {
  const [fact, setFact] = useState();
  const [hoy, setHoy] = useState(window.localStorage.getItem("hoy"));
  const card = useRef(null)
  const cardFront = useRef(null)
  const cardBack = useRef(null)
  const cardBtn = useRef(null)

  useEffect(() => {
    const now = new Date().toLocaleDateString();
    if (now == window.localStorage.getItem("hoy")) {
      setFact(window.localStorage.getItem("fact"));
    } else {
      obtenerDato();
    }
  }, []);

  async function obtenerDato() {
    let continuar = false;
    let dataJson;

    while (!continuar) {
      const data = await fetch(
        "https://cat-fact.herokuapp.com/facts/random?animal_type=cat"
      );
      dataJson = await data.json();
      continuar = dataJson.status.verified;
    }

    setFact(dataJson.text);
    window.localStorage.setItem("fact", dataJson.text);

  }

  function handleClick(){
    reproducirMeow()

    card.current.classList.add("card-rotate");
    cardFront.current.classList.add("card-hide")
    setTimeout(() => {
      cardFront.current.classList.add("card-none")
      cardBack.current.classList.remove("card-none")
      cardBack.current.classList.add("card-grid")
      
      cardBtn.current.classList.remove("card-none")
      cardBtn.current.classList.add("btn-giro")
    }, 2000);
    
    const now = new Date().toLocaleDateString();
    window.localStorage.setItem("hoy", now);
  }

  function handleClickBtn(){
    card.current.className.includes("card-horizontal")?
      card.current.classList.remove("card-horizontal"):
      card.current.classList.add("card-horizontal");

    setTimeout(() => {
      if(document.body.scrollHeight > window.innerHeight){
        card.current.style.marginBottom = "3rem";
      }else{
        card.current.style.marginBottom = "1rem";
      }
    }, 2001);
  }

  if(hoy == new Date().toLocaleDateString()){
    return (
      <div className="card card-rotate card-horizontal" ref={card}>
        <FaPaw className="paw"/>
        <FaPaw className="paw"/>
        <FaPaw className="paw"/>
        <FaPaw className="paw"/>
        <button className="btn-giro" onClick={handleClickBtn}><FaRetweet /></button>
        <div className="card-grid" ref={cardBack}>
          <div className="card-one">
            <img src="img/black-cat.png" alt="" />
            <a href="https://www.flaticon.com/free-stickers/black-cat" title="black cat stickers" target="_blank">Sticker created by Stickers - Flaticon</a>
          </div>
          <div className="card-two">
            <p>"{fact}"</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card" ref={card}>
      <FaPaw className="paw"/>
      <FaPaw className="paw"/>
      <FaPaw className="paw"/>
      <FaPaw className="paw"/>
      <button className="card-none" onClick={handleClickBtn} ref={cardBtn}><FaRetweet /></button>
      <div className="card-flex" ref={cardFront}>
        <img src="img/cat_color.png" alt="" className="cat" />
        <a href="https://www.flaticon.com/free-icons/cat" title="cat icons" target="_blank">Icon created by Freepik - Flaticon</a>
        <button className="card-btn" onClick={handleClick}> 
          <FaPaw /> Show fact of the day <FaPaw />
        </button>
      </div>
      <div className="card-none" ref={cardBack}>
        <div className="card-one">
          <img src="img/black-cat.png" alt="" />
          <a href="https://www.flaticon.com/free-stickers/black-cat" title="black cat stickers" target="_blank">Sticker created by Stickers - Flaticon</a>
        </div>
        <div className="card-two">
          <p>"{fact}"</p>
        </div>
      </div>
    </div>
  );
}

export default CatCard;
