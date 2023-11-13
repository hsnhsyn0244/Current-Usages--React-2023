import "./App.css";
import Course from "./Course";
import { useState } from "react";

function getRandomCourse() {
  const courseArray = ["Reactt", "Java", "JavaScript", "Kotlin"];
  // alttaki ifade floor taban degerı demek random sınıfındakı degerı ıntegere yuvarlıo gerısıde random deger uretmek ıcın kullanılan ıslemler
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {

    setCourses([...courses, getRandomCourse()])
  };
  const courseList = courses.map((course,index)=>{
    return <Course key={index} courseName={course} />
  });

  return (
    <div className="App">
      <button className="addCourseButton" onClick={handleClick}>Kurs Ekle</button>
      <div className="courseList">
        {courseList}
      </div>
     
    </div>
  );
}

export default App;
