import Kep from './Kep';
import './App.css';

const konyveim=[
  {
    id:1,
    kepcim: "Nature Landscape Free Stock Image",
    kepLeiras: "Tájkép, hegyek",
    kepEleres: "https://cdn.stocksnap.io/img-thumbs/960w/nature-landscape_Y65WP68WKD.jpg"
},
{
  id:2,
  kepcim: "Wonderful Nature Beauty",
    kepLeiras: "Egy gyönyörű tájkép, egy elképesztően szép tóval.",
    kepEleres: "https://upload.wikimedia.org/wikipedia/commons/d/da/Wonderful_Nature_Beauty.jpg"
},
{
  id:3,
  kepcim: "Nature view in morning time",
    kepLeiras: "Szépséges kép",
    kepEleres: "https://pixahive.com/wp-content/uploads/2021/01/Nature-view-in-morning-time-265756-pixahive.jpg"
}
]

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h2>Képek</h2>
      </header>
      <article className="kepek">
        {
          konyveim.map((kep,index)=>{
            return (<Kep kepAdat={kep} key={index}/>)
          }
          )
        }
      </article>
      <footer className="lablec">
        Dékány Máté
      </footer>
    </div>
  );
}

export default App;
