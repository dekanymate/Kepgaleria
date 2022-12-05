import "./Kiskepek.css"


function KisKepek(props){

    return(
    props.kepAdat.map((kep, index) => {
        return(
            <div  key={index} className="kiskep">
                 <img src={kep.kepEleres}></img>
            </div>
           
        )
    })
    )
}

export default KisKepek;