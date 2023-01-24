import "./CatPlayer.css"
import { FaVolumeUp, FaVolumeMute, FaArrowDown } from "react-icons/fa"

function CatPlayer({reproducirMusica, silenciarMusica, hideMessage}) {

  return (
    <>
      <div className="cat-player-box">
        <div className="cat-player">
          <div>
            <button onClick={reproducirMusica}><FaVolumeUp /></button>
          </div>
          <div>
            <button onClick={silenciarMusica}><FaVolumeMute /></button>     
          </div>
        </div>
        <div className="cat-player-alert">
          <div><FaArrowDown /></div>
          <div className="cat-player-message">
            Click here to mute/unmute the music!
            <button onClick={hideMessage}>Ok</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CatPlayer