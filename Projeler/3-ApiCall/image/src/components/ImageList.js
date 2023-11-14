import ImageItem from "./ImageItem";

function ImageList({ imagesPlaceholders }) {
  return (
    <div className="imageList">
      {imagesPlaceholders.map((image,index) => {
        return <ImageItem key={index} image={image}></ImageItem>;
      })}
    </div>
  );
}

export default ImageList;
