export interface Iresult {
    word?: string
    pronunciation?: { all?: string },
    results?: [{
        definition?: string,
        partOfSpeech?: string
    }],
    syllables?: { list?: string[] },

}
export interface Icard {
    dataReady: boolean,
    result: Iresult | null
}

export interface Ifetch {
    setloading: React.Dispatch<React.SetStateAction<boolean>>
    setdataReady: React.Dispatch<React.SetStateAction<boolean>>
    setresult: (data: Iresult | null) => void
    seterror: React.Dispatch<React.SetStateAction<boolean>>
    word?: string
}
