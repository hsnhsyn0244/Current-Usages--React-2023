import "./App.css";
import SearchHeader from "./SearchHeadr";
import searchImages from "./api";
import {useState} from 'react'
import ImageList from "./components/ImageList";

function App() {
  
  const [images, setImages] = useState([])
  
  const handleSubmit =async (term) => {
    const result =await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit}></SearchHeader>
      <ImageList imagesPlaceholders={images}></ImageList>
    </div>
  );
}

export default App;