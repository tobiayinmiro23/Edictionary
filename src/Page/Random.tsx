import { useState } from 'react';
import { Iresult } from "../Types/Types";
import { Random } from "../Fetch/Fetch";
import Loader from "../Component/Loader";
import Card from "../Component/Card";


function RandomWord() {
    const [error, seterror] = useState(false)
    const [dataReady, setdataReady] = useState<boolean>(false)
    const [result, setresult] = useState<Iresult | null>(null)
    const [loading, setloading] = useState<boolean>(false)
    const search = () => {
        Random({ setloading, setdataReady, setresult, seterror })
    }
    return <div className='RandomWord'>
        <button onClick={search} ><h2>Click to get random word</h2></button>
        <div>
            {loading && <Loader />}
            {error && <h3 className='error'>invalid inputs or we could not find the word you typed, enter valid word</h3>}
            {dataReady && <Card dataReady={dataReady} result={result} />}
        </div>
    </div>;
}

export default RandomWord;
