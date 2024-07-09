import { useRef } from "react"
import React, { } from "react"
type prop = {
    setpage: React.Dispatch<React.SetStateAction<string>>
}
const Header = ({ setpage }: prop) => {
    const searchRef = useRef<HTMLHeadingElement | null>(null)
    const randomRef = useRef<HTMLHeadingElement | null>(null)
    const focus = (e: React.MutableRefObject<HTMLHeadingElement | null>) => {
        const allRef = [searchRef, randomRef]
        allRef.map(item => item.current?.classList.remove('current'))
        e.current?.classList.add('current')
        if (e.current?.className.includes('search')) setpage('searchWord')
        else setpage('random')
    }


    return (
        <div className='Navigation'>
            <nav>
                <div className="heading">
                    <h1 className='search current' onClick={() => focus(searchRef)} ref={searchRef}>Search Word</h1>
                    <h1 className='random' onClick={() => focus(randomRef)} ref={randomRef}>Random Word</h1>
                </div>
            </nav>
        </div>
    )

}
export default Header