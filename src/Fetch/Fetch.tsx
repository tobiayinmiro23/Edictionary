import axios from "axios";
import { Ifetch } from "../Types/Types";

export const Fetch = ({ setloading, setdataReady, setresult, seterror, word }: Ifetch) => {
    setloading(true)
    setdataReady(false)
    setresult(null)
    seterror(false)
    console.log(word)
    const options = {                      
        method: 'GET',
        url: `https://wordsapiv1.p.rapidapi.com/words/${word}`,
        headers: {
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
            'x-rapidapi-key': 'fea6df6911mshc1fa3c57903fe58p1dc20bjsn7f6c867a7511'
        }
    };
    axios.request(options).then(res => {
        setresult(res.data)
        setdataReady(true)
        setloading(false)
        console.log(res)
    }).catch(err => {
        console.log(err)
        seterror(true)
        setdataReady(false)
        setloading(false)
    })
}

export const Random = ({ setloading, setdataReady, setresult, seterror }: Ifetch) => {
    setloading(true)
    setdataReady(false)
    setresult(null)
    seterror(false)
    let options = {
        method: 'GET',
        url: 'https://wordsapiv1.p.rapidapi.com/words/',
        params: { random: 'true' },
        headers: {
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
            'x-rapidapi-key': 'fea6df6911mshc1fa3c57903fe58p1dc20bjsn7f6c867a7511'
        }
    };

    axios.request(options).then(res => {
        let word = res?.data?.word
        console.log(word)
        Fetch({ setloading, setdataReady, setresult, seterror, word })
    })
        .catch(function (error) {
            seterror(true)
           setloading(false)

        });
}
