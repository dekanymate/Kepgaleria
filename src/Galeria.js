import { useState } from "react"
import Kep from './Kep';
import KisKepek from "./Kiskepek";



function Galeria(props) {
    const [aktivKep, setAktivKep] = useState(0);

    function novel() {
       setAktivKep(aktivKep + 1)
    }
    function csokkent() {
        setAktivKep(aktivKep - 1)
    }
  return (
      <article className="kepek">
        <button disabled={aktivKep == 0} onClick={csokkent}>Előző</button>  
        <button disabled={aktivKep == props.konyveim.length -1} onClick={novel}>Következő</button>
        <Kep kepAdat={props.konyveim[aktivKep]}/>
        <KisKepek kepAdat={props.konyveim.filter((konyv) => konyv.kepcim != props.konyveim[aktivKep].kepcim)}/> 
        
      </article>
  );
}

export default Galeria;
