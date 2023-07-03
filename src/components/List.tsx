import { Istate } from "../types";

const List = ({ people }:Istate) => {
  const renderlist = ()=> {
    return people.map((person,index) => {
      return(<div className="container" key={index}>
        <div className="img-box">
          <img
            src={person.url}
            alt=""
          />
        </div>
        <div>
          <h4>{person.name}</h4>
        </div>
        <div>
          <h4>{person.age}</h4>
        </div>
        <div>
          <h4>{person.age}</h4>
        </div>
        <div>
          <h4>{person.notes}</h4>
        </div>
      </div>);
    });
  };
  return <div className="flexitems" >
      {renderlist()}
  </div>;
};

export default List;
