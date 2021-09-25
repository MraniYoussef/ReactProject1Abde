import { useEffect, useRef, useState } from "react";

function SearchBar({filterBooksCallBack}){
    const [text, setText] = useState('');

    const handleInputChange = e => {
        const value = e.target.value;
    setText(value);   }

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        filterBooksCallBack(text);
    }, [text])
    return (
            <div>
                <input ref={inputRef} value={text} onChange={handleInputChange} />
                <button>Search</button>
            </div>
    )
}

export default SearchBar;