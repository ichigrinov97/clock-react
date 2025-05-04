import img2 from './img/img2.svg'
import style from './App.module.css';
import { useEffect } from 'react'
import { useState } from 'react'


function App() {

  const [date, setDate] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    const date = new Date();
    const datemonth = date.getMonth();
    switch (datemonth) {
      case 0:
        setDate(`${date.getDate()} January ${date.getFullYear()}`);
        break;
      case 1:
        setDate(`${date.getDate()} Fabruary ${date.getFullYear()}`);
        break;
      case 2:
        setDate(`${date.getDate()} Marth ${date.getFullYear()}`);
        break;
      case 3:
        setDate(`${date.getDate()} April ${date.getFullYear()}`);
        break;
      case 4:
        setDate(`${date.getDate()} May ${date.getFullYear()}`);
        break;
      case 5:
        setDate(`${date.getDate()} June ${date.getFullYear()}`);
        break;
      case 6:
        setDate(`${date.getDate()} July ${date.getFullYear()}`);
        break;
    
      default:
        break;
    }


    const timer = setInterval(()=>{
      let sec = date.getSeconds(); 
      let hour = date.getHours(); 
      let min = date.getMinutes(); 
      sec < 10? setTime(`${date.getHours()}:${date.getMinutes()}:0${date.getSeconds()}`): setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
      hour < 10? setTime(`0${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`): setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
      min < 10? setTime(`${date.getHours()}:0${date.getMinutes()}:${date.getSeconds()}`): setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    },1000)

    return ()=>{
      clearInterval(timer)
    }

  },[time])

     
  return (
    <div className={style.App}>
      <div className={style.secondContainer}>
        <div className={style.clockBoard}>
          <img src={img2} alt="" />
          <h1>{time}</h1>
          <p>{date}</p>
        </div>
      </div>


    </div>
  );
}

export default App;
