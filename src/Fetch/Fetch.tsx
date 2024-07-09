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
            'x-rapidapi-key': process.env.API_KEY
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
            'x-rapidapi-key': process.env.API_KEY
        }
    };

    axios.request(options).then(res => {
        //   setdata(res.data)
        let word = res?.data?.word
        console.log(word)
        Fetch({ setloading, setdataReady, setresult, seterror, word })
    })
        .catch(function (error) {
            seterror(true)
            console.log(error)

        });
}
