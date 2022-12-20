import React, { useState } from 'react';
import axios from 'axios';

function RandomWord() {
  const[data,setdata]=useState('')
  const search=()=>{
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://wordsapiv1.p.rapidapi.com/words/',
      params: {random: 'true'},
      headers: {
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'x-rapidapi-key': 'fea6df6911mshc1fa3c57903fe58p1dc20bjsn7f6c867a7511'
      }
    };
    
    axios.request(options).then(res=>{
      setdata(res.data)
    })
    .catch(function (error) {
      console.error(error);
    });
  }
  return <div className='RandomWord'>
            <button onClick={search} ><h2>Click to get random word</h2></button>
            <h1>{data.word}</h1>
        </div>;
}

export default RandomWord;
