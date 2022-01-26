import React, {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './App.css';

import Rating from '@mui/material/Rating';


function Detail(props){
    const [value, setValue] = React.useState(0);

  let history = useHistory();
  let {id} = useParams();
  
  return (
      <div>
      <h2>{props.day[id].title}요일 평점 남기기</h2>


    <Rating
        name="simple-controlled"
        size="large"
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
    /> <br></br>

    <button onClick={()=>{history.push("/")}}>평점남기기</button>
      </div>
  )
};

export default Detail 