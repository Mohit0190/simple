import React,{useState} from "react";
import { Iprops} from "../types";

const Inputfield = ({people,setpeople}:Iprops) => {
  const [input, setinput] = useState({
    name:'',
    age:'',
    url:'',
    notes:'',
  });

  function onchange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void{

   setinput({...input,[e.target.name]:e.target.value});
  }
  function onclick():void{
     
      setpeople([...people,{
        name:input.name,
        age: parseInt(input.age),
        url:input.url,
        notes:input.notes
    }]);
    setinput({
      name:'',
      age:'',
      url:'',
      notes:'',
    });

  }
  
  return (
    <>
      <div className="field">
        <input type="text" name="name"  value={input.name}  placeholder="Name"  onChange={onchange}  />
        <input type="number" name="age" value={input.age}  placeholder="Age" onChange={onchange}  />
        <input type="text" name="url"  value={input.url} placeholder="Url"  onChange={onchange} />
        <textarea name="notes" value={input.notes} placeholder="Note" onChange={onchange} />
        <button onClick={onclick}>Click</button>
      </div>
      
    
    </>
  );
};

export default Inputfield;
