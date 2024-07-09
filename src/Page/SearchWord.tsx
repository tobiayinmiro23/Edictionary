import { useState } from "react"
import { Iresult } from "../Types/Types";
import Loader from "../Component/Loader";
import Card from "../Component/Card";
import { Fetch } from "../Fetch/Fetch";


const SearchWord = () => {
    const [error, seterror] = useState<boolean>(false)
    const [dataReady, setdataReady] = useState<boolean>(false)
    const [result, setresult] = useState<Iresult | null>(null)
    const [loading, setloading] = useState<boolean>(false)
    const [word, setword] = useState<string>('')
    const Search = () => {
        if (word.trim() === '') return
        Fetch({ setloading, setdataReady, setresult, seterror, word })
    }
    return <div className='home'>
        <div className="search">
            <input type="text" value={word} onChange={(e) => setword(e.target.value)} placeholder='Search word' />
            <div className="btn">
                <button onClick={Search}><h3>Search</h3></button>
            </div>
        </div>
        {loading && <Loader />}
        {error && <h3 className='error'>invalid inputs or we could not find the word you typed, enter valid word</h3>}
        {dataReady && <Card dataReady={dataReady} result={result} />}

    </div>;

}
export default SearchWord