import { Icard } from "../Types/Types"

const Card = ({ dataReady, result }: Icard) => {
    return (
        <div className="word">
            <h1 >{result?.word}</h1>
            <div className={dataReady ? "definition" : 'none'}>
                {result?.results?.map(data => {
                    return <div className='info'>
                        <h3>Definition</h3>
                        <p className='deff'>{data?.definition}</p>
                        <h3>part of speech</h3>
                        <p >{data.partOfSpeech}</p>
                    </div> || <h1>no definition</h1>
                })}
                <div className={dataReady ? "definition" : 'none'}>
                    {
                        result?.pronunciation?.all ?
                            <div className="pronounciation">
                                <h3>pronunciation</h3>
                                <p >{result?.pronunciation?.all}</p>
                            </div>
                            :
                            <div></div>
                    }
                    {
                        result?.syllables ?
                            <div className="syllables ">
                                <h3>Syllables</h3>
                                <div className="syll">
                                    {result?.syllables?.list?.map(data => {
                                        return <p className='syll'>{data}</p> || <h1>no syllable</h1>
                                    })}
                                </div>
                            </div>
                            :
                            <div></div>
                    }
                </div>

            </div>

        </div>
    )
}
export default Card


// import { Icard } from "../Types/Types"

// const Card = ({ dataReady, result }: Icard) => {
//     return (
//         <div className="word">
//             <h1 >{result?.word}</h1>
//             <div className={dataReady ? "definition" : 'none'}>
//                 {result?.results?.map(data => {
//                     return <div className='info'>
//                         <h3>Definition</h3>
//                         <p className='deff'>{data.definition}</p>
//                         <h3>part of speech</h3>
//                         <p >{data.partOfSpeech}</p>
//                     </div> || <h1>no definition</h1>
//                 })}
//                 <div className={dataReady ? "definition" : 'none'}>
//                     <div className="pronounciation">
//                         <h3>pronunciation</h3>
//                         <p >{result?.pronunciation?.all}</p>
//                     </div>
//                     <div className="syllables ">
//                         <h3>Syllables</h3>
//                         <div className="syll">
//                             {result?.syllables?.list?.map(data => {
//                                 return <p className='syll'>{data}</p> || <h1>no syllable</h1>
//                             })}
//                         </div>

//                     </div>
//                 </div>

//             </div>

//         </div>
//     )
// }
// export default Card