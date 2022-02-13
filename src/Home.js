import React, { useState } from 'react';
import axios from "axios";

function Home() {
    const[error,seterror]=useState(false)
    const[dataReady,setdataReady]=useState(false)
    const[status,setstatus]=useState(0)
    const[result,setresult]=useState([])
    const[word,setword]=useState('')
    const Search=()=>{
        setresult([])
        setstatus(0)
        seterror(false)
        const options = {
        method: 'GET',
        url: `https://wordsapiv1.p.rapidapi.com/words/${word}`,
        headers: {
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
            'x-rapidapi-key': 'fea6df6911mshc1fa3c57903fe58p1dc20bjsn7f6c867a7511'
        }
        };
        axios.request(options).then(res=>{
            setresult(res.data)
            setstatus(res.status)
        })
        .then(result=>{
            setdataReady(true)
        })
        .catch(function (error) {
            if(error)
            seterror(true)
            setdataReady(false)
           
        })
        setdataReady(true)
        if(dataReady){
            seterror(false)
            
            setdataReady(true)
        }
    }
    const key=[1,2,3,4,5,6,7,8,9,10,11]
        var id=key.map(item=>{
            return item
        })
    const key2=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o']
        var id2=key2.map(item=>{
            return item
        })
  return <div className='home'>
            <div className="search">
                <input type="text" value={word} onChange={(e)=>setword(e.target.value)} placeholder='Search word' />
                <div className="btn">
                    <button onClick={Search}><h3>Search</h3></button>
                </div>
            </div>
            {error && <h3 className='error'>invalid inputs or we could not find the word you typed, enter valid word</h3>}
            <div className= "word">
                <h1 key={id}>{result?.word}</h1>
                <div className={dataReady ? "definition" : 'none'}>
                    {result?.results?.map(data=>{
                        return <div key={id} className='info'>
                            <h3>Definition</h3>
                            <p className='deff'>{data.definition}</p>
                            <h3>part of speech</h3>
                            <p >{data.partOfSpeech}</p>
                            </div> || <h1>no definition</h1>
                    }  )}
                    <div  className={dataReady ? "definition" : 'none'}>
                    <div className="pronounciation">
                        <h3>pronunciation</h3>
                        <p >{result?.pronunciation?.all}</p>
                    </div>
                    <div className="syllables ">
                        <h3>Syllables</h3>
                        <div key={id2} className="syll">
                            {result?.syllables?.list.map(data=>{
                                return <p key={id2} className='syll' key={id}>{data}</p> || <h1>no syllable</h1>
                            })}
                        </div>
                        
                    </div>
                    </div>
                    
                </div>
               
            </div>
        </div>;
}

export default Home;
