import {useState} from "react";

function SearchHeader({search}) {

 const [valueInput, setvalue] = useState('') 
const handleFormSubmit = (event)=>{
  event.preventDefault();
  debugger;
  search(valueInput)
} 
const handleChange =(event)=>{
  setvalue(event.target.value)
}

  return (
    <div className="serachDiv">
      <form onSubmit={handleFormSubmit}>
        <label className="searchLabel">Ne arıyorsunuz ?</label>
        <input value={valueInput} onChange={handleChange}></input>
      </form>
    </div>
  );
}

export default SearchHeader;
   