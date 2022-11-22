import './Kep.css';


function Kep(props){


    return (
        <div className = "kep">
            <img src={props.kepAdat.kepEleres}></img>
            <h3>Cím: {props.kepAdat.kepcim}</h3>
            <p>Rövid leírás: {props.kepAdat.kepLeiras}</p>
        </div>
    );
}

export default Kep;