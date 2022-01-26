/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Data from './data.js';
import Detail from './Detail';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Rating from '@mui/material/Rating';

function App() {

  let history = useHistory();
  let [day,day변경] = useState(Data);

  // 별점 수 랜덤 함수
  const randomMaker = () => {
    let array = [0, 0, 0, 0, 0, 0, 0];
    let min = 1;
    let max = 6;
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * (max - min)) + min;
    }
    return array;
  };

  //별점 수 랜덤
  const [value, setValue] = React.useState(randomMaker);



  return (
    <div className="App">
      <Route exact path="/">
        <h1>일주일평가</h1>
        <div className='starBigBox'>
          <div className='starbox'>
              {
                day.map((a, i) => {
                return (
                  <>
                    <span>{day[i].title}</span>
                    <Rating name="read-only" value={value[i]} readOnly />
                    <div className='tri' onClick={()=>{history.push("/" + day[i].id)}}></div> 
                  </>
                  //
                  // <Score day={list} key={index}/>
                );
              })
              }           

          </div>
        </div>
      </Route>
      <Route path="/:id">
        <Detail day={day}/>
      </Route>
    </div>
  );
}

export default App;
