import Java from "./Images/Java.png";
import JavaScript from "./Images/JavaScript.png";
import Kotlin from "./Images/Kotlin.png";
import Reactt from "./Images/React.png";
import './Course.css'

const courseMap = {
  Reactt: Reactt,
  Java,
  JavaScript: JavaScript,
  Kotlin,
};

function Course({ courseName }) {
  // console.log(Reactt);
  // console.log(courseName);
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course"/>
    </div>
  );
}

export default Course;
