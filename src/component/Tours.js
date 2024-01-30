import Card from "./Card";
import './Tours.css';

function Tours(props) {
  return (
    <div className="cards">{
       props.tours.map((tour)=>{
              return <Card {...tour} remHandler={props.remHandler}> </Card>
        })
      }
    </div>
  );
}
export default Tours;
 