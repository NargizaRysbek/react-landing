import { ConditionalRender } from './components/ConditionalRender';
import './App.css'
import { MainPage } from './components/Main';
import pic from './images/klub.png'

export const  App = () => {

  const data = [
    {
      title: "Physical Health",
      color: "#22356F"
    },
    {
      title: "Mental Health",
      color: "#0052C1"
    },
    {
      title: "Nutrition",
      color: null,
      img: pic
    },
    {
      title: "Gymnastics",
      color: "#62D0DF"
    },
    {
      title: "Crossfit",
      color: "#DEE1FF"
    },
    {
      title: "Aerobics",
      color: "#8F00FF"
    }
  ]
  return (
    <div className="App">
     {/* <MainPage/> */}
     {
       data.map((el, id) => {
         return    <ConditionalRender data={el} key={id}/>
       })
     }
  
    </div>
  );
}


