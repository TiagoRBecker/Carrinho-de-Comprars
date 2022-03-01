import Item from "../Item/CourseItem";
import {course} from "../../backend/dataBase"
import "./curso.css";
const Cursos = (props) => {
  return (
    <div className="container">
      
       {course.map((curso, index)=>(
           <Item
           img={curso.url}
           title={curso.name}
           price={`${curso.price.toFixed(2)}`}
           key={index}
           addToCart={props.onclick}/>
       ))} 
           
      
    </div>
  );
};

export default Cursos;
