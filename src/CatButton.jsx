import "./CatButton.css"
import { FaPaw } from "react-icons/fa";

function CatButton({reproducirMeow}) {
  
  function handleClick(){
    reproducirMeow()
  }

  return (
    <button className="btn-cat" onClick={handleClick}>
      <FaPaw />
    </button>
  )
}

export default CatButton